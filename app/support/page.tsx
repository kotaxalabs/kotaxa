import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function SupportPage() {
  return (
    <main>
      <PageHero
        eyebrow="Support"
        title="Support the Mission"
        description="Every contribution helps us build more projects, create educational content and share open knowledge."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card>
            <h2 className="text-2xl font-bold">
              Open Source
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Contribute to our public repositories.
            </p>

            <div className="mt-8">
              <Button
                href="https://github.com/kotaxalabs"
                variant="secondary"
              >
                GitHub
              </Button>
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold">
              Community
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Share ideas, report issues and participate in discussions.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold">
              Financial Support
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Future sponsorship and donation options will be available here.
            </p>
          </Card>
        </div>
      </Section>
    </main>
  );
}
