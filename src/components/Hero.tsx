export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#070C26] flex items-center overflow-hidden pt-16"
    >
      {/* Purple gradient decorative blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <div className="absolute top-10 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#3711BF] opacity-25 blur-[100px]" />
        <div className="absolute bottom-20 right-[10%] w-[300px] h-[300px] rounded-full bg-[#280D8C] opacity-30 blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-2 border border-[#3711BF] px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F24B4B] animate-pulse" />
            <span className="text-xs tracking-[0.2em] text-white/70 font-body uppercase">
              REACT NATIVE · NEXT.JS · PHP LARAVEL
            </span>
          </div>

          {/* Sub-label */}
          <p className="text-xs tracking-[0.3em] text-white/40 font-body">
            V 1.0.2 // BETA
          </p>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight text-white">
            POMAGAM<br />
            ZDEFINIOWAĆ TWOJĄ{' '}
            <br />
            <span className="text-[#F24B4B]">PRZYSZŁOŚĆ</span>
          </h1>

          {/* Description */}
          <p className="text-sm text-white/60 font-body leading-relaxed max-w-md">
            Sklepy internetowe, aplikacje webowe, aplikacje mobilne
            oraz integracje API dla firm, które potrzebują solidnego
            wsparcia bez agencyjnego narzutu. Bezpośrednia
            współpraca, rzetelność i odpowiedzialność za wynik.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 bg-[#F24B4B] hover:bg-[#d93a3a] text-white font-body font-bold text-sm tracking-widest px-8 py-4 transition-colors group"
            >
              MAM PYTANIE
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#uslugi"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-body text-sm tracking-widest px-8 py-4 transition-colors"
            >
              ZAKRES USŁUG
            </a>
          </div>
        </div>

        {/* Right – decorative purple block */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3711BF] to-[#180E59] opacity-80" />
            <div className="absolute inset-[2px] bg-[#070C26]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-24 h-40 border-2 border-[#3711BF] rounded-2xl mx-auto" />
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#3711BF] rounded" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-[#F24B4B]" />
              </div>
            </div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-[#F24B4B]" />
            <div className="absolute bottom-8 left-6 w-2 h-2 bg-[#3711BF]" />
          </div>
        </div>
      </div>
    </section>
  )
}
