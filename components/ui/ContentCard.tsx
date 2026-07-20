import Image from "next/image";
import Link from "next/link";

import Badge from "./Badge";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  href: string;
  className?: string;
}

export default function ContentCard({
  title,
  description,
  category,
  image,
  href,
  className,
}: ContentCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/10",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <Badge>{category}</Badge>

        <h3 className="mt-5 text-2xl font-bold transition-colors group-hover:text-violet-400">
          {title}
        </h3>

        <p className="mt-4 line-clamp-3 leading-7 text-zinc-400">
          {description}
        </p>

        <span className="mt-8 inline-flex font-semibold text-violet-400">
          Read Article →
        </span>
      </div>
    </Link>
  );
}
