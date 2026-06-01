import Link from "next/link";
import { LAB_NAME } from "@/lib/labData";

export default function LabHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="group">
          <span className="text-xs tracking-[0.25em] text-neutral-500">HAILUO AI</span>
          <p className="text-sm font-semibold tracking-tight text-neutral-900 group-hover:text-neutral-600">
            {LAB_NAME}
          </p>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-neutral-600">
          <Link href="/" className="hover:text-neutral-900">
            Home
          </Link>
          <Link href="/lab" className="hover:text-neutral-900">
            Archive
          </Link>
          <Link href="/lab/week-1" className="hover:text-neutral-900">
            Week 1
          </Link>
        </nav>
      </div>
    </header>
  );
}
