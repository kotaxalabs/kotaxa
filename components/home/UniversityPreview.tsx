import ContentCard from "@/components/ui/ContentCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { pythonFundamentals } from "@/content/university/python-fundamentals";
import { webDevelopment } from "@/content/university/web-development";
import { artificialIntelligence } from "@/content/university/artificial-intelligence";

const courses = [
  pythonFundamentals,
  webDevelopment,
  artificialIntelligence,
];

export default function UniversityPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Kotaxa University"
        title="Learn by Building"
        description="Structured learning paths designed around real projects instead of isolated tutorials."
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
  );
}
