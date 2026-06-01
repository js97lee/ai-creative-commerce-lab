import type { MediaSlot } from "@/lib/labData";

type Props = { slots: MediaSlot[] };

const ratioClass: Record<string, string> = {
  "9/16": "aspect-[9/16]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
};

export default function MediaGallery({ slots }: Props) {
  const videos = slots.filter((s) => s.type === "video");
  const images = slots.filter((s) => s.type === "image");

  return (
    <div className="space-y-10">
      {videos.length > 0 && (
        <section>
          <h3 className="mb-4 text-xs tracking-[0.2em] text-neutral-500">SHORTFORM / VIDEO</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((slot) => (
              <MediaCard key={slot.id} slot={slot} />
            ))}
          </div>
        </section>
      )}
      {images.length > 0 && (
        <section>
          <h3 className="mb-4 text-xs tracking-[0.2em] text-neutral-500">IMAGES / MOOD</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((slot) => (
              <MediaCard key={slot.id} slot={slot} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function MediaCard({ slot }: { slot: MediaSlot }) {
  const ratio = ratioClass[slot.aspectRatio ?? "9/16"] ?? "aspect-[9/16]";

  return (
    <article className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950">
      <div className={`relative ${ratio} w-full overflow-hidden bg-neutral-900`}>
        {slot.src ? (
          slot.type === "video" ? (
            <video src={slot.src} className="h-full w-full object-cover" controls muted playsInline />
          ) : (
            <img src={slot.src} alt={slot.title} className="h-full w-full object-cover" />
          )
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center text-neutral-500">
            <span className="text-xs uppercase tracking-widest">{slot.type}</span>
            <span className="text-sm text-neutral-400">Coming soon</span>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-white">{slot.title}</p>
        {slot.caption && <p className="mt-1 text-xs text-neutral-500">{slot.caption}</p>}
      </div>
    </article>
  );
}
