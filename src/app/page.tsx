import Link from "next/link";
import LabHeader from "@/components/lab/LabHeader";
import LabFooter from "@/components/lab/LabFooter";
import { LAB_NAME, LAB_SUBTITLE, CATEGORIES, WEEK_PLAN } from "@/lib/labData";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <LabHeader />
      <main>
        <section className="border-b border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
            <p className="text-xs tracking-[0.3em] text-neutral-500">HAILUO AI · CREATIVE COMMERCE</p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">{LAB_NAME}</h1>
            <p className="mt-6 max-w-2xl text-lg text-neutral-400">{LAB_SUBTITLE}</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500">
              AI 기반 콘텐츠·브랜드·IP를 실험하는 5주 제작 LAB 아카이브입니다. 뮤직비디오,드, 펫, 향수/코스메틱
              바이럴 콘텐츠를 제작하고 상영·공유합니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/lab/week-1"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-neutral-200"
              >
                1주차 아카이브 보기
              </Link>
              <Link
                href="/lab"
                className="rounded-full border border-neutral-600 px-6 py-3 text-sm text-white hover:border-white"
              >
                전체 아카이브
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-800 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-xs tracking-[0.2em] text-neutral-500">4 CATEGORIES</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CATEGORIES.map((c) => (
                <div key={c.id} className="rounded-lg border border-neutral-800 p-5">
                  <p className="text-xs text-neutral-500">{c.subtitle}</p>
                  <h3 className="mt-2 font-medium">{c.title}</h3>
                  <p className="mt-2 text-sm text-neutral-500 line-clamp-3">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-xs tracking-[0.2em] text-neutral-500">5 WEEKS</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {WEEK_PLAN.map((w) => (
                <Link
                  key={w.slug}
                  href={`/lab/${w.slug}`}
                  className="rounded-lg border border-neutral-800 p-4 hover:border-white"
                >
                  <p className="text-xs text-neutral-500">WEEK {w.week}</p>
                  <p className="mt-2 text-sm font-medium">{w.title}</p>
                  <p className="mt-2 text-xs text-neutral-600">{w.status === "published" ? "Open" : "Soon"}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <LabFooter />
    </div>
  );
}
