import { Barlow_Condensed, Inter } from "next/font/google";

// Barlow Condensed : typo condensée et robuste, esprit signalétique de chantier
export const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

// Inter : texte courant, lisible, neutre
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

// À utiliser dans app/layout.tsx :
//
// import { barlow, inter } from "./fonts";
//
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="fr" className={`${barlow.variable} ${inter.variable}`} suppressHydrationWarning>
//       <body className="bg-creme dark:bg-ardoise font-body">{children}</body>
//     </html>
//   );
// }