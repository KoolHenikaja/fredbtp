const SERVICES = [
  {
    index: "01",
    title: "Construction neuve",
    description:
      "De la fondation à la toiture, nous construisons villas, immeubles et bâtiments commerciaux clés en main.",
    icon: (
      <>
        <path d="M4 21V10l8-6 8 6v11" />
        <path d="M9 21v-7h6v7" />
        <path d="M4 21h16" />
      </>
    ),
  },
  {
    index: "02",
    title: "Gros œuvre & fondations",
    description:
      "Terrassement, fondations et structure en béton armé : la base technique de tout chantier durable.",
    icon: (
      <>
        <rect x="4" y="14" width="16" height="4" rx="0.5" />
        <rect x="6" y="9" width="12" height="4" rx="0.5" />
        <rect x="8" y="4" width="8" height="4" rx="0.5" />
      </>
    ),
  },
  {
    index: "03",
    title: "Rénovation & réhabilitation",
    description:
      "Remise aux normes, extension et réaménagement intérieur pour redonner vie à un bâtiment existant.",
    icon: (
      <>
        <path d="M14.7 6.3a4 4 0 1 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4Z" />
        <path d="M17.5 6.5 19 5" />
      </>
    ),
  },
  {
    index: "04",
    title: "Charpente & toiture",
    description:
      "Charpente bois ou métallique, couverture et étanchéité adaptées au climat malgache.",
    icon: (
      <>
        <path d="M3 12 12 4l9 8" />
        <path d="M5 11v9h14v-9" />
        <path d="M10 20v-5h4v5" />
      </>
    ),
  },
  {
    index: "05",
    title: "Génie civil & VRD",
    description:
      "Voirie, réseaux divers et ouvrages d'art : nous équipons vos terrains avant toute construction.",
    icon: (
      <>
        <path d="M4 21 10 3h4l6 18" />
        <path d="M8.5 15h7" />
      </>
    ),
  },
  {
    index: "06",
    title: "Maîtrise d'œuvre & suivi",
    description:
      "Pilotage technique, coordination des corps de métier et reporting régulier jusqu'à la livraison.",
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="1.5" />
        <path d="M9 3v2h6V3" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-creme dark:bg-ardoise">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* En-tête de section */}
        <div className="max-w-xl">
          <p className="font-body text-sm font-semibold text-royal dark:text-chantier">
            Nos savoir-faire
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ardoise dark:text-creme sm:text-[2.75rem]">
            Un métier, plusieurs <span className="text-chantier">expertises</span>.
          </h2>
          <p className="mt-4 font-body text-[15px] leading-relaxed text-ardoise/65 dark:text-creme/65">
            Chaque chantier mobilise des compétences différentes. FRED BTP les
            réunit sous un seul interlocuteur, du premier coup de pioche à la
            remise des clés.
          </p>
        </div>

        {/* Grille des services */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.index}
              className="group relative rounded-2xl border border-gris bg-white p-7 transition-colors hover:border-chantier/50 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <span className="absolute right-6 top-6 font-display text-xs font-semibold text-ardoise/25 dark:text-creme/25">
                {service.index}
              </span>

              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal/10">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1E40AF"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="dark:stroke-[#F97316]"
                >
                  {service.icon}
                </svg>
              </span>

              <h3 className="mt-5 font-display text-lg font-bold text-ardoise dark:text-creme">
                {service.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ardoise/60 dark:text-creme/60">
                {service.description}
              </p>

              <span className="mt-5 flex items-center gap-1.5 font-body text-sm font-semibold text-royal opacity-0 transition-opacity group-hover:opacity-100 dark:text-chantier">
                En savoir plus
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}