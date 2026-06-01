type Block = { title: string; body?: string; items?: string[] };

const blocks: Block[] = [
  {
    title: "LAB 개요",
    body: "Hailuo AI Creative Commerce LAB은 AI 기반 콘텐츠·브랜드·IP를 중심으로 새로운 크리에이티브 커머스 경험을 실험하는 제작형 LAB입니다. Hailuo AI를 활용하여 영상, 음악, 가상 캐릭터, 브랜드 스토리텔링, 바이럴 콘텐츠를 제작하고, SNS 및 커머스 환경에서 활용 가능한 결과물을 만드는 것을 목표로 합니다.",
  },
  {
    title: "운영 목적",
    items: [
      "Hailuo AI Max 플랜을 활용한 실전형 AI 콘텐츠 제작 경험 제공",
      "AI 기반 영상·브랜드·IP·커머스 콘텐츠 제작 역량 강화",
      "가상 캐릭터와 브랜드 스토리텔링을 결합한 콘텐츠 실험",
      "뮤직비디오, 식품, 펫, 향수/화장품 분야의 바이럴 콘텐츠 제작",
      "참여자별 제작 과정을 디스코드에 공유하며 지속적인 피드백 진행",
      "크레딧 사용량을 관리하며 실질적인 AI 활용도를 높이는 운영 체계 구축",
      "최종 결과물을 상영 및 공유하여 포트폴리오와 확장 가능성 확보",
    ],
  },
  {
    title: "크레딧 지원",
    items: [
      "Hailuo AI Max 플랜 1개월 무료 제공",
      "1인 1계정 기준으로 운영",
      "LAB 기간 내 제공 크레딧 적극 활용",
    ],
  },
  {
    title: "크레딧 사용 기준",
    items: [
      "사용량 50% 이하 시 다음 지원 대상에서 제외될 수 있음",
      "매주 제작 과정에서 Hailuo AI 실질 활용",
      "우수 활용자에게 Pro 크레딧 추가 지급 가능",
    ],
  },
  {
    title: "LAB 운영 원칙",
    items: [
      "매주 디스코드에 진행 상황 공유",
      "크레딧 사용량 상시 모니터링",
      "무단 잠수 및 이탈 시 즉시 보고",
      "우수 활용자 추가 지원 가능",
      "결과물 중심 운영 (공개·상영·업로드 가능한 콘텐츠)",
      "상호 존중 및 피드백 중심 운영",
    ],
  },
  {
    title: "1주차 주요 내용",
    items: [
      "LAB 운영 방식 안내",
      "Hailuo AI Max 플랜 및 크레딧 사용 기준 안내",
      "디스코드 공유 방식 안내",
      "제작 카테고리 선택",
      "가상 캐릭터 콘셉트 설정",
      "제작할 콘텐츠 방향 정리",
      "최종 산출물 기준 안내",
    ],
  },
  {
    title: "1주차 산출물",
    items: [
      "참여자별 콘텐츠 카테고리 선택",
      "캐릭터 또는 브랜드 콘셉트 초안",
      "제작하고 싶은 콘텐츠 방향 1안",
      "디스코드 자기소개 및 제작 목표 공유",
    ],
  },
];

export default function Week1Content() {
  return (
    <div className="space-y-10">
      {blocks.map((b) => (
        <section key={b.title} className="rounded-lg border border-neutral-800 bg-neutral-950 p-6">
          <h2 className="text-lg font-semibold text-white">{b.title}</h2>
          {b.body && <p className="mt-3 text-sm leading-relaxed text-neutral-400">{b.body}</p>}
          {b.items && (
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              {b.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-neutral-600">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
