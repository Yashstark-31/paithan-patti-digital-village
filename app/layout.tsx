import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paithan Patti | The Digital Village",
  description: "Our Village. Our People. Our Identity. Our Future."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
