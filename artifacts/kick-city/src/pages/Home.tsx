import { Link } from "wouter";

const VENTURES = [
  {
    name: "Kick City Soccer Academy",
    description: "Premier youth soccer coaching programs dedicated to developing foundational skills and teamwork in children ages 2-13. Setting the standard for youth sports education.",
  },
  {
    name: "KickCity Athletics",
    description: "Comprehensive youth sports training focusing on athletic agility, self-discipline, and building a resilient mindset. A multi-sport approach to athletic excellence.",
  },
  {
    name: "Kick City Soccer House",
    description: "Coming soon to North Texas. A state-of-the-art premier indoor and outdoor soccer coaching and play facility designed for families and young athletes.",
  }
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#F5F0E8] min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h1 className="text-5xl md:text-7xl font-light text-black tracking-tight leading-tight">
            KickCity LLC
          </h1>
          <p className="text-lg md:text-2xl text-black/60 font-light max-w-2xl mx-auto">
            Building the Future of Youth Sports in North Texas
          </p>
          <div className="pt-8">
            <Link 
              href="/ventures" 
              className="inline-block bg-[#CC0000] hover:bg-[#AA0000] text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest"
            >
              Explore Our Brands
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-black/50 mb-6">About the Firm</h2>
          <p className="text-xl md:text-3xl font-light text-black leading-relaxed">
            KickCity LLC is a holding company for three premier youth sports brands operating across the Dallas-Fort Worth metroplex. Headquartered in McKinney, Texas, we invest in the physical and character development of the next generation of athletes.
          </p>
        </div>
      </section>

      {/* Ventures Cards Section */}
      <section className="bg-white pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-black">Our Portfolio</h2>
            <Link href="/ventures" className="hidden md:inline-block text-black hover:text-[#CC0000] font-medium uppercase text-sm tracking-widest border-b border-transparent hover:border-[#CC0000]">
              View All &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VENTURES.map((venture, idx) => (
              <div 
                key={idx} 
                className="bg-[#C9B99A] border border-black/5 p-10 flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-black mb-4">
                    {venture.name}
                  </h3>
                  <p className="text-black/80 font-light leading-relaxed mb-10">
                    {venture.description}
                  </p>
                </div>
                <div>
                  <Link 
                    href="/ventures" 
                    className="inline-block border border-black text-black px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-black hover:text-white"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/ventures" className="inline-block text-black hover:text-[#CC0000] font-medium uppercase text-sm tracking-widest">
              View All Ventures &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
