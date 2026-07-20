import Hero from "@/components/home/Hero";
import FeaturedProject from "@/components/home/FeaturedProject";
import LatestInsights from "@/components/home/LatestInsights";
import UniversityPreview from "@/components/home/UniversityPreview";
import RoadmapPreview from "@/components/home/RoadmapPreview";
import SupportSection from "@/components/home/SupportSection";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Kotaxa",
  description:
    "Building software, exploring AI, documenting projects and sharing knowledge with the world.",
  path: "/",
});

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <FeaturedProject />

      <LatestInsights />

      <UniversityPreview />

      <RoadmapPreview />

      <SupportSection />
    </main>
  );
}
