"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation } from "./navigation";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="
          flex
          lg:hidden
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          transition
          hover:bg-white/5
        "
        aria-label="Open Menu"
      >
        <Menu size={22} />
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300
          ${open ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      {/* Drawer */}
      <aside
        className={`
          fixed top-0 right-0 z-50
          h-screen
          w-80
          border-l border-white/10
          bg-[#09090B]
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <span className="text-lg font-bold">Menu</span>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-white/5"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                rounded-lg
                px-4
                py-3
                text-zinc-300
                transition
                hover:bg-white/5
                hover:text-white
              "
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-8 border-t border-white/10 pt-8">
            <Link
              href="https://github.com/kotaxalabs"
              target="_blank"
              className="
                flex
                justify-center
                rounded-xl
                bg-violet-600
                px-5
                py-3
                font-semibold
                transition
                hover:bg-violet-500
              "
            >
              GitHub
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}