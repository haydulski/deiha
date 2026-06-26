import { useState } from 'react'

const links = [
  { label: 'O mnie', href: '#o-nas' },
  { label: 'Usługi', href: '#uslugi' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070C26] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl tracking-widest text-white font-black">
          DEIHA
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-white/70 hover:text-white transition-colors tracking-wider font-body"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center gap-2 bg-[#F24B4B] hover:bg-[#d93a3a] text-white text-xs font-body font-bold tracking-widest px-5 py-2.5 transition-colors"
        >
          MAM PROJEKT
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#070C26] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white text-sm tracking-wider font-body"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center bg-[#F24B4B] text-white text-xs font-bold tracking-widest px-5 py-3 font-body"
          >
            ZACZNIJ PROJEKT
          </a>
        </div>
      )}
    </nav>
  )
}
