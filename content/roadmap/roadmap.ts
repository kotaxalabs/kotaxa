import Container from "@/components/layout/Container";
import PageHero from "@/components/common/PageHero";
import Section from "@/components/layout/Section";

import { roadmap } from "@/content/roadmap";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Roadmap",
  description: "Kotaxa roadmap and future plans.",
  path: "/roadmap",
});

export default function RoadmapPage() {
  return (
    <main>
      <PageHero
        eyebrow="Roadmap"
        title="Building the Future"
        description="A transparent roadmap showing the direction of Kotaxa."
      />

      <Section>
        <Container>
          <div className="space-y-8">
            {roadmap.map((item) => (
              <article
                key={`${item.quarter}-${item.title}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-medium text-violet-400">
                      {item.quarter}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold">
                      {item.title}
                    </h2>
                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300">
                    {item.status}
                  </span>
                </div>

                <p className="mt-6 leading-8 text-zinc-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}