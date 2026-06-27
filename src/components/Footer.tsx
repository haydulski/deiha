const footerLinks = [
  { label: 'LinkedIn', href: 'https://pl.linkedin.com/in/damian-hajdukiewicz-it' },
]

export default function Footer() {
  return (
    <footer className="bg-blue border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-heading text-xl tracking-widest text-black">DEIHA</span>
          <span className="text-[10px] tracking-widest text-black font-body uppercase">
            &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-widest text-black hover:text-white font-body uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
