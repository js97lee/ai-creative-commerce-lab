import { notFound } from "next/navigation";
import LabHeader from "@/components/lab/LabHeader";
import LabFooter from "@/components/lab/LabFooter";
import MediaGallery from "@/components/lab/MediaGallery";
import Week1Content from "@/components/lab/Week1Content";
import { CATEGORIES, getWeekMeta } from "@/lib/labData";

type Props = { params: { week: string } };

export function generateStaticParams() {
  return [
    { week: "week-1" },
    { week: "week-2" },
    { week: "week-3" },
    { week: "week-4" },
    { week: "week-5" },
  ];
}

export default function WeekPage({ params }: Props) {
  const meta = getWeekMeta(params.week);
  if (!meta) notFound();

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <LabHeader />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs tracking-[0.2em] text-neutral-500">WEEK {meta.weekNumber}</p>
        <h1 className="mt-3 text-3xl font-semibold text-neutral-900">{meta.title}</h1>
        <p className="mt-2 text-neutral-600">{meta.subtitle}</p>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-neutral-500">{meta.summary}</p>

        {meta.weekNumber === 1 && (
          <>
            <section className="mt-16">
              <h2 className="text-xs tracking-[0.2em] text-neutral-500">제작 카테고리</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {CATEGORIES.map((c) => (
                  <div key={c.id} className="rounded-lg border border-neutral-200 bg-white p-5">
                    <p className="text-xs text-neutral-500">{c.subtitle}</p>
                    <h3 className="mt-2 font-medium text-neutral-900">{c.title}</h3>
                    <p className="mt-2 text-sm text-neutral-500">{c.description}</p>
                    <ul className="mt-4 space-y-1 text-xs text-neutral-600">
                      {c.outputs.map((o) => (
                        <li key={o}>· {o}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            <section className="mt-16">
              <Week1Content />
            </section>
          </>
        )}

        {meta.weekNumber !== 1 && meta.status === "upcoming" && (
          <p className="mt-16 rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center text-neutral-500">
            이 주차의 아카이브는 준비 중입니다.
          </p>
        )}

        <section className="mt-16">
          <h2 className="text-xs tracking-[0.2em] text-neutral-500">MEDIA ARCHIVE</h2>
          <div className="mt-6">
            <MediaGallery slots={meta.mediaSlots} />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-xs tracking-[0.2em] text-neutral-500">주차 산출물</h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            {meta.outputs.map((o) => (
              <li key={o}>— {o}</li>
            ))}
          </ul>
        </section>
      </main>
      <LabFooter />
    </div>
  );
}
