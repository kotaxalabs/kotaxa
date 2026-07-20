import Image from "next/image";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { getProject } from "@/content/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Container>
        <article className="py-24">
          <Badge>{project.category}</Badge>

          <h1 className="mt-6 text-5xl font-black tracking-tight">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            {project.description}
          </p>

          <div className="relative mt-16 aspect-video overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <section className="mt-20">
            <h2 className="text-3xl font-bold">Overview</h2>

            <p className="mt-6 leading-8 text-zinc-400">
              This project is part of the Kotaxa ecosystem. Every stage of
              development is documented publicly, from the first idea to the
              final deployment.
            </p>
          </section>

          <section className="mt-20">
            <h2 className="text-3xl font-bold">Technologies</h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
          </section>

          <div className="mt-20">
            <Button href="/projects" variant="secondary">
              ← Back to Projects
            </Button>
          </div>
        </article>
      </Container>
    </main>
  );
}
