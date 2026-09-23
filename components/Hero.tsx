import Link from "next/link";

const STATS = [
  { value: "18 ans", label: "d'expérience sur chantier" },
  { value: "240+", label: "projets livrés dans les délais" },
  { value: "98 %", label: "de clients qui nous recommandent" },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-creme dark:bg-ardoise"
    >
      {/* Fond façon plan d'architecte : grille fine + repère d'angle */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35] dark:opacity-[0.18]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="blueprint-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#1E40AF" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
      </svg>

      {/* Liseré orange diagonal, unique touche de couleur vive du fond */}
      <div className="pointer-events-none absolute -right-24 top-0 h-[140%] w-56 rotate-12 bg-chantier/10 dark:bg-chantier/[0.08]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* Colonne texte */}
          <div>
            <p className="font-body text-sm font-semibold text-royal dark:text-chantier">
              Entreprise générale de bâtiment — Madagascar
            </p>

            <h1 className="mt-4 font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-ardoise dark:text-creme sm:text-6xl">
              Des chantiers tenus,
              <br />
              du gros œuvre à la livraison.
            </h1>

            <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-ardoise/75 dark:text-creme/75">
              ATLAS BTP conduit vos projets de construction et de rénovation
              avec une seule promesse : respecter le budget annoncé et la
              date de livraison signée.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="rounded-sm bg-royal px-7 py-3.5 font-body text-[15px] font-semibold text-creme transition-colors hover:bg-blue-800"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="#realisations"
                className="rounded-sm border border-ardoise/20 px-7 py-3.5 font-body text-[15px] font-semibold text-ardoise transition-colors hover:border-royal hover:text-royal dark:border-creme/25 dark:text-creme dark:hover:border-chantier dark:hover:text-chantier"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>

          {/* Colonne visuelle : carte "chantier en cours" */}
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-sm border border-gris bg-white/60 shadow-[0_1px_0_0_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.03]">
              <div className="flex h-full flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-sm bg-royal px-3 py-1 font-body text-xs font-semibold text-creme">
                    Chantier en cours
                  </span>
                  <span className="font-body text-xs font-medium text-ardoise/50 dark:text-creme/50">
                    Lot 4 — Gros œuvre
                  </span>
                </div>
                <div>
                  <div className="mb-3 h-2 w-full rounded-full bg-gris dark:bg-white/10">
                    <div className="h-2 w-[68%] rounded-full bg-chantier" />
                  </div>
                  <p className="font-body text-sm text-ardoise/70 dark:text-creme/70">
                    Avancement du gros œuvre — 68 %
                  </p>
                </div>
              </div>
            </div>
            {/* Repère d'angle façon plan technique */}
            <div className="absolute -bottom-3 -left-3 h-6 w-6 border-b-2 border-l-2 border-chantier" />
            <div className="absolute -right-3 -top-3 h-6 w-6 border-r-2 border-t-2 border-chantier" />
          </div>
        </div>

        {/* Statistiques */}
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-gris pt-10 dark:border-white/10 sm:grid-cols-3 lg:mt-20">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-baseline gap-3 sm:flex-col sm:items-start sm:gap-1.5 ${
                i > 0 ? "sm:border-l sm:border-gris sm:pl-8 dark:sm:border-white/10" : ""
              }`}
            >
              <span className="font-display text-4xl font-bold text-ardoise dark:text-creme">
                {stat.value}
              </span>
              <span className="font-body text-sm text-ardoise/65 dark:text-creme/65">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}