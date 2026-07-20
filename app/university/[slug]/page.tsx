import Image from "next/image";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { getCourse } from "@/content/university";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;

  const course = getCourse(slug);

  if (!course) {
    notFound();
  }

  return (
    <main>
      <Container>
        <article className="py-24">
          <Badge>{course.level}</Badge>

          <h1 className="mt-6 text-5xl font-black tracking-tight">
            {course.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            {course.description}
          </p>

          <div className="relative mt-16 aspect-video overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={course.image}
              alt={course.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <section className="mt-20">
            <h2 className="text-3xl font-bold">Course Overview</h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Kotaxa University courses are built around complete projects
              rather than isolated lessons. Every course emphasizes practical
              development and production-ready workflows.
            </p>
          </section>

          <section className="mt-20">
            <h2 className="text-3xl font-bold">What You'll Learn</h2>

            <ul className="mt-8 space-y-3 text-zinc-400">
              <li>• Modern development workflow</li>
              <li>• Project architecture</li>
              <li>• Clean code principles</li>
              <li>• Best practices</li>
              <li>• Production deployment</li>
            </ul>
          </section>

          <div className="mt-20">
            <Button href="/university" variant="secondary">
              ← Back to University
            </Button>
          </div>
        </article>
      </Container>
    </main>
  );
}
