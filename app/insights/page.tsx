import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ContentCard from "@/components/ui/ContentCard";

import { aiVsTraditionalDevelopment } from "@/content/insights/ai-vs-traditional-development";
import { futureOfRobotics } from "@/content/insights/future-of-robotics";
import { softwareEngineeringRoadmap } from "@/content/insights/software-engineering-roadmap";

const articles = [
  aiVsTraditionalDevelopment,
  futureOfRobotics,
  softwareEngineeringRoadmap,
];

export const metadata = {
  title: "Insights | Kotaxa",
  description: "Articles, development logs and technology insights.",
};

export default function InsightsPage() {
  return (
    <main>
      <Section>
        <SectionHeading
          eyebrow="Insights"
          title="Knowledge Worth Sharing"
          description="Explore articles about software engineering, artificial intelligence, robotics and modern technologies."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <ContentCard
              key={article.slug}
              title={article.title}
              description={article.description}
              category={article.category}
              image={article.image}
              href={article.href}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
