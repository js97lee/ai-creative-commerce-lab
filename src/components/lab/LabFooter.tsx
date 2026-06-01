import { LAB_SUBTITLE } from "@/lib/labData";

export default function LabFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-neutral-500">
        <p>{LAB_SUBTITLE}</p>
        <p className="mt-2 text-xs text-neutral-400">5-Week Archive · AI Creative Commerce LAB</p>
      </div>
    </footer>
  );
}
