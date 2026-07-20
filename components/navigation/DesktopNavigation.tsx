import Link from "next/link";
import { navigation } from "./navigation";

export default function DesktopNavigation() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="
            text-sm
            font-medium
            text-zinc-300
            transition-colors
            duration-200
            hover:text-white
          "
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
