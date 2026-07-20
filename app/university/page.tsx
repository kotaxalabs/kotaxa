import ContentCard from "@/components/ui/ContentCard";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";

import { createMetadata } from "@/lib/seo";
import { courses } from "@/content/university";

export const metadata = createMetadata({
  title: "University",
  description: "Learn by building real-world software projects.",
  path: "/university",
});

export default function UniversityPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kotaxa University"
        title="Learn by Building"
        description="Project-based learning paths for software engineering, AI, cybersecurity and robotics."
      />

      <Section>
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
