import Container from "@/components/layout/Container";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="border-b border-white/10 py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          {eyebrow}
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight lg:text-7xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
          {description}
        </p>
      </Container>
    </section>
  );
}
