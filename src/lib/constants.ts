export const NAV_LINKS = [
  { id: "problem", label: "왜 호두랑?" },
  { id: "solution", label: "이렇게 작동해요" },
  { id: "features", label: "기능" },
  { id: "product", label: "노트" },
  { id: "cta", label: "시작하기" },
] as const;

export const CTA_TEXT = "호두랑 타임캡슐에 저장하고 퀴즈로 받아보기";
export const CTA_HREF = "/record";

export const HERO = {
  badge: "두뇌 건강 플랫폼",
  headline: "소중한 기억,\n호두랑이 지켜드릴게요",
  subheadline:
    "추억을 타임캡슐에 기록하면 AI가 퀴즈로 만들어 드려요.\n기억은 즐겁게 관리하는 거예요.",
  cta: CTA_TEXT,
};

export const PROBLEM = {
  badge: "왜 필요할까요?",
  headline: "기억은 흐려집니다",
  subheadline:
    "우리 모두의 기억은 시간이 지나면 자연스럽게 흐려져요.\n아쉬운 건, 그 소중한 순간들이 함께 사라진다는 거예요.",
  cards: [
    {
      stat: "74%",
      label: "24시간 후 망각률",
      desc: "에빙하우스의 연구에 따르면, 학습한 내용의 74%가 하루 만에 사라집니다.",
      icon: "⏰",
    },
    {
      stat: "65세+",
      label: "기억력 저하 시작",
      desc: "65세 이상 3명 중 1명이 기억력 저하를 경험하지만, 꾸준한 관리로 개선할 수 있습니다.",
      icon: "🧠",
    },
    {
      stat: "0개",
      label: "기억 관리 서비스",
      desc: "일기 앱은 많지만, 기록한 추억을 다시 꺼내 기억력을 관리해주는 서비스는 없었습니다.",
      icon: "📱",
    },
  ],
};

export const SOLUTION_FLOW = {
  badge: "이렇게 작동해요",
  headline: "3단계로 기억을 지켜요",
  steps: [
    {
      step: "01",
      title: "추억을 기록해요",
      desc: "사진, 음성, 손글씨, 텍스트 — 편한 방식으로 소중한 순간을 타임캡슐에 담아요.",
      icon: "✏️",
    },
    {
      step: "02",
      title: "AI가 일기로 정리해요",
      desc: "기록한 내용을 AI가 따뜻한 일기로 정리해 드려요. 사진 한 장도 이야기가 됩니다.",
      icon: "🤖",
    },
    {
      step: "03",
      title: "퀴즈로 기억을 되살려요",
      desc: "저장된 추억에서 퀴즈가 만들어져요. 풀면서 자연스럽게 기억력을 관리할 수 있어요.",
      icon: "🎯",
    },
  ],
};

export const QUIZ_PREVIEW = {
  badge: "AI 퀴즈",
  headline: "이런 퀴즈가 만들어져요",
  subheadline: "내 추억에서 나온 퀴즈라 더 재미있고, 과학적으로도 효과적이에요.",
  quizzes: [
    {
      question: "지난 주 손녀와 함께 만든 음식은?",
      options: ["된장찌개", "김치전", "떡볶이", "불고기"],
      answer: 1,
      tag: "가족 추억",
    },
    {
      question: "3월에 방문한 공원 이름은?",
      options: ["남산공원", "올림픽공원", "서울숲", "여의도공원"],
      answer: 2,
      tag: "나들이 기록",
    },
    {
      question: "지난달 생신 케이크의 맛은?",
      options: ["초콜릿", "딸기", "치즈", "녹차"],
      answer: 0,
      tag: "특별한 날",
    },
  ],
  science: "간격 반복(Spaced Repetition) 기반 — 기억 유지에 과학적으로 검증된 방법",
};

export const INPUT_METHODS = {
  badge: "쉬운 기록",
  headline: "기록이 어려우셨나요?",
  subheadline: "호두랑은 어떤 방식이든 괜찮아요",
  methods: [
    {
      title: "사진",
      desc: "사진 한 장이면 충분해요. AI가 상황을 파악하고 일기로 만들어 드려요.",
      icon: "📷",
    },
    {
      title: "음성",
      desc: "편하게 말씀하세요. 음성을 인식해서 자동으로 기록됩니다.",
      icon: "🎤",
    },
    {
      title: "손글씨",
      desc: "노트에 쓴 글씨를 촬영하면 디지털로 변환해 저장합니다.",
      icon: "✍️",
    },
    {
      title: "텍스트",
      desc: "간단한 메모나 키워드만 입력해도 AI가 일기로 완성해 드려요.",
      icon: "⌨️",
    },
  ],
};

export const WHY_HODURANG = {
  badge: "비교",
  headline: "왜 호두랑이 다를까요?",
  comparison: {
    others: {
      title: "기존 앱",
      points: [
        "기록만 하고 끝",
        "다시 꺼내보기 어려움",
        "기억력 관리 기능 없음",
        "시니어 사용이 불편",
      ],
    },
    hodurang: {
      title: "호두랑",
      points: [
        "기록 → 정리 → 퀴즈 자동 연결",
        "AI가 추억을 다시 꺼내줌",
        "과학 기반 기억력 관리",
        "사진·음성으로 쉬운 기록",
      ],
    },
  },
};

export const TWO_TRACK = {
  badge: "두 가지 트랙",
  headline: "나를 위해서도, 부모님을 위해서도",
  tabs: [
    {
      id: "self",
      label: "나를 위해",
      title: "내 기억을 관리하고 싶다면",
      points: [
        "바쁜 일상 속 소중한 순간을 간편하게 기록",
        "AI가 정리해주는 나만의 추억 아카이브",
        "퀴즈로 즐기면서 기억력도 관리",
      ],
      mockup: "/images/mockups/app-mockup-1.png",
    },
    {
      id: "parent",
      label: "부모님을 위해",
      title: "부모님의 기억을 지켜드리고 싶다면",
      points: [
        "부모님도 쉽게 쓸 수 있는 사진·음성 기록",
        "가족 추억이 퀴즈가 되어 함께 풀 수 있음",
        "기억력 변화를 부드럽게 트래킹",
      ],
      mockup: "/images/mockups/app-mockup-2.png",
    },
  ],
};

export const STORY_OF_NOTE = {
  badge: "호두랑 노트",
  headline: "디지털이 어렵다면,\n노트로 시작하세요",
  subheadline:
    "호두랑 기억력 노트는 크라우드펀딩에서 목표 대비 800%를 달성했어요.\n손으로 쓰는 것만으로도 기억력 관리가 시작됩니다.",
  stat: "800%",
  statLabel: "크라우드펀딩 달성률",
  productImage: "/images/products/note-product.jpg",
};

export const O4O_EXPERIENCE = {
  badge: "O4O 경험",
  headline: "온라인과 오프라인이\n하나로 연결됩니다",
  subheadline:
    "노트에 기록 → 앱으로 촬영 → AI가 디지털로 변환 → 퀴즈 생성.\n어디서든, 어떤 방식으로든 기억을 지킬 수 있어요.",
  flow: [
    { step: "노트에 기록", icon: "📝" },
    { step: "앱으로 촬영", icon: "📱" },
    { step: "AI 변환", icon: "🤖" },
    { step: "퀴즈 생성", icon: "🎯" },
  ],
};

export const FINAL_CTA = {
  headline: "지금 시작하세요",
  subheadline:
    "소중한 기억이 사라지기 전에,\n호두랑과 함께 지켜보세요.",
  cta: CTA_TEXT,
};

export const FOOTER = {
  company: "호두랑",
  description: "기억을 저장하고 퀴즈로 되살리는 두뇌 건강 플랫폼",
  disclaimer:
    "호두랑은 의료 기기가 아니며, 질병의 진단·치료·예방을 목적으로 하지 않습니다. 기억력에 대한 우려가 있으시면 전문 의료기관과 상담하시기 바랍니다.",
  businessInfo: {
    corpName: "골든월넛 주식회사",
    ceo: "이은영",
    bizNumber: "794-88-03231",
    salesNumber: "제2026-서울관악-0044호",
    address: "서울시 관악구 호암로24길 6, 204호",
    email: "contact@agoldenwalnut.com",
    privacyOfficer: "이은영",
    csHours: "평일 10:00-16:00",
  },
  links: [
    { label: "이용약관", href: "https://vivid-sternum-af9.notion.site/bc32c1e55ef1461e962e31c642516951?source=copy_link" },
    { label: "개인정보처리방침", href: "https://vivid-sternum-af9.notion.site/e814d5c8f1804979820d6607b0016e05?source=copy_link" },
    { label: "문의하기", href: "http://pf.kakao.com/_xfPxjxoG/chat" },
  ],
  copyright: `© ${new Date().getFullYear()} 골든월넛 주식회사. All rights reserved.`,
};
