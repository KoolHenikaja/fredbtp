import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-creme dark:bg-ardoise">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        {/* Sections suivantes à venir : Services, Réalisations, À propos, Contact */}
      </main>
    </div>
  );
}