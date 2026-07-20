import clsx from "clsx";
import Container from "@/components/layout/Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
}: SectionProps) {
  return (
    <section className={clsx("py-24 lg:py-32", className)}>
      <Container>{children}</Container>
    </section>
  );
}
