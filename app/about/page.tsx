import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Building the Future in Public"
        description="Kotaxa is a technology ecosystem where every project becomes knowledge and every experiment becomes an opportunity to learn."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card>
            <h2 className="text-2xl font-bold">Mission</h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Build useful software, document the entire journey and make
              knowledge accessible to everyone.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold">Vision</h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Create one of the most transparent technology platforms where
              projects evolve in public from idea to production.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold">Values</h2>

            <ul className="mt-6 space-y-3 text-zinc-400">
              <li>• Learn continuously</li>
              <li>• Build openly</li>
              <li>• Share knowledge</li>
              <li>• Focus on quality</li>
            </ul>
          </Card>
        </div>
      </Section>
    </main>
  );
}
