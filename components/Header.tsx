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
  const [active, setActive] = useState("#accueil");

  return (
    <header className="sticky top-0 z-50 border-b border-gris bg-creme/95 backdrop-blur dark:border-white/10 dark:bg-ardoise/95">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="#accueil"
          onClick={() => setActive("#accueil")}
          className="flex items-center gap-2.5"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-royal">
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
              onClick={() => setActive(link.href)}
              className={`relative pb-1 font-body text-[15px] font-medium transition-colors ${
                active === link.href
                  ? "text-chantier"
                  : "text-ardoise/75 hover:text-royal dark:text-creme/75 dark:hover:text-chantier"
              }`}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-chantier" />
              )}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="#a-propos"
            className="rounded-full border border-chantier px-5 py-2.5 font-body text-sm font-semibold text-chantier transition-colors hover:bg-chantier/10"
          >
            Espace client
          </Link>
          <Link
            href="#contact"
            className="rounded-full bg-chantier px-5 py-2.5 font-body text-sm font-semibold text-creme transition-colors hover:bg-orange-600"
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
        <div className="border-t border-gris bg-creme px-6 pb-6 pt-2 dark:border-white/10 dark:bg-ardoise lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setOpen(false);
                }}
                className={`rounded-lg px-2 py-3 font-body text-base font-medium ${
                  active === link.href ? "text-chantier" : "text-ardoise dark:text-creme"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <ThemeToggle />
            <Link
              href="#a-propos"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full border border-chantier px-4 py-2.5 text-center font-body text-sm font-semibold text-chantier"
            >
              Espace client
            </Link>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-chantier px-4 py-2.5 text-center font-body text-sm font-semibold text-creme"
            >
              Devis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}