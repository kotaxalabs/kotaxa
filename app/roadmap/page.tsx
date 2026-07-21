import PageHero from "@/components/common/PageHero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { createMetadata } from "@/lib/metadata";

import { roadmap } from "@/content/roadmap";

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
        description="A transparent roadmap showing where Kotaxa is heading."
      />

      <Section>
        <Container>
          <div className="space-y-8">
            {roadmap.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h2 className="text-2xl font-bold">{item.title}</h2>

                  <span className="text-sm text-zinc-400">
                    {item.status}
                  </span>
                </div>

                <p className="mt-4 text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}