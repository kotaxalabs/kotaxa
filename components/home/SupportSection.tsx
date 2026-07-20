import Link from "next/link";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function SupportSection() {
  return (
    <Section>
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/10 to-cyan-500/10 p-10 lg:p-16">
        <SectionHeading
          eyebrow="Community"
          title="Build the Future Together"
          description="Kotaxa grows through open knowledge, collaboration and community support."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">Open Source</h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Explore our public repositories and contribute to ongoing
              projects.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Share Knowledge</h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Read technical articles, project logs and educational content
              published by Kotaxa.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Support the Mission</h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Help us create more open-source projects, courses and experiments
              for the community.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button href="/support">
            Become a Supporter
          </Button>

          <Button
            href="https://github.com/kotaxalabs"
            variant="secondary"
          >
            GitHub
          </Button>

          <Link
            href="/about"
            className="inline-flex items-center font-semibold text-violet-400 hover:text-violet-300"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </Section>
  );
}
