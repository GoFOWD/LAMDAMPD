## 0. 한 줄 요약 
6차원 감정 벡터를 **“이미지화”** 해 멀티모달 분석 모델로 **해석·추적**하는 **‘감정 분석 AI 모듈’** 을 개발하고, 이를 **B2C(심리관리), B2B(기업용 웰빙/리스크), B2G(교육·복지)** 로 확장해 **구독+라이선스+매칭** 수익을 만드는 회사.
## 1. 회사/팀 현황
- **팀 구성**: 4명
- **현재 단계**: MVP 개발 중
- **초기 검증/수익**: 심리 테스트 2개 운영, 실사용자 유입 및 광고 수익 발생(트래픽·데이터 확보 목적)
- **성장 로드맵(3단계)**
    1. 심리테스트/콘텐츠로 **초기 감정 데이터 확보**
    2. 감정 분석 모듈을 탑재한 **심리관리 챗 플랫폼** → **구독 수익 + 데이터 지속 축적**
    3. 감정 분석 모델 고도화 완료 → **모듈/API 기반 추가 사업(B2B/B2G) 확장**
## 2. 문제 정의 (대한민국 20~30대 청년)
20~30대는 “병원에 갈 정도는 아니지만” 일상 스트레스·우울·불안이 반복되고, 상담 접근(비용·낙인·시간·기관 연결)이 낮아 **상태 악화 전 ‘지속 모니터링+개입’이 어려운 구간**이 크다.
### 2.1 공공/전문 근거로 본 ‘비임상(병원 이전)’의 큰 공백
- 보건복지부 ‘2023 정신건강 실태조사’ 요약(첨부 PDF 정리본): 성인 **22.8%가 최근 1년 우울 위험군**에 해당
- 상담/치료 미이용 이유(동 조사 요약): **비용 부담 42.6%**, **심리적 부담/낙인 33.4%**, **시간 부족 24.7%**
    → “힘들지만 병원·상담센터까지는 가지 않는” 잠재 시장이 구조적으로 큼
- 공중보건 통계/리포트에서도 **인지 스트레스는 20·30대가 상대적으로 높다**는 결과가 반복적으로 보고됩니다(질병관리청/PHWR 기반 정리). [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12272699/?utm_source=chatgpt.com)
### 2.2 결론
단순 “상담 챗봇”만으로는 부족 
**감정 상태를 정량·지속 추적**해 개인별 변화(악화/회복/트리거)를 파악하고, 위험 신호에 맞춰 **맞춤 개입(또는 전문가/기관 연계)** 이 가능한 **기술 모듈**이 핵심 레버리지
## 3. 해결책: 감정 분석 AI 모듈 (제품 정의)
### 3.1 핵심 아이디어
- 사용자의 감정을 **6차원 벡터로 구조화**
- 벡터를 **이미지(감정 지문)** 로 변환
- 이미지 분석 기반 모델이 감정 상태를 **해석(understanding)**
- 시간축 누적 **추적(tracking)** → 개인별 변화/트리거/회복패턴 모델링
### 3.2 “모듈”이 제공하는 가치 (API/SDK 관점)
- **Emotion Embedding(6D) 생성**
- **Emotion Fingerprint Image 생성**
- **Emotion State 추론 + 불확실성(Confidence)**
- **변화 감지(Drift) / 위험 신호 탐지(Early warning)**
- **개입 추천(Intervention routing)**: B2C/B2B/B2G 환경별 규칙·전문가 체계 연결

> 포지셔닝 핵심: “감정을 단순 분석하는 앱”이 아니라, **감정을 이해하고 추적하는 ‘모듈/엔진’**.
## 4. 시장: “현재 시장” + “미래(감정 AI 성장) 시장” TAM·SAM·SOM
감정 분석 모듈은 “멘탈케어 앱 시장”보다 더 큰 **Emotion AI / Emotion Detection & Recognition(감정 인식 전반)** 시장으로 확장 가능합니다.
### 4.1 현재 시장 파이(글로벌)
**(A) 좁은 정의: Emotion AI 시장 (SDK/API/분석 솔루션 중심)**
- 2024년 **2.74B 달러 → 2030년 9.01B 달러** 전망(’24–’30 CAGR 21.9%) [MarketsandMarkets+1](https://www.marketsandmarkets.com/PressReleases/emotion-ai.asp?utm_source=chatgpt.com)
**(B) 넓은 정의: Emotion Detection & Recognition 시장(감정 인식 전반)**
- 2023년 **47.28B 달러 → 2030년 136.46B 달러** 전망 [Grand View Research](https://www.grandviewresearch.com/industry-analysis/emotion-detection-recognition-market-report?utm_source=chatgpt.com)
- APAC 비중: 2023년 **30.5%** [Grand View Research](https://www.grandviewresearch.com/industry-analysis/emotion-detection-recognition-market-report?utm_source=chatgpt.com)
### 4.2 미래 시장 파이(감정 분석 AI 모듈 관점, 2030/2033)
- Emotion AI(직접 시장): 2030년 **9.01B 달러** [MarketsandMarkets+1](https://www.marketsandmarkets.com/PressReleases/emotion-ai.asp?utm_source=chatgpt.com)
- Emotion Detection & Recognition(확장 TAM): 2030년 **136.46B 달러** [Grand View Research](https://www.grandviewresearch.com/industry-analysis/emotion-detection-recognition-market-report?utm_source=chatgpt.com)

>  “미래 시장 파이”는 위 수치(2030)를 기준으로 TAM을 제시하고, 아래 SAM/SOM은 **가정(Assumption)을 명시한 계산형**으로 구성
### 4.3 SAM/SOM 산정(대한민국 기준) 
공공기관이 “한국 Emotion AI 시장 비중”을 매년 직접 발표하진 않으므로, 
**전문 리포트 TAM + 지역 비중(근거) + 한국 비중(가정) + 시나리오**로 제시
#### (1) 미래 SAM(대한민국, 2030) — 보수/기준/공격
- 기준 TAM(2030, Emotion AI) = **9.01B 달러** [MarketsandMarkets+1](https://www.marketsandmarkets.com/PressReleases/emotion-ai.asp?utm_source=chatgpt.com)
- APAC 비중(프록시, EDR 기준) = **30.5%** [Grand View Research](https://www.grandviewresearch.com/industry-analysis/emotion-detection-recognition-market-report?utm_source=chatgpt.com)
- APAC 규모(프록시) = 9.01B × 30.5% = **2.75B 달러(추정)**
- 대한민국 비중(가정, APAC 내 3~6%)
    - 보수(3%) SAM = 2.75B × 3% = **82.5M 달러**
    - 기준(4.5%) SAM = 2.75B × 4.5% = **123.8M 달러**
    - 공격(6%) SAM = 2.75B × 6% = **165.0M 달러**

> APAC 비중은 리포트 근거가 있고 [Grand View Research](https://www.grandviewresearch.com/industry-analysis/emotion-detection-recognition-market-report?utm_source=chatgpt.com), 한국 비중(3~6%)은 추정
#### (2) 미래 SOM(대한민국, 2030) — 3년 내 점유 목표 예시
SOM(3년 내) = SAM × 0.5~2.0% (B2B/B2G 레퍼런스 확보 속도에 따라)
- 보수(0.5%) = **0.41M ~ 0.83M 달러**
- 기준(1.0%) = **0.83M ~ 1.65M 달러**
- 공격(2.0%) = **1.65M ~ 3.30M 달러**  
    (위 범위는 SAM 시나리오 82.5~165.0M 달러 기준)
## 5. 경쟁사(대한민국) 및 차별점: “앱”이 아니라 “모듈”로 이기는 포지션
### 5.1 라임 AI
- 스트레스 분석·하루 대처 전략 등, **사용자 언어(텍스트) 분석 기반** 접근
- 한계: 텍스트 기반이라 **비언어적 감정(시각/표정/패턴) 반영 부족**, 해상도 낮음
### 5.2 디스턴싱(Distancing)
- 성신여대·서울대 연구 기반 CBT*AI 앱, **인지행동치료(CBT) 모바일 훈련/교육**  중심*
### 5.3 WeRomy(위로미)
- GPT 기반 대화형 AI 상담 + 자가진단/결과해석 형태(첨부 PDF 요약)
    사업 계획서 자료 출처
### 5.4 우리 차별점(모듈 관점)
- **감정 6차원 벡터 → 이미지화 → AI 분석**이라는 독자 파이프라인
- “현재 감정”이 아니라 **감정 변화(추세·드리프트) 추적**이 설계에 내장
- B2C 앱은 대표 유스케이스일 뿐,
    - B2B(직원 웰빙/콜센터/HR)
    - B2G(교육청/복지부/지자체)  
        에 **SDK/API로 수익 확장 가능**
## 6. 비즈니스 모델(수익 다각화)
- **B2C 구독**: 감정 추적 기반 심리관리(월 구독)
- **B2B 라이선스**: 감정 분석 모듈 SDK/API + 대시보드(사용량 기반 과금)
- **전문가 매칭**: 고위험/고난도 케이스를 사람 상담/임상으로 라우팅(수수료)
- **데이터 사업(주의: 규제·동의·익명화 필수)**: 가공·익명화된 집합 통계/인사이트 제공

> 가격대 정합성(시장 평균 코멘트): “한국 기준 약 12,000~14,000원 수준, 월 1~2만 원은 평균과 정합”
## 7. 시장 진입 전략(GTM) — “모듈 중심” 설계
### 7.1 1단계(지금~MVP): 데이터 엔진 만들기
- 현재 운영 중인 **심리 테스트(무료) → 트래픽/브랜드/초기 데이터 확보** 전략 유지
- KPI를 단순 MAU가 아니라 다음으로 정의:
    - 라벨 품질(자기보고 일관성/노이즈 비율)
    - 분포 커버리지(연령/상황/시간대)
    - 추적성(동일 사용자의 시계열 길이)
### 7.2 2단계(B2C로 신뢰 지표 만들기): “모듈 성능”을 증명
- 앱에서 “감정 변화 추적 리포트”를 핵심 UX로 제공
- 아래를 **모듈의 성능 지표**로 전환:
    - 잔존율(Retention)
    - 개입 후 변화(자기보고/행동지표)
### 7.3 3단계(B2B/B2G 확장): 패키지 납품
- **API/SDK + 대시보드 + 안전 가이드라인** 패키지로 납품
- 특히 B2G는 “정책 KPI(예방·조기개입·연계)”에 맞춰 제안서 설계
## 8. SWOT (감정 분석 AI 모듈 기준)
- **S(강점)**: 감정 “추적” 가능한 구조(벡터/이미지화/모델), 초기 사용자 데이터 수집 파이프라인 존재
- **W(약점)**: 임상적 효능 검증/규제 대응/데이터 윤리(동의·익명화·보안) 비용
- **O(기회)**: Emotion AI 및 감정 인식 시장 고성장 전망(2030) [MarketsandMarkets+1](https://www.marketsandmarkets.com/PressReleases/emotion-ai.asp?utm_source=chatgpt.com)
- **T(위협)**: 대형 모델/API 사업자의 기능 흡수, 프라이버시 규제 강화, 오판 리스크(신뢰성)
## 9. STP
- **Segmentation(전국 단위)**: 20~30대 청년(대학생/취준/직장초기/프리랜서)
- **Targeting**: “병원급은 아니지만 반복적으로 힘든 날이 많은 층” + “자기관리 니즈가 있는 디지털 친화층”
- **Positioning(핵심 문장)**:  
    “감정을 단순 분석하는 앱이 아니라, 감정을 **이해(interpret)**하고 **추적(track)**하는 AI 모듈”
## 10. 재무 계획(초기, 보수적으로)
- **창업 초기(0~6개월)**: 공동창업자 최소 급여(예: 200~300만원 수준) + 클라우드/모델/API 비용 최소화
- **12개월 플랜**:
    - B2C 구독 매출로 기본 러닝코스트 일부 상쇄
    - B2B PoC 2~3건 확보 시 모듈 매출이 “고정비 흡수” 역할
### 인건비
- 팀원 4명
- 1인 월 **200~300만 원**
- 평균 250만 원 기준

**월 인건비: 약 1,000만 원**  
**연간: 약 1억 2천만 원**
### 월 고정비 구조

|항목|월 비용|
|---|---|
|인건비|1,000만|
|서버·AI 인프라|100만|
|마케팅|250만|
|기타 운영비|100만|
|**합계**|**1,650만 원**|

> 월별 손익/현금흐름표는 “구독 ARPPU, 유료 전환율, 이탈률, 추론비(토큰/추론횟수), 서버비”가 들어가야 정밀
## 11. B2G 확장 전략 (요청 반영: 기관 + 활용 방향)
### 주요 기관
- **보건복지부**
- **교육부·교육청**
- **국방부**
- **고용노동부**
- **지자체 정신건강센터(정신건강복지센터 등)*
### 활용 방향
1. **예방 중심 감정 모니터링**
	- 청년·학생·장병 대상 정기 감정 체크(시계열)
	- 위험 신호 조기 탐지 및 적정 기관으로 연계
2. **AI 예진·보조 상담**
	- 상담 인력 부족(대기/접근성) 문제를 보완
	- 24시간 접근 가능한 AI 예진, 상담 전 단계 트리아지(triage)
3. **청년·학생·장병 대상 감정 관리**
	- 청년(취업/번아웃/관계), 학생(학업/정서), 장병(군 적응/우울) 등 대상군별 개입 전략 최적화
## 핵심 수치 요약
### 문제/타겟 관련
- 우울 위험군: 성인 **22.8%**
    사업 계획서 자료 출처
- 상담/치료 미이용 이유: 비용 **42.6%**, 낙인 **33.4%**, 시간 **24.7%**
    사업 계획서 자료 출처
- 20·30대가 스트레스가 상대적으로 높다는 공중보건 통계 근거(질병관리청/PHWR 기반). [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12272699/?utm_source=chatgpt.com)
### 시장(글로벌)
- Emotion AI(직접 시장): **2024 2.74B → 2030 9.01B** [MarketsandMarkets+1](https://www.marketsandmarkets.com/PressReleases/emotion-ai.asp?utm_source=chatgpt.com)
- Emotion Detection & Recognition(확장 시장): **2023 47.28B → 2030 136.46B**, APAC **30.5%** [Grand View Research](https://www.grandviewresearch.com/industry-analysis/emotion-detection-recognition-market-report?utm_source=chatgpt.com)
### 한국 SAM/SOM(계산형, Assumption 포함)
- APAC 프록시 = 9.01B × 30.5% = **2.75B** [Grand View Research+1](https://www.grandviewresearch.com/industry-analysis/emotion-detection-recognition-market-report?utm_source=chatgpt.com)
- Korea SAM(2030, 가정 3~6%) = **82.5M ~ 165.0M 달러**
- Korea SOM(3년 내, SAM의 0.5~2%) = **0.41M ~ 3.30M 달러**
## 출처 목록(시장/수치 링크)

- MarketsandMarkets: Emotion AI 시장(2024→2030, 2.74B→9.01B) [MarketsandMarkets+1](https://www.marketsandmarkets.com/PressReleases/emotion-ai.asp?utm_source=chatgpt.com)
- Grand View Research: Emotion Detection & Recognition 시장(2023 47.28B, 2030 136.46B, APAC 30.5%) [Grand View Research](https://www.grandviewresearch.com/industry-analysis/emotion-detection-recognition-market-report?utm_source=chatgpt.com)
- PHWR/질병관리청 계열 공개자료(인지 스트레스 20·30대 상대적으로 높음) [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12272699/?utm_source=chatgpt.com)
- 보건복지부 ‘2023 정신건강 실태조사’
- 통계청 ‘2023 사회조사’ 
- WHO·OECD 정신건강 보고서(2023)
- Global Market Insights 2024
- 국회입법조사처(2024) 정신건강산업 보고서
- 블루시그넘 공식 자료 + 특허정보원 + 중기부 팁스 선정자료
- 보건복지부 혁신의료기기 지정 공고, 특허정보원, 디스턴싱 연구 보고서
- 위로미 회사 소개서, 중기부 팁스 선정자료