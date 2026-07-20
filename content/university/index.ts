import { pythonFundamentals } from "./python-fundamentals";
import { webDevelopment } from "./web-development";
import { artificialIntelligence } from "./artificial-intelligence";

export const courses = [
  pythonFundamentals,
  webDevelopment,
  artificialIntelligence,
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}
