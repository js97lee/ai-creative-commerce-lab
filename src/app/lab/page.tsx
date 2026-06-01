import LabHeader from "@/components/lab/LabHeader";
import LabFooter from "@/components/lab/LabFooter";
import WeekCard from "@/components/lab/WeekCard";
import { LAB_NAME, WEEKS } from "@/lib/labData";

export default function LabArchivePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <LabHeader />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs tracking-[0.2em] text-neutral-500">ARCHIVE</p>
        <h1 className="mt-3 text-3xl font-semibold">{LAB_NAME}</h1>
        <p className="mt-4 max-w-2xl text-sm text-neutral-500">
          5주차 운영 계획과 제작 결과물을 주차별로 아카이빙합니다.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {WEEKS.map((week) => (
            <WeekCard key={week.slug} week={week} />
          ))}
        </div>
      </main>
      <LabFooter />
    </div>
  );
}
