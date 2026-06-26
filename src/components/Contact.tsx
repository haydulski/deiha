import { useState, type FormEvent } from 'react'

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.4 2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const CertIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="M7 8h10M7 12h6" />
  </svg>
)

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

const contactInfo = [
  { icon: <MailIcon />, label: 'Email', value: 'kontakt@deiha.pl' },
  { icon: <PhoneIcon />, label: 'Telefon', value: '+48 796 176 358' },
  { icon: <CertIcon />, label: 'NIP', value: '9661776883' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      if (!res.ok) {
        throw new Error('Nie udało się wysłać wiadomości')
      }
      setSent(true)
    } catch {
      setError('Coś poszło nie tak. Spróbuj ponownie lub napisz maila bezpośrednio.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-transparent border border-white/20 hover:border-white/40 focus:border-[#3711BF] outline-none px-4 py-3 text-sm text-white font-body placeholder:text-white/30 transition-colors'

  return (
    <section id="kontakt" className="bg-[#070C26] py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs tracking-[0.3em] text-white/40 font-body uppercase mb-4">
              06 / Kontakt
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-white leading-tight">
              POROZMAWIAJMY O<br />
              <span className="text-[#F24B4B]">NOWYM PROJEKCIE</span>
            </h2>
          </div>
          <p className="text-sm text-white/60 font-body leading-relaxed">
            Masz projekt do wyceny lub inne pytanie? Napisz —
            odpiszę z informacją, czy mogę pomóc, zazwyczaj w ciągu 24 godzin.
          </p>

          <div className="flex flex-col gap-4">
            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-[#F24B4B] shrink-0
                 group-hover:scale-110 transition-all duration-300">
                  {c.icon}
                </div>
                <div>
                  <p className="text-[10px] tracking-widest text-white/30 font-body uppercase">{c.label}</p>
                  <p className="text-sm text-white font-body">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – form */}
        <div className="flex flex-col">
          <div className="border border-white/10 p-1">
            <div className="border border-white/10 px-4 py-2 mb-0">
              <p className="text-[10px] tracking-[0.3em] text-white/30 font-body text-center">
                [ SYSTEM INPUT FORM ]
              </p>
            </div>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <div className="w-12 h-12 border-2 border-[#F24B4B] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F24B4B" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-heading text-xl text-white tracking-wider">WIADOMOŚĆ WYSŁANA</p>
                <p className="text-xs text-white/40 font-body">Odpiszemy w ciągu 24h.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                  className="text-xs text-white/30 hover:text-white font-body tracking-widest underline mt-2 transition-colors"
                >
                  Wyślij kolejną
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
                <div>
                  <label className="text-[10px] tracking-widest text-white/40 font-body block mb-1.5">
                    * IMIĘ I NAZWISKO
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jan Kowalski"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest text-white/40 font-body block mb-1.5">
                    * EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jan@firma.pl"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest text-white/40 font-body block mb-1.5">
                    * WIADOMOŚĆ
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Opisz swój projekt..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border border-[#F24B4B] text-[#F24B4B] hover:bg-[#F24B4B] hover:text-white font-body font-bold text-sm tracking-widest py-4 transition-colors mt-2"
                >
                  {loading ? 'WYŚLIJ WIADOMOŚĆ [ENTER]' : 'WYŚLIJ WIADOMOŚĆ [ENTER]'}
                </button>
                {error && <p className="text-xs text-red-500 font-body">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
