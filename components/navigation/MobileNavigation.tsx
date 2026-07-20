"use client";

import { Menu } from "lucide-react";

export default function MobileNavigation() {
  return (
    <button
      className="
        flex
        lg:hidden
        items-center
        justify-center
        w-10
        h-10
        rounded-xl
        hover:bg-white/5
        transition
      "
      aria-label="Open Menu"
    >
      <Menu size={22} />
    </button>
  );
}
