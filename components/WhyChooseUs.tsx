const HIGHLIGHTS = [
  {
    title: "Délais contractuels respectés",
    description:
      "Planning détaillé partagé dès la signature, chantier suivi semaine après semaine.",
  },
  {
    title: "Devis transparent, sans surprise",
    description:
      "Prix fermes, matériaux détaillés poste par poste, aucun coût caché en cours de chantier.",
  },
  {
    title: "Équipe qualifiée et encadrée",
    description:
      "Chefs de chantier expérimentés, ouvriers formés aux normes de sécurité en vigueur.",
  },
  {
    title: "Garantie décennale",
    description: "Chaque ouvrage est couvert et suivi bien après la livraison.",
  },
];

const KEY_FIGURES = [
  { value: "0", label: "accident grave sur les 3 dernières années" },
  { value: "100 %", label: "chantiers livrés dans les délais contractuels" },
  { value: "12", label: "corps de métier intégrés en interne" },
];

export default function WhyChooseUs() {
  return (
    <section id="a-propos" className="bg-creme dark:bg-ardoise">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Colonne texte + checklist */}
          <div>
            <p className="font-body text-sm font-semibold text-royal dark:text-chantier">
              Pourquoi nous choisir
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ardoise dark:text-creme sm:text-[2.75rem]">
              Un partenaire qui <span className="text-chantier">tient parole</span>.
            </h2>
            <p className="mt-4 max-w-md font-body text-[15px] leading-relaxed text-ardoise/65 dark:text-creme/65">
              Nos engagements ne sont pas des promesses commerciales : ce sont
              des règles de chantier que nous appliquons projet après projet.
            </p>

            <ul className="mt-9 flex flex-col gap-6">
              {HIGHLIGHTS.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-chantier/10">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-ardoise dark:text-creme">
                      {item.title}
                    </p>
                    <p className="mt-1 font-body text-sm leading-relaxed text-ardoise/60 dark:text-creme/60">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne chiffres clés — carte sombre en contraste */}
          <div className="rounded-2xl bg-ardoise p-8 dark:border dark:border-white/10 sm:p-10">
            <p className="font-body text-sm font-semibold text-chantier">
              Chiffres clés
            </p>
            <p className="mt-3 font-display text-5xl font-bold leading-none text-creme">
              14 ans
            </p>
            <p className="mt-2 font-body text-sm text-creme/60">
              d&apos;expérience terrain à Madagascar
            </p>

            <div className="mt-9 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              {KEY_FIGURES.map((fig) => (
                <div key={fig.label}>
                  <p className="font-display text-2xl font-bold text-creme">
                    {fig.value}
                  </p>
                  <p className="mt-1.5 font-body text-xs leading-relaxed text-creme/55">
                    {fig.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}