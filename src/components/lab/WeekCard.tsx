import Link from "next/link";
import type { LabWeekMeta } from "@/lib/labData";

export default function WeekCard({ week }: { week: LabWeekMeta }) {
  const href = `/lab/${week.slug}`;
  const locked = week.status === "upcoming";

  return (
    <Link
      href={href}
      className={`group block rounded-lg border p-6 transition-colors ${
        locked
          ? "border-neutral-800 bg-neutral-950 text-neutral-500"
          : "border-neutral-700 bg-neutral-900 hover:border-white hover:bg-neutral-800"
      }`}
    >
      <p className="text-xs tracking-[0.2em] text-neutral-500">WEEK {week.weekNumber}</p>
      <h3 className="mt-2 text-lg font-semibold text-white">{week.title}</h3>
      <p className="mt-1 text-sm text-neutral-400">{week.subtitle}</p>
      <p className="mt-4 text-sm leading-relaxed text-neutral-500">{week.summary}</p>
      <p className="mt-4 text-xs uppercase tracking-wider text-neutral-600">
        {locked ? "Coming soon" : "View archive →"}
      </p>
    </Link>
  );
}
