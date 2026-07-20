import ContentCard from "@/components/ui/ContentCard";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";

import { createMetadata } from "@/lib/seo";
import { insights } from "@/content/insights";

export const metadata = createMetadata({
  title: "Insights",
  description:
    "Articles, tutorials and engineering notes from the Kotaxa ecosystem.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Knowledge Worth Sharing"
        description="Thoughts, tutorials and development logs about AI, software engineering, cybersecurity and robotics."
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {insights.map((article) => (
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
