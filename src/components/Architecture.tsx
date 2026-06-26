const CloudIcon = () => (
  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="opacity-20">
    <path
      d="M96 64H30a22 22 0 0 1-3-43.8A30 30 0 0 1 84 32a18 18 0 0 1 12 32z"
      stroke="#ffffff"
      strokeWidth="2"
      fill="none"
    />
    <path d="M60 64V44M60 44l-8 8M60 44l8 8" stroke="#F24B4B" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export default function Architecture() {
  return (
    <section className="bg-dark-purple py-24 relative overflow-hidden">
      {/* Background decorative lines */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px)',
          backgroundSize: '100% 40px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <p className="text-xs tracking-[0.3em] text-white/40 font-body uppercase">
            04 / Zaplecze techniczne
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-white leading-tight">
            SOLIDNY KOD <br /> WSPARTY {''}
            <span className="text-[#F24B4B]">AI</span>
          </h2>
          <p className="text-sm text-white/60 font-body leading-relaxed max-w-md">
            Buduję API, tworzę integracje z zewnętrznymi systemami
            i utrzymuję serwisy w produkcji. Decyzje techniczne
            oparte są na praktyce, a nie na modzie.
          </p>
          <div className="flex gap-8 mt-4">
            <div className="flex flex-col">
              <span className="font-heading text-3xl text-[#F24B4B]">10+</span>
              <span className="text-xs text-white/40 font-body mt-1 tracking-wider">LAT DOŚWIADCZENIA</span>
            </div>
            <div className="w-px bg-white/10" />
            <div className="flex flex-col">
              <span className="font-heading text-3xl text-[#F24B4B]">1-3</span>
              <span className="text-xs text-white/40 font-body mt-1 tracking-wider">OSOBY W ZESPOLE</span>
            </div>
          </div>
        </div>

        {/* Cloud illustration */}
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* Outer ring */}
            <div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-[#3711BF]/40 flex items-center justify-center bg-[#3711BF]/10">
                  <CloudIcon />
                </div>
              </div>
            </div>
            {/* Orbiting dots */}
            {/* Red dot — outer ring, clockwise 6s */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ animation: 'orbit-cw 9s linear infinite' }}
            >
              <div className="absolute w-2 h-2 rounded-full bg-[#F24B4B]" style={{ transform: 'translateY(-120px)' }} />
            </div>
            {/* Blue dot — middle ring, counter-clockwise 9s */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ animation: 'orbit-ccw 12s linear infinite' }}
            >
              <div className="absolute w-1.5 h-1.5 rounded-full bg-[#3711BF]" style={{ transform: 'translateY(-88px)' }} />
            </div>
            {/* White dot — inner ring, clockwise 13s with offset start */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ animation: 'orbit-cw 16s linear infinite', animationDelay: '-5s' }}
            >
              <div className="absolute w-1 h-1 rounded-full bg-white/40" style={{ transform: 'translateY(-56px)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
