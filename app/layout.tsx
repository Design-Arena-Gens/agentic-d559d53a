import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ReactNode } from "react";

const plexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Effect of Futsal-Specific Functional Fatigue",
  description:
    "Simulated research article exploring shock absorption strategies and landing kinematics in elite female futsal players."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${plexSans.className} bg-slate-100 text-slate-900`.trim()}
      >
        {children}
      </body>
    </html>
  );
}
