import Image from "next/image";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ProjectTechStack from "./ProjectTechStack";

import { projectAtlas } from "@/content/projects/project-atlas";

export default function FeaturedProject() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Featured Project"
        title={projectAtlas.title}
        description="The main project currently being developed inside the Kotaxa ecosystem."
      />

      <Card>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={projectAtlas.image}
              alt={projectAtlas.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <Badge>{projectAtlas.category}</Badge>

            <h3 className="mt-6 text-3xl font-bold">
              {projectAtlas.title}
            </h3>

            <p className="mt-6 leading-8 text-zinc-400">
              {projectAtlas.description}
            </p>

            <ProjectTechStack
              technologies={projectAtlas.technologies}
            />

            <div className="mt-10">
              <Button href={projectAtlas.href}>
                View Project →
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}
