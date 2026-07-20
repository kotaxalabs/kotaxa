import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Great"
        description="Have a question, collaboration idea or feedback? We'd love to hear from you."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Card>
            <ContactForm />
          </Card>

          <Card>
            <h2 className="text-3xl font-bold">
              Contact Information
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="mt-2 text-zinc-400">
                  kotaxalabs@gmail.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="mt-2 text-zinc-400">
                  github.com/kotaxalabs
                </p>
              </div>

              <div>
                <h3 className="font-semibold">YouTube</h3>
                <p className="mt-2 text-zinc-400">
                  @kotaxa
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
