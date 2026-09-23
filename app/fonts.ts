import { Poppins } from "next/font/google";

// Poppins couvre à la fois les titres (600-800) et le texte courant (400-500)
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});