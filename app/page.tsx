import Hero from "@/components/home/Hero";
import FeaturedProject from "@/components/home/FeaturedProject";
import LatestInsights from "@/components/home/LatestInsights";
import UniversityPreview from "@/components/home/UniversityPreview";
import RoadmapPreview from "@/components/home/RoadmapPreview";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProject />
      <LatestInsights />
      <UniversityPreview />
      <RoadmapPreview />
    </main>
  );
}
