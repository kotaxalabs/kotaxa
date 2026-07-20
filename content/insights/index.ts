import { aiVsTraditionalDevelopment } from "./ai-vs-traditional-development";
import { futureOfRobotics } from "./future-of-robotics";
import { softwareEngineeringRoadmap } from "./software-engineering-roadmap";

export const insights = [
  aiVsTraditionalDevelopment,
  futureOfRobotics,
  softwareEngineeringRoadmap,
];

export function getInsight(slug: string) {
  return insights.find((article) => article.slug === slug);
}
