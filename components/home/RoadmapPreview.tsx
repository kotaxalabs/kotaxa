import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import { roadmap } from "@/content/roadmap/roadmap";

export default function RoadmapPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Roadmap"
        title="Building in Public"
        description="Every milestone is shared openly so the community can follow the journey."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {roadmap.map((item) => (
          <Card key={item.title}>
            <Badge>{item.quarter}</Badge>

            <h3 className="mt-5 text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-2 text-sm font-medium text-violet-400">
              {item.status}
            </p>

            <p className="mt-5 leading-7 text-zinc-400">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
