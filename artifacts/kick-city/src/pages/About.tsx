export default function About() {
  const CORE_VALUES = [
    {
      title: "Athletic Excellence",
      description: "Setting the highest standards for sports education, facility quality, and athletic outcomes."
    },
    {
      title: "Youth Development",
      description: "Fostering physical, mental, and emotional growth tailored to each child's developmental stage."
    },
    {
      title: "Community",
      description: "Building strong relationships with local families and contributing positively to the communities we serve."
    },
    {
      title: "Resilience",
      description: "Teaching perseverance, discipline, and the value of hard work through structured athletic challenges."
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-white py-24 border-b border-black/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-black tracking-tight mb-6">
            About KickCity LLC
          </h1>
          <p className="text-lg text-black/60 uppercase tracking-widest font-medium">
            Developing the Next Generation
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-black/50 mb-6">Our Mission</h2>
          <p className="text-2xl md:text-4xl font-light text-black leading-tight">
            To develop young athletes through expert coaching, instill community values, and provide world-class facilities that inspire excellence both on and off the field.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-[#C9B99A] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-black/60 mb-6">Company Story</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg font-light text-black leading-relaxed mb-6">
              KickCity LLC was founded to serve North Texas families by meeting the growing demand for quality youth sports programs. We recognized a critical gap in professional, developmental sports coaching for young children in our communities.
            </p>
            <p className="text-lg font-light text-black leading-relaxed">
              Through strategic investments in coaching methodologies and facility development, we are building a holistic ecosystem that supports young athletes from their first steps on the field through their crucial developmental years.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-black/50 mb-12 text-center">Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, idx) => (
              <div key={idx} className="border border-black/10 p-8 flex flex-col hover:border-black/30 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-black mb-4 uppercase tracking-wider">{value.title}</h3>
                <p className="text-black/70 font-light text-sm leading-relaxed flex-1">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section className="bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-8">Serving North Texas</h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Operating exclusively within the Dallas-Fort Worth metroplex, focusing on rapid-growth communities in Collin County.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/80 font-medium uppercase tracking-widest text-sm">
            <span>McKinney</span>
            <span>&bull;</span>
            <span>Melissa</span>
            <span>&bull;</span>
            <span>Frisco</span>
            <span>&bull;</span>
            <span>Plano</span>
            <span>&bull;</span>
            <span>Little Elm</span>
            <span>&bull;</span>
            <span>Prosper</span>
            <span>&bull;</span>
            <span>Celina</span>
            <span>&bull;</span>
            <span>Anna</span>
          </div>
        </div>
      </section>
    </div>
  );
}
