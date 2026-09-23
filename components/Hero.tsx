"use client";

import { useState } from "react";
import Image from "next/image";
import HeroImage from "@/assets/hero_image.png"

const TABS = ["Construction", "Rénovation"];

const PROJECT_TYPES = ["Maison individuelle", "Immeuble", "Local commercial", "Rénovation lourde"];
const BUDGETS = ["< 20M Ar", "20M – 50M Ar", "50M – 100M Ar", "100M Ar +"];

const STATS = [
  {
    label: "chantiers réalisés",
    value: "240+",
    icon: (
      <path d="M3 21h18M5 21V9l7-5 7 5v12M10 21v-6h4v6" />
    ),
  },
  {
    label: "clients satisfaits",
    value: "480+",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
        <circle cx="17" cy="9" r="2.6" />
        <path d="M15.5 14c2.8.3 4.7 2.3 5 6" />
      </>
    ),
  },
  {
    label: "ouvriers qualifiés",
    value: "65+",
    icon: (
      <>
        <path d="M14.7 6.3a4 4 0 1 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4Z" />
        <path d="M17.5 6.5 19 5" />
      </>
    ),
  },
];

export default function Hero() {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <section id="accueil" className="bg-creme dark:bg-ardoise">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-10 lg:pt-20">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Colonne texte + carte devis */}
          <div>
            <h1 className="font-display text-[2.6rem] font-bold leading-[1.08] tracking-tight text-ardoise dark:text-creme sm:text-[3.25rem]">
              Le chantier qui
              <br />
              tient ses <span className="text-chantier">engagements</span>.
            </h1>

            <p className="mt-5 max-w-md font-body text-[15px] leading-relaxed text-ardoise/65 dark:text-creme/65">
              Construction, gros œuvre et rénovation partout à Madagascar —
              devis clair, chantier suivi, délai respecté.
            </p>

            {/* Carte de demande de devis */}
            <div className="mt-8 w-full max-w-md rounded-2xl border border-gris bg-white p-5 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-white/[0.04]">
              {/* Onglets */}
              <div className="mb-4 flex gap-6 border-b border-gris dark:border-white/10">
                {TABS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`relative pb-3 font-body text-sm font-semibold transition-colors ${
                      tab === t
                        ? "text-ardoise dark:text-creme"
                        : "text-ardoise/40 dark:text-creme/40"
                    }`}
                  >
                    {t}
                    {tab === t && (
                      <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-chantier" />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-2.5 rounded-lg border border-gris px-3.5 py-3 dark:border-white/10">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Ville, quartier..."
                    className="w-full bg-transparent font-body text-sm text-ardoise placeholder:text-ardoise/40 outline-none dark:text-creme dark:placeholder:text-creme/40"
                  />
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <select
                    defaultValue=""
                    className="rounded-lg border border-gris bg-transparent px-3.5 py-3 font-body text-sm text-ardoise/80 outline-none dark:border-white/10 dark:text-creme/80"
                  >
                    <option value="" disabled>Type de projet</option>
                    {PROJECT_TYPES.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  <select
                    defaultValue=""
                    className="rounded-lg border border-gris bg-transparent px-3.5 py-3 font-body text-sm text-ardoise/80 outline-none dark:border-white/10 dark:text-creme/80"
                  >
                    <option value="" disabled>Budget estimé</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <button className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-chantier px-4 py-3 font-body text-sm font-semibold text-creme transition-colors hover:bg-orange-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                  Obtenir un devis
                </button>
              </div>
            </div>
          </div>

          {/* Colonne visuelle */}
          <div className="relative">
            <div className="relative aspect-[4/3.1] w-full overflow-hidden rounded-2xl bg-ardoise">
              {/* Remplacer par une vraie photo de chantier : /public/hero-chantier.jpg */}
              <Image
                src={HeroImage}
                alt="Chantier de construction FRED BTP"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Carte flottante projet en cours */}
            <div className="absolute -bottom-6 right-4 w-[calc(100%-3rem)] max-w-xs rounded-xl border border-gris bg-white p-4 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.25)] dark:border-white/10 dark:bg-ardoise sm:right-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-body text-[15px] font-semibold text-ardoise dark:text-creme">
                    Immeuble R+3 — Ivandry
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 font-body text-xs text-ardoise/55 dark:text-creme/55">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    Ivandry, Antananarivo
                  </p>
                  <p className="mt-2 font-body text-xs font-semibold text-royal">
                    Avancement — 68 %
                  </p>
                </div>
                <button
                  aria-label="Voir le projet suivant"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gris text-ardoise/60 dark:bg-white/10 dark:text-creme/60"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="mt-20 grid grid-cols-1 divide-y divide-gris rounded-2xl border border-gris bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.03]">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 px-7 py-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-chantier/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {stat.icon}
                </svg>
              </span>
              <div>
                <p className="font-display text-2xl font-bold leading-none text-ardoise dark:text-creme">
                  {stat.value}
                </p>
                <p className="mt-1.5 font-body text-sm text-ardoise/55 dark:text-creme/55">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}