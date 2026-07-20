import Link from "next/link";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section>
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          BUILD • LEARN • SHARE
        </p>

        <h1 className="text-5xl font-black leading-tight md:text-7xl">
          Building the Future
          <br />
          One Project at a Time.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Kotaxa is an open technology platform focused on Artificial
          Intelligence, Software Engineering, Cybersecurity, Robotics and
          Education.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button href="/projects">
            Explore Projects
          </Button>

          <Button
            href="/about"
            variant="secondary"
          >
            Learn More
          </Button>
        </div>
      </div>
    </Section>
  );
}
