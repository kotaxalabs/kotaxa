import Image from "next/image";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { aiVsTraditionalDevelopment } from "@/content/insights/ai-vs-traditional-development";
import { futureOfRobotics } from "@/content/insights/future-of-robotics";
import { softwareEngineeringRoadmap } from "@/content/insights/software-engineering-roadmap";

const articles = [
  aiVsTraditionalDevelopment,
  futureOfRobotics,
  softwareEngineeringRoadmap,
];

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  
  if (!articles) {
    notFound();
  }

  return (
    <main>
      <Container>
        <article className="py-24">
          <Badge>{article.category}</Badge>

          <h1 className="mt-6 text-5xl font-black tracking-tight">
            {article.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            {article.description}
          </p>

          <div className="relative mt-16 aspect-video overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          <section className="mt-20">
            <h2 className="text-3xl font-bold">
              Introduction
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              This article is part of the Kotaxa knowledge base. Every topic is
              based on practical experience, project development and continuous
              experimentation.
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              In future commits this page will be powered by MDX, allowing rich
              technical documentation with code blocks, diagrams and embedded
              media.
            </p>
          </section>

          <div className="mt-20">
            <Button href="/insights">
              ← Back to Insights
            </Button>
          </div>
        </article>
      </Container>
    </main>
  );
}
