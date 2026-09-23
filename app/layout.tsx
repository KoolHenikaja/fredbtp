import type { Metadata } from "next";
import { poppins } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "FRED BTP",
  description:
    "FRED BTP — entreprise générale de bâtiment à Madagascar : construction, gros œuvre, rénovation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}