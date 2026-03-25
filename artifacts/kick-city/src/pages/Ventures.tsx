import { Link } from "wouter";

const BRANDS = [
  {
    id: "soccer-academy",
    name: "Kick City Soccer Academy",
    status: "Active",
    logo: null,
    logoBg: "bg-[#C9B99A]",
    description: "Our premier youth soccer coaching brand. The Academy focuses on developing foundational skills, game intelligence, and teamwork in children ages 2 through 13 (Pre-K through 8th grade). Operating with a structured, age-appropriate curriculum delivered by expert coaches, the Academy provides a clear pathway for athletic development in a supportive environment.",
  },
  {
    id: "athletics",
    name: "KickCity Athletics",
    status: "Active",
    logo: "/logos/kickcity-athletics-logo.png",
    logoBg: "bg-[#C9B99A]",
    description: "A specialized youth sports training brand focusing on holistic athletic development. KickCity Athletics goes beyond specific sports to build foundational athletic agility, self-discipline, and a resilient mindset. Using a multi-sport training approach, we prepare young athletes to excel physically and mentally in any competitive environment they choose to pursue.",
  },
  {
    id: "soccer-house",
    name: "Kick City Soccer House",
    status: "Coming Soon",
    logo: "/logos/soccer-house-logo.png",
    logoBg: "bg-black",
    description: "A proposed state-of-the-art facility serving families across North Texas. Kick City Soccer House will feature premier indoor and outdoor soccer coaching and play areas in a climate-controlled environment. Designed specifically for children ages 2-13, this facility will serve as the central hub for our programs, proudly serving families from McKinney, Melissa, Frisco, Plano, Little Elm, Prosper, Celina, and Anna.",
  }
];

export default function Ventures() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light text-black tracking-tight border-b border-black/10 pb-8">
          Our Brands
        </h1>
      </section>

      {/* Brand Panels */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        {BRANDS.map((brand) => (
          <div key={brand.id} className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
            
            {/* Logo Box */}
            <div className={`w-full md:w-80 h-64 md:h-80 shrink-0 ${brand.logoBg} border border-black/10 flex items-center justify-center p-4`}>
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-widest text-black/60">Logo Coming Soon</p>
                  <h3 className="text-xl font-bold text-black uppercase tracking-tight">{brand.name}</h3>
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="flex-1 pt-2">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-3xl md:text-4xl font-medium text-black">{brand.name}</h2>
                <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                  brand.status === 'Coming Soon' 
                    ? 'bg-black text-white' 
                    : 'bg-[#C9B99A] text-black'
                }`}>
                  {brand.status}
                </span>
              </div>
              
              <p className="text-lg font-light text-black/80 leading-relaxed mb-8 max-w-3xl">
                {brand.description}
              </p>

              <button 
                className={`px-8 py-3 text-sm font-medium uppercase tracking-wider ${
                  brand.status === 'Coming Soon'
                    ? 'bg-black/10 text-black cursor-not-allowed border border-black/20'
                    : 'bg-[#CC0000] text-white hover:bg-[#AA0000] transition-colors'
                }`}
                disabled={brand.status === 'Coming Soon'}
                onClick={() => {
                  if (brand.status !== 'Coming Soon') {
                    // Mock action
                    window.alert(`Navigating to ${brand.name} external site...`);
                  }
                }}
              >
                {brand.status === 'Coming Soon' ? 'In Development' : 'Learn More'}
              </button>
            </div>
          </div>
        ))}
      </section>
      
      {/* Footer Banner */}
      <section className="bg-[#C9B99A] py-16 px-4 sm:px-6 lg:px-8 text-center border-t border-black/10">
        <h3 className="text-2xl font-light text-black mb-6">Interested in partnership opportunities?</h3>
        <Link 
          href="/contact" 
          className="inline-block border-2 border-black text-black px-8 py-3 font-semibold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors"
        >
          Contact the Firm
        </Link>
      </section>
    </div>
  );
}
