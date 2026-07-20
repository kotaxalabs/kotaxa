import Hero from "@/components/home/Hero";
import FeaturedProject from "@/components/home/FeaturedProject";
import LatestInsights from "@/components/home/LatestInsights";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <FeaturedProject />

      <LatestInsights />
    </main>
  );
}
