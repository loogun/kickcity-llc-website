import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          <div className="space-y-4">
            <div className="inline-block border border-white px-4 py-2 bg-black">
              <span className="font-bold tracking-widest text-sm uppercase text-white">
                KickCity LLC
              </span>
            </div>
            <p className="text-white/70 text-sm max-w-xs mt-4">
              Building the Future of Youth Sports in North Texas. Headquartered in McKinney, Texas.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="uppercase tracking-widest text-xs font-semibold text-white/50">Navigation</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-sm hover:underline underline-offset-4 text-white/90">Home</Link>
              <Link href="/about" className="text-sm hover:underline underline-offset-4 text-white/90">About</Link>
              <Link href="/ventures" className="text-sm hover:underline underline-offset-4 text-white/90">Ventures</Link>
              <Link href="/contact" className="text-sm hover:underline underline-offset-4 text-white/90">Contact</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="uppercase tracking-widest text-xs font-semibold text-white/50">Contact</h4>
            <div className="text-sm text-white/90 space-y-2">
              <p>Collin County, North Texas</p>
              <p>McKinney, TX</p>
              <div className="pt-2">
                <Link href="/contact" className="text-[#CC0000] font-medium hover:underline underline-offset-4">
                  Get in Touch &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} KickCity LLC. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-6">
            <span className="text-white/50 text-xs cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="text-white/50 text-xs cursor-pointer hover:text-white">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
