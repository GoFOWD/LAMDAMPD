"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Renderer, Camera, Transform, Geometry, Program, Mesh, Color } from 'ogl'

export function PrismIntro() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // --- Animation Phases ---
  // Text Animations
  // First text: visible from start, fades out when beam is 20% descended (at scroll progress ~0.06)
  const firstTextOpacity = useTransform(smoothProgress, [0, 0.04, 0.06], [1, 1, 0])
  // Second text: appears when beam is 50% descended (at scroll progress ~0.15)
  const secondTextOpacity = useTransform(smoothProgress, [0.13, 0.17, 0.35, 0.45], [0, 1, 1, 0])
  
  // Phase 1: Beam Descends (0% - 30%) - Extended duration for longer scroll
  // Ends exactly at 50% where the rays start
  const beamHeight = useTransform(smoothProgress, [0, 0.3], ["0%", "50%"])
  const beamOpacity = useTransform(smoothProgress, [0, 0.05, 0.8, 0.9], [0, 1, 1, 0])

  // Phase 2: Prism Materializes (20% - 40%)
  const prismOpacity = useTransform(smoothProgress, [0.2, 0.4, 0.75, 0.85], [0, 1, 1, 0])
  const prismScale = useTransform(smoothProgress, [0.2, 0.4], [0.8, 1.2])
  const prismRotate = useTransform(smoothProgress, [0.2, 0.8], [0, 15]) 

  // Phase 3: Dispersion (fades out by 80%)
  const raysFinalOpacity = useTransform(smoothProgress, [0.38, 0.45, 0.65, 0.8], [0, 0.5, 0.5, 0])
  const raysSpread = useTransform(smoothProgress, [0.4, 0.75], [0, 1])
  
  // Phase 4: Content Reveal (Everything fades out by 85%)
  const containerOpacity = useTransform(smoothProgress, [0.7, 0.85], [1, 0])

  return (
    <div ref={containerRef} className="relative h-[600vh] w-full">
      <motion.div 
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-40"
        style={{ opacity: containerOpacity }}
      >
        {/* Dark background for both modes - creates cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-transparent pointer-events-auto z-0" />
        
        {/* --- Text Elements Container --- */}
        {/* Fixed container ensures both texts appear in exactly the same position */}
        <div className="absolute top-1/2 left-0 right-1/2 -translate-y-1/2 z-30 flex items-center justify-end pr-8 md:pr-16 lg:pr-20">
          <div className="relative max-w-[80%] sm:max-w-none">
            {/* First Text: 당신의 감정은 무슨색인가요 */}
            <motion.div
              className="absolute top-0 right-0 text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide whitespace-nowrap"
              style={{ opacity: firstTextOpacity }}
            >
              당신의 감정은 무슨색인가요
            </motion.div>

            {/* Second Text: 우리와 함께 당신의 색을 보아요 */}
            <motion.div
              className="absolute top-0 right-0 text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide whitespace-nowrap"
              style={{ opacity: secondTextOpacity }}
            >
              우리와 함께 당신의 색을 보아요
            </motion.div>
          </div>
        </div>
        
        {/* --- The Beam (theme-aware color) --- */}
        <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-white dark:bg-white z-20 origin-top shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            style={{ 
                height: beamHeight, 
                opacity: beamOpacity 
            }}
        >
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-16 bg-white/50 blur-lg rounded-full" />
        </motion.div>

        {/* --- The Prism (OGL 3D Tetrahedron) --- */}
        <div className="relative z-30 w-full h-full flex items-center justify-center pointer-events-none">
            <PrismScene progress={smoothProgress} opacity={prismOpacity} />
        </div>

        {/* --- Dispersion Rays (Extended to bleed into content) --- */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
            <Ray angle={-70} color="var(--prism-red)" progress={raysSpread} opacity={raysFinalOpacity} />
            <Ray angle={-45} color="var(--prism-orange)" progress={raysSpread} opacity={raysFinalOpacity} />
            <Ray angle={-20} color="var(--prism-yellow)" progress={raysSpread} opacity={raysFinalOpacity} />
            <Ray angle={0} color="var(--prism-green)" progress={raysSpread} opacity={raysFinalOpacity} />
            <Ray angle={20} color="var(--prism-blue)" progress={raysSpread} opacity={raysFinalOpacity} />
            <Ray angle={45} color="var(--prism-indigo)" progress={raysSpread} opacity={raysFinalOpacity} />
            <Ray angle={70} color="var(--prism-violet)" progress={raysSpread} opacity={raysFinalOpacity} />
        </div>

      </motion.div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
         className="fixed bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground text-sm tracking-widest uppercase z-[60]"
         style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
         animate={{ y: [0, 10, 0] }}
         transition={{ repeat: Infinity, duration: 2 }}
      >
        Scroll to Begin
      </motion.div>
    </div>
  )
}


function PrismScene({ progress, opacity }: { progress: any, opacity: any }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const renderer = new Renderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true,
            dpr: window.devicePixelRatio,
        });
        const gl = renderer.gl;

        const camera = new Camera(gl, { fov: 35 });
        camera.position.set(0, 0, 5);

        const scene = new Transform();

        // Tetrahedron Geometry with Normals for Glassy Look
        const v = [
            [0, 1, 0],    // 0: Top
            [-1, -0.5, 0.7], // 1: Front Left
            [1, -0.5, 0.7],  // 2: Front Right
            [0, -0.5, -1],   // 3: Back
        ];
        
        const pos = new Float32Array([
            ...v[0], ...v[1], ...v[2], // Front
            ...v[0], ...v[2], ...v[3], // Right
            ...v[0], ...v[3], ...v[1], // Left
            ...v[1], ...v[3], ...v[2], // Bottom
        ]);

        const norm = new Float32Array(12 * 3);
        for (let i = 0; i < 4; i++) {
            const i3 = i * 9;
            const v1 = [pos[i3], pos[i3+1], pos[i3+2]];
            const v2 = [pos[i3+3], pos[i3+4], pos[i3+5]];
            const v3 = [pos[i3+6], pos[i3+7], pos[i3+8]];
            
            const t1 = [v2[0] - v1[0], v2[1] - v1[1], v2[2] - v1[2]];
            const t2 = [v3[0] - v1[0], v3[1] - v1[1], v3[2] - v1[2]];
            const n = [
                t1[1] * t2[2] - t1[2] * t2[1],
                t1[2] * t2[0] - t1[0] * t2[2],
                t1[0] * t2[1] - t1[1] * t2[0],
            ];
            const l = Math.sqrt(n[0]*n[0] + n[1]*n[1] + n[2]*n[2]);
            for (let j = 0; j < 3; j++) {
                norm[i3 + j*3] = n[0]/l;
                norm[i3 + j*3 + 1] = n[1]/l;
                norm[i3 + j*3 + 2] = n[2]/l;
            }
        }

        const geometry = new Geometry(gl, {
            position: { size: 3, data: pos },
            normal: { size: 3, data: norm },
        });

        const vertex = /* glsl */ `
            attribute vec3 position;
            attribute vec3 normal;
            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;
            varying vec3 vNormal;

            void main() {
                vNormal = normal;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

        const fragment = /* glsl */ `
            precision highp float;
            varying vec3 vNormal;
            uniform float uOpacity;
            
            void main() {
                vec3 normal = normalize(vNormal);
                float fresnel = pow(1.0 - abs(dot(normal, vec3(0, 0, 1))), 1.5);
                vec3 color = mix(vec3(1.0), vec3(0.8, 0.9, 1.0), fresnel);
                gl_FragColor = vec4(color, (0.1 + fresnel * 0.4) * uOpacity);
            }
        `;

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uOpacity: { value: 0 },
            },
            transparent: true,
            cullFace: false,
        });

        const mesh = new Mesh(gl, { geometry, program });
        mesh.setParent(scene);

        let animationId: number;
        const update = () => {
            animationId = requestAnimationFrame(update);

            const p = progress.get();
            const op = opacity.get();
            
            program.uniforms.uOpacity.value = op;
            
            mesh.rotation.y = p * Math.PI * 4; 
            mesh.rotation.x = 0; 
            mesh.rotation.z = 0;
            
            const s = p < 0.2 ? 0 : Math.min((p - 0.2) * 4, 1.8);
            mesh.scale.set(s);

            renderer.render({ scene, camera });
        };

        const resize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
        };
        window.addEventListener('resize', resize, false);
        resize();

        update();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas ref={canvasRef} className="w-full h-full" style={{ filter: 'blur(4px)' }} />
    );
}

function Ray({ angle, color, progress, opacity }: any) {
    const rotate = useTransform(progress, [0, 1], [0, angle])
    const length = useTransform(progress, [0, 1], ["0%", "90vh"])
    const width = useTransform(progress, [0, 1], ["0px", "350px"])
    
    return (
        <motion.div
            className="absolute left-1/2 -translate-x-1/2 z-10 origin-top mix-blend-screen pointer-events-none"
            style={{
                top: "50%",
                height: length,
                width: width,
                backgroundColor: color,
                opacity: opacity,
                rotate: rotate,
                filter: "blur(70px)"
            }}
        />
    )
}
