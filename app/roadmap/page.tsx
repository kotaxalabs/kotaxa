import Container from "@/components/layout/Container";
import { createMetadata } from "@/lib/seo";
import { roadmap } from "@/content/roadmap/roadmap";

export const metadata = createMetadata({
  title: "Roadmap",
  description: "Kotaxa roadmap and future plans.",
  path: "/roadmap",
});

export default function RoadmapPage() {
  return (
    <main className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Roadmap
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight">
            Building the Future
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Follow Kotaxa's public roadmap and see what has been completed,
            what is currently in progress and what is planned next.
          </p>

          <div className="mt-16 space-y-8">
            {roadmap.map((item) => (
              <article
                key={`${item.quarter}-${item.title}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-violet-400">
                      {item.quarter}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold">
                      {item.title}
                    </h2>
                  </div>

                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">
                    {item.status}
                  </span>
                </div>

                <p className="mt-6 leading-8 text-zinc-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}