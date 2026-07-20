import Tag from "@/components/ui/Tag";

interface Props {
  technologies: string[];
}

export default function ProjectTechStack({
  technologies,
}: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {technologies.map((technology) => (
        <Tag key={technology}>{technology}</Tag>
      ))}
    </div>
  );
}
