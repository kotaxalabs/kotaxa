import ContentCard from "@/components/ui/ContentCard";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";

import { createMetadata } from "@/lib/seo";
import { projects } from "@/content/projects";

export const metadata = createMetadata({
  title: "Projects",
  description: "Explore every project built by Kotaxa.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Projects"
        title="Building in Public"
        description="Every project is developed openly, documented step by step and shared with the community."
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ContentCard
              key={project.slug}
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              href={project.href}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
