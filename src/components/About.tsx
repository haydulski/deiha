const CodeEditorMockup = () => (
  <div className="w-full bg-[#0d1235] border border-white/10 rounded-sm overflow-hidden font-body text-xs">
    {/* Title bar */}
    <div className="bg-[#070C26] px-4 py-2 flex items-center gap-2 border-b border-white/10">
      <span className="w-2.5 h-2.5 rounded-full bg-[#F24B4B]" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
      <span className="ml-4 text-white/30 text-[10px] tracking-wider">routes/api.php — deiha-project</span>
    </div>
    {/* Code lines */}
    <div className="p-4 space-y-1 text-[11px] leading-5">
      <div><span className="text-[#3711BF]">use</span> <span className="text-white/70">App\Http\Controllers\OrderController</span><span className="text-white/60">;</span></div>
      <div><span className="text-white/20 pl-0">// API routes</span></div>
      <div><span className="text-[#3711BF]">Route</span><span className="text-white/60">::</span><span className="text-white">prefix</span><span className="text-white/60">(</span><span className="text-[#F24B4B]">'v1'</span><span className="text-white/60">)-&gt;</span><span className="text-white">group</span><span className="text-white/60">(</span><span className="text-[#3711BF]">function</span><span className="text-white/60">()</span> <span className="text-white/60">&#123;</span></div>
      <div className="pl-4"><span className="text-[#3711BF]">Route</span><span className="text-white/60">::</span><span className="text-white">get</span><span className="text-white/60">(</span><span className="text-[#F24B4B]">'orders'</span><span className="text-white/60">,</span></div>
      <div className="pl-8 text-white/60">[OrderController::class, <span className="text-[#F24B4B]">'index'</span>]);</div>
      <div className="pl-4"><span className="text-[#3711BF]">Route</span><span className="text-white/60">::</span><span className="text-white">post</span><span className="text-white/60">(</span><span className="text-[#F24B4B]">'orders'</span><span className="text-white/60">,</span></div>
      <div className="pl-8 text-white/60">[OrderController::class, <span className="text-[#F24B4B]">'store'</span>]);</div>
      <div className="text-white/60">&#125;);</div>
    </div>
  </div>
)

const stats = [
  { value: '50+', label: 'WDROŻONYCH PROJEKTÓW' },
  { value: '10+', label: 'LAT W BRANŻY' },
]

export default function About() {
  return (
    <section id="o-nas" className="bg-[#070C26] py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <p className="text-xs tracking-[0.3em] text-white/40 font-body uppercase">
            05 / O mnie
          </p>
          <h2 className="font-heading text-3xl md:text-6xl leading-tight text-white">
            ROZWIĄZANIA KTÓRE <br />
            <span className="text-[#F24B4B]">DZIAŁAJĄ</span>
            <br />
            W PRAKTYCE
          </h2>
          <p className="text-sm text-white/60 font-body leading-relaxed">
            Nazywam się Damian Hajdukiewicz i jestem właścicielem firmy Deiha. Jak pracuję? Do projektów dobieram sprawdzony
            zespół 1-3 osób. Buduję sklepy, aplikacje i backendy
            od ponad 10 lat — bez agencyjnego narzutu i zbędnych
            pośredników. Wybierając mnie, zawsze rozmawiasz z osobą, która pisze kod.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-0.5 bg-white/10 mt-4">
            {stats.map((s) => (
              <div key={s.value} className="bg-[#F24B4B] p-6 flex flex-col gap-1">
                <span className="font-heading text-4xl text-white">{s.value}</span>
                <span className="text-xs text-white/80 font-body tracking-widest leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right – code editor mockup */}
        <div className="flex flex-col gap-4">
          <CodeEditorMockup />
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#180E59] h-20 flex items-center justify-center border border-white/10">
              <span className="text-white/20 font-body text-xs tracking-widest">PHP / LARAVEL</span>
            </div>
            <div className="bg-[#3711BF]/20 h-20 flex items-center justify-center border border-[#3711BF]/30">
              <span className="text-white/30 font-body text-xs tracking-widest">NEXT.JS / REACT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
