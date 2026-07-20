import Image from "next/image";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { getInsight } from "@/content/insights";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;

  const article = getInsight(slug);

  if (!article) {
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
              priority
              className="object-cover"
            />
          </div>

          <section className="mt-20">
            <h2 className="text-3xl font-bold">Overview</h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Every article published on Kotaxa is based on real-world
              experiments, practical software development and continuous
              learning.
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              In future versions, this page will render MDX content with code
              blocks, syntax highlighting, diagrams and interactive examples.
            </p>
          </section>

          <div className="mt-20">
            <Button href="/insights" variant="secondary">
              ← Back to Insights
            </Button>
          </div>
        </article>
      </Container>
    </main>
  );
}
