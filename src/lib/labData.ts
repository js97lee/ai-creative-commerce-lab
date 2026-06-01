export type MediaSlot = {
  id: string;
  type: "video" | "image";
  title: string;
  caption?: string;
  src?: string;
  aspectRatio?: "9/16" | "16/9" | "1/1";
};

export type LabCategory = {
  id: "music-video" | "food" | "pet" | "perfume";
  title: string;
  subtitle: string;
  description: string;
  outputs: string[];
};

export type LabWeekMeta = {
  slug: string;
  weekNumber: 1 | 2 | 3 | 4 | 5;
  title: string;
  subtitle: string;
  status: "published" | "upcoming";
  summary: string;
  highlights: string[];
  outputs: string[];
  mediaSlots: MediaSlot[];
};

export const LAB_NAME = "AI Creative Commerce LAB";
export const LAB_SUBTITLE = "Hailuo AI Creative Commerce LAB";

export const CATEGORIES: LabCategory[] = [
  {
    id: "music-video",
    title: "AI Music Video",
    subtitle: "뮤직비디오",
    description:
      "가상 캐릭터, 읭악 분위기, 세계관을 기반으로 AI 뮤직비디오를 제작합니다. 캐릭터의 감정, 무너, 퍼포먼스, 비주얼 연출을 중심으로 실험합니다.",
    outputs: [
      "AI Music Video",
      "Virtual Character Concept",
      "Music Moodboard",
      "Scene Direction",
      "Short-form Teaser",
    ],
  },
  {
    id: "food",
    title: "종로약과 Food Viral",
    subtitle: "푸드 바이럴",
    description:
      "전통 디저트 종로약과를 중심으로 식품 븞랜드 바이럴 콘텐츠을 제작합니다. 맛, 질감, 전통성, 선물성을 숏폼 문법로 풀어냅니다.",
    outputs: [
      "Food Viral Video",
      "Product Mood Clip",
      "Brand Storytelling Content",
      "Instagram Reels / Shorts",
      "Korean Product Explanation Content",
    ],
  },
  {
    id: "pet",
    title: "Pet Market Viral",
    subtitle: "펫 바이럴",
    description:
      "펫 시장을 타깃으로 반려동물 관련 바이럴 콘텐츠을 제작합니다. 귀여움, 공감, 일상성, 제품 사용 장scene을 중심으로 설계합니다.",
    outputs: [
      "Pet Viral Video",
      "Pet Lifestyle Short-form",
      "Product Use Scene",
      "Character-based Pet Content",
      "SNS Upload Content",
    ],
  },
  {
    id: "perfume",
    title: "Sachet & Perfume / Cosmetic",
    subtitle: "향수·코스메틱",
    description:
      "샤쉬, 향수, 코스me틱 제품을 중심으로 감각적인 바이럴 콘텐츠을 제작합니다. 향, 무드, 공간, 라이프스타일을 AI 영상으로 표현합니다.",
    outputs: [
      "Perfume / Cosmetic Viral Video",
      "Sachet Mood Film",
      "Lifestyle Commercial Scene",
      "Product Storytending Content",
      "Brand Moodboard",
    ],
  },
];

export const WEEKS: LabWeekMeta[] = [
  {
    slug: "week-1",
    weekNumber: 1,
    title: "Orientation & Direction Setting",
    subtitle: "오리엔te이션 및 제작 방향 설정",
    status: "published",
    summary:
      "LAB 전체 운영 방식과 제작 방음을 안내하고, 참여자가 콘텐츠 카테고리와 콘릭ter·브랜드 콘셉t를 설정하는 주차입니다.",
    highlights: [
      "LAB 운영 방식 및 크레딧 기준 안내",
      "디스코드 공유 방식",
      "4개 제작 카테고리 선택",
      "가상 콘릭ter 콘셈t 설정",
      "제작 방제 및 최종 삭출물 기준 정리",
    ],
    outputs: [
      "콘텐츠 카테고리 선택",
      "콘릭ter 또는 븞랈 콘셉t 초안",
      "제작하고 싶은 콘텐츠 방향 1an",
      "디스코드 자기소개 및 제작 목표 공유",
    ],
    mediaSlots: [
      { id: "w1-v1", type: "video", title: "오리엔te이션 하이라이트", aspectRatio: "9/16" },
      { id: "w1-v2", type: "video", title: "카테gory 소개", aspectRatio: "9/16" },
      { id: "w1-v3", type: "video", title: "참여자 콘셉t 공유", aspectRatio: "9/16" },
      { id: "w1-i1", type: "image", title: "무드보드 / 콘셉t", aspectRatio: "1/1" },
      { id: "w1-i2", type: "image", title: "콘릭ter 스케치", aspectRatio: "1/1"  },
    ],
  },
  {
    slug: "week-2",
    weekNumber: 2,
    title: "Music Video Concept Planning",
    subtitle: "뮤직비디오 콘셉t 기힘",
    status: "upcoming",
    summary: "가상 콘릭ter의 세계관과 읭앭 분위기를 바탕으로 콘셉t와 무드보드를 기힘합니다.",
    highlights: ["세계관 설정", "무드보드 제작", "Scene List", "1차 프롬프트 세트"],
    outputs: ["콘셉트 기힘안", "Moodboard", "Scene List", "1차 프롬프트 세트"],
    mediaSlots: [{ id: "w2-v1", type: "video", title: "2주차 영상 아카이브", aspectRatio: "9/16" }],
  },
  {
    slug: "week-3",
    weekNumber: 3,
    title: "Commercial Scene Design",
    subtitle: "커머셜 장scene 설계",
    status: "upcoming",
    summary: "뮤직비디오적 흐름 안에서 제품·브랜드이 자연스럽게 등장하는 커머셜 장scene을 설계합니다.",
    highlights: ["제품 USP 정리", "커머셜 장scene 구성", "1차 AI 영상 결과물"],
    outputs: ["커머셜 장면 구성an", "1차 AI 영상 결과물", "크레딧 사용 현황"],
    mediaSlots: [{ id: "w3-v1", type: "video", title: "3주차 영상 아카이브", aspectRatio: "9/16" }],
  },
  {
    slug: "week-4",
    weekNumber: 4,
    title: "Korean Explanation & Viral Production",
    subtitle: "한국어 설명 콘텐츠 제작",
    status: "upcoming",
    summary: "뮤직비디오 장scene과 내레이션을 활용해 SNS 업로음용 한국어 설명 콘텐츠을 제작합니다.",
    highlights: ["한국어 내레이션", "숏폼 후킹 문구", "SNS 포맷 정리"],
    outputs: ["한국어 설명형 콘텐츠", "최종 영상 초안", "SNS 업로음용 카피"],
    mediaSlots: [{ id: "w4-v1", type: "video", title: "4주차 영상 아카이브", aspectRatio: "9/16" }],
  },
  {
    slug: "week-5",
    weekNumber: 5,
    title: "Online Screening & Final Sharing",
    subtitle: "온라인 상영회 및 최종 공유",
    status: "upcoming",
    summary: "최종 결과물을 온라인 상영하고 제작 과정과 인사이트를 공유합니다.",
    highlights: ["최종 상영", "Hailuo AI 활용 인사이트", "우수 활용자 검토"],
    outputs: ["최종 영상 콘텐츠", "제작 과정 정리", "향후 확장 아이이이이디어"],
    mediaSlots: [{ id: "w5-v5", type: "video", title: "5주차 최종 상영", aspectRatio: "16/9" }],
  },
];

export function getWeekMeta(slug: string): LabWeekMeta | undefined {
  return WEEKS.find((w) => w.slug === slug);
}

export const WEEK_PLAN = WEEKS.map((w) => ({
  week: w.weekNumber,
  title: w.title,
  slug: w.slug,
  status: w.status,
}));
