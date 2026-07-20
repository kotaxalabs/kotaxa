import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "University",
  description: "Learn software engineering through real projects.",
  path: "/university",
});
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ContentCard from "@/components/ui/ContentCard";

import { courses } from "@/content/university";

export default function UniversityPage() {
  return (
    <main>
      <Section>
        <SectionHeading
          eyebrow="Kotaxa University"
          title="Learn by Building"
          description="Project-based learning paths designed for developers, makers and AI enthusiasts."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <ContentCard
              key={course.slug}
              title={course.title}
              description={course.description}
              category={`${course.level} • ${course.duration}`}
              image={course.image}
              href={course.href}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
