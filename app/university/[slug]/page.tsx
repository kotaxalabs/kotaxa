import Image from "next/image";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { getCourse } from "@/content/university";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  // ...
}

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
              className="object-cover"
            />
          </div>

          <section className="mt-20">
            <h2 className="text-3xl font-bold">
              Course Overview
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Every course inside Kotaxa University is built around real
              projects instead of isolated lessons. You'll learn by designing,
              building, testing and deploying complete applications.
            </p>
          </section>

          <section className="mt-20">
            <h2 className="text-3xl font-bold">
              What You'll Learn
            </h2>

            <ul className="mt-8 space-y-4 text-zinc-300">
              <li>• Modern development workflow</li>
              <li>• Project architecture</li>
              <li>• Best practices</li>
              <li>• Production-ready development</li>
              <li>• Real-world implementation</li>
            </ul>
          </section>

          <div className="mt-20">
            <Button href="/university">
              ← Back to University
            </Button>
          </div>
        </article>
      </Container>
    </main>
  );
}
