import Link from "next/link";
import Container from "./Container";

const navigation = [
  {
    title: "Platform",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Insights", href: "/insights" },
      { label: "University", href: "/university" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kotaxalabs",
      },
      {
        label: "YouTube",
        href: "https://youtube.com/@kotaxa",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container>
        <div className="grid gap-16 py-20 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <h2 className="text-3xl font-black">
              Kotaxa
            </h2>

            <p className="mt-6 max-w-md leading-8 text-zinc-400">
              Building software, documenting projects and sharing knowledge
              through artificial intelligence, robotics and modern software
              engineering.
            </p>

            <p className="mt-10 text-sm text-zinc-500">
              Build. Learn. Share.
            </p>
          </div>

          {navigation.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold">
                {group.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-zinc-400 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-zinc-500 md:flex-row">
          <p>
            © 2026 Kotaxa. All rights reserved.
          </p>

          <p>
            Designed & Developed by Kotaxa Labs
          </p>
        </div>
      </Container>
    </footer>
  );
}
