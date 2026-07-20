import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="Kotaxa Home"
    >
      <Image
        src="/branding/logo.svg"
        alt="Kotaxa"
        width={40}
        height={40}
        priority
      />

      <span className="text-xl font-bold tracking-tight">
        Kotaxa
      </span>
    </Link>
  );
}
