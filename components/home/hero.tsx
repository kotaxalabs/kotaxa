import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7C3AED22,transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#09090B,#09090B)]" />
      </div>

      <Container>
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-20 py-24 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              Build • Learn • Share
            </p>

            <h1 className="text-6xl font-black leading-none tracking-tight lg:text-8xl">
              BUILD
              <br />
              THE
              <br />
              FUTURE.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              Building software, exploring AI, documenting projects and
              sharing everything we learn with the community.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-xl bg-violet-600 px-7 py-4 font-semibold transition hover:bg-violet-500"
              >
                Explore Projects
              </Link>

              <Link
                href="https://github.com/kotaxalabs"
                target="_blank"
                className="rounded-xl border border-white/10 px-7 py-4 font-semibold hover:bg-white/5"
              >
                GitHub
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <Image
              src="/images/home/hero-workspace.webp"
              alt="Kotaxa Workspace"
              width={900}
              height={900}
              priority
              className="rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
