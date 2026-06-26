const CartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

const MobileIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
)

export default function Services() {
  return (
    <section id="uslugi" className="bg-[#070C26]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-0.5 bg-white/10">

          {/* SKLEPY INTERNETOWE */}
          <div className="bg-[#070C26] p-10 flex flex-col gap-4 group hover:bg-[#0d1235] transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs tracking-[0.2em] text-[#F24B4B] font-body mb-2 uppercase">01</p>
                <h3 className="font-heading text-2xl text-white">SKLEPY<br />INTERNETOWE</h3>
              </div>
              <span className="text-[#F24B4B] opacity-70 group-hover:opacity-100 transition-opacity">
                <CartIcon />
              </span>
            </div>
            <p className="text-sm text-white/50 font-body leading-relaxed">
              Wdrożenia e-commerce na zamówienie: WooCommerce lub customowy React/Next.js,
              integracje z płatnościami, magazynem i systemami ERP.
              Sklepy szybkie, stabilne i łatwe do zarządzania, w pełni dopasowane do potrzeb klienta.
            </p>
          </div>

          {/* APLIKACJE WEB / MOBILE */}
          <div className="bg-[#F24B4B] p-10 flex flex-col gap-4 group">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs tracking-[0.2em] text-white/70 font-body mb-2 uppercase">02</p>
                <h3 className="font-heading text-2xl text-white">APLIKACJE<br />WEB / MOBILE</h3>
              </div>
              <span className="text-white opacity-80">
                <MobileIcon />
              </span>
            </div>
            <p className="text-sm text-white/80 font-body leading-relaxed">
              Panele klienta, aplikacje SaaS i aplikacje mobilne
              w React Native. Od projektu UX do gotowego produktu
              z jasno określonym zakresem i harmonogramem.
            </p>
          </div>

          {/* BACKEND PHP / LARAVEL */}
          <div className="bg-[#3711BF] p-10 md:col-span-2 flex flex-col md:flex-row md:items-center gap-6 group hover:bg-[#2e0ea8] transition-colors">
            <div className="flex-1">
              <p className="text-xs tracking-[0.2em] text-white/50 font-body mb-2 uppercase">03</p>
              <h3 className="font-heading text-4xl md:text-5xl text-white">BACKEND PHP / LARAVEL</h3>
            </div>
            <div className="flex-1">
              <p className="text-sm text-white/70 font-body leading-relaxed">
                Solidne API, logika biznesowa i integracje z systemami
                zewnętrznymi. Laravel, REST API, kolejki i cron —
                budowane z myślą o utrzymaniu i skalowalnym dalszym rozwoju.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
