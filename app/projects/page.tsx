import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects",
  description: "Explore every project developed by Kotaxa.",
  path: "/projects",
});
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ContentCard from "@/components/ui/ContentCard";

import { projectAtlas } from "@/content/projects/project-atlas";

const projects = [projectAtlas];




export default function ProjectsPage() {
  return (
    <main>
      <Section>
        <SectionHeading
          eyebrow="Projects"
          title="Building in Public"
          description="Every project is documented from the first idea to production."
        />

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
