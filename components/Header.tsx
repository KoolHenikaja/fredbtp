"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gris/70 bg-creme/90 backdrop-blur dark:border-white/10 dark:bg-ardoise/90">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        {/* Logo */}
        <Link href="#accueil" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-royal">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F8FAFC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18" />
              <path d="M5 21V9l7-5 7 5v12" />
              <path d="M10 21v-6h4v6" />
            </svg>
          </span>
          <span className="font-display text-2xl font-bold leading-none tracking-tight text-ardoise dark:text-creme">
            FRED <span className="text-chantier">BTP</span>
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[15px] font-medium text-ardoise/80 transition-colors hover:text-royal dark:text-creme/80 dark:hover:text-chantier"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Link
            href="#contact"
            className="rounded-sm bg-chantier px-5 py-2.5 font-body text-sm font-semibold text-creme transition-colors hover:bg-orange-600"
          >
            Demander un devis
          </Link>
        </div>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-ardoise dark:text-creme">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-gris/70 bg-creme px-6 pb-6 pt-2 dark:border-white/10 dark:bg-ardoise lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 font-body text-base font-medium text-ardoise dark:text-creme"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between">
            <ThemeToggle />
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-sm bg-chantier px-5 py-2.5 font-body text-sm font-semibold text-creme"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}