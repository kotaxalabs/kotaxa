import Image from "next/image";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { projectAtlas } from "@/content/projects/project-atlas";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: Props) {
  if (params.slug !== projectAtlas.slug) {
    notFound();
  }

  return (
    <main>
      <Container>
        <article className="py-24">
          <Badge>{projectAtlas.category}</Badge>

          <h1 className="mt-6 text-5xl font-black">
            {projectAtlas.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            {projectAtlas.description}
          </p>

          <div className="relative mt-16 aspect-video overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={projectAtlas.image}
              alt={projectAtlas.title}
              fill
              className="object-cover"
            />
          </div>

          <section className="mt-20">
            <h2 className="text-3xl font-bold">
              Overview
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Project Atlas is the flagship application of the Kotaxa
              ecosystem. The entire development process is shared publicly,
              including planning, architecture, design, implementation,
              testing and deployment.
            </p>
          </section>

          <section className="mt-20">
            <h2 className="text-3xl font-bold">
              Technologies
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {projectAtlas.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </section>

          <div className="mt-20">
            <Button href="/projects">
              ← Back to Projects
            </Button>
          </div>
        </article>
      </Container>
    </main>
  );
}
