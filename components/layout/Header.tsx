import Link from "next/link";

import Container from "./Container";
import Logo from "../ui/Logo";

import DesktopNavigation from "../navigation/DesktopNavigation";
import MobileNavigation from "../navigation/MobileNavigation";

export default function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-black/40
        backdrop-blur-xl
      "
    >
      <Container>
        <div
          className="
            flex
            h-20
            items-center
            justify-between
          "
        >
          <Logo />

          <DesktopNavigation />

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/kotaxalabs"
              target="_blank"
              className="
                hidden
                lg:inline-flex
                rounded-xl
                bg-violet-600
                px-5
                py-2.5
                text-sm
                font-semibold
                transition
                hover:bg-violet-500
              "
            >
              GitHub
            </Link>

            <MobileNavigation />
          </div>
        </div>
      </Container>
    </header>
  );
}
