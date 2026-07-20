import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Great"
        description="Questions, ideas, collaborations or feedback are always welcome."
      />

      <Section>
        <Card className="max-w-3xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">
                Email
              </h3>

              <p className="mt-2 text-zinc-400">
                kotaxalabs@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                GitHub
              </h3>

              <p className="mt-2 text-zinc-400">
                github.com/kotaxalabs
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                YouTube
              </h3>

              <p className="mt-2 text-zinc-400">
                youtube.com/@kotaxa
              </p>
            </div>
          </div>
        </Card>
      </Section>
    </main>
  );
}
