import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* paddingTop (pt-20) to account for the fixed header (h-20) */}
      <main className="flex-1 pt-20 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
