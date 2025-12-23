export const COMPANY_INFO = {
  name: "LAMDAMPD", // Placeholder, will update if real name found
  tagline: "우리는 감정을 이해하는 AI를 만듭니다",
  description: "6차원 감정 벡터를 이미지화해 멀티모달 분석 모델로 해석하고 추적하는 감정 분석 AI 모듈 기업",
};

export const NAVIGATION = [
  { name: "Home", href: "/" },
  // { name: "About", href: "/about" },
  { name: "Technology", href: "/technology" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Tests", href: "/tests" },
  // { name: "Impact", href: "/impact" },
  // { name: "Team", href: "/team" },
  // { name: "Contact", href: "/contact" },
];

export const PROBLEM_SECTION = {
  title: "마음의 문제는 병원 밖에서 더 많이 일어납니다",
  stats: [
    { label: "우울 위험군 성인", value: "22.8%" },
    { label: "상담 미이용 (비용 부담)", value: "42.6%" },
    { label: "상담 미이용 (심리적 낙인)", value: "33.4%" },
  ],
  context: "20~30대는 인지 스트레스가 가장 높지만, 병원이나 상담센터에 갈 정도는 아니라고 생각하며 방치하는 ‘회색 지대’에 놓여 있습니다. 이 시기를 놓치면 마음의 골든타임을 놓치게 됩니다.",
};

export const SOLUTION_SECTION = {
  title: "감정을 6차원 벡터로 보고, 이미지로 그려냅니다",
  description: "단순 텍스트 분석이 아닙니다. 우리는 감정을 구조화된 데이터로 변환하여 정밀하게 추적합니다.",
  steps: [
    { id: 1, title: "Vectorize", description: "감정을 6차원 벡터로 구조화" },
    { id: 2, title: "Image Generation", description: "벡터를 ‘감정 지문(Fingerprint)’ 이미지로 변환" },
    { id: 3, title: "AI Analysis", description: "멀티모달 모델이 이미지를 해석" },
    { id: 4, title: "Tracking", description: "시간축에 따른 변화와 패턴 추적" },
  ],
};

export const IDENTITY_FIX = {
  statement: "우리가 만드는 것은 앱이 아니라\n감정 분석 AI 모듈입니다",
  subtext: "B2C 앱은 우리의 기술을 증명하는 하나의 사례일 뿐입니다.\n우리의 본질은 감정을 이해하고 추적하는 엔진을 공급하는 것입니다.",
};

export const TECHNOLOGY_DETAILS = {
  core_features: [
    "Emotion Embedding (6D) 생성",
    "Emotion Fingerprint Image 생성",
    "Emotion State 추론 및 불확실성(Confidence) 계산",
    "변화 감지(Drift) 및 위험 신호 탐지(Early Warning)",
    "개입 추천(Intervention Routing) 알고리즘",
  ],
  difference: [
    {
      competitor: "텍스트 기반 분석",
      us: "비언어적 감정 패턴까지 시각화하여 분석",
    },
    {
      competitor: "단발성 상담 챗봇",
      us: "시계열 데이터 추적을 통한 감정의 흐름 파악",
    },
  ],
};

export const USE_CASES = {
  b2c: {
    title: "Personal Care",
    description: "개인을 위한 감정 기록 및 관리 서비스",
    features: ["나만의 감정 지문 기록", "감정 변화 리포트", "위험 신호 알림"],
  },
  b2b: {
    title: "Enterprise Solutions",
    description: "기업 구성원의 멘탈케어 및 리스크 관리",
    features: ["조직 감정 모니터링 대시보드", "번아웃 조기 감지", "EAP 연계"],
  },
  b2g: {
    title: "Public Sector",
    description: "교육 및 복지 사각지대 해소를 위한 공공 솔루션",
    features: ["학생/청년 고위험군 조기 발굴", "24시간 AI 예진 및 상담 트리아지", "맞춤형 정책 연결"],
  },
};

export const SEO_DEFAULTS = {
  title: "감정 분석 AI 모듈 기업 | Emotion AI",
  description: "6차원 감정 벡터를 이미지화해 감정을 이해하고 추적하는 AI 모듈. B2C, B2B, B2G를 아우르는 정신건강 솔루션.",
  keywords: ["감정 AI", "Emotion AI", "감정 분석", "AI 모듈", "멘탈케어", "정신건강", "B2B 솔루션"],
};
