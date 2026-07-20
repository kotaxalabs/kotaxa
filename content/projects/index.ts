import { projectAtlas } from "./project-atlas";

export const projects = [projectAtlas];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
