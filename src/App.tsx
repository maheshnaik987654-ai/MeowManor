import logo from './assets/meow-manor-logo.png'

type FaqItem = { q: string; a: string }

const faqs: FaqItem[] = [
  {
    q: 'What should I bring for my cat?',
    a: 'Bring food (if you prefer a specific brand), any medications, and a familiar item like a small blanket or toy. We provide bowls, litter, and cozy bedding.',
  },
  {
    q: 'Do you accept unvaccinated cats?',
    a: 'For everyone’s safety, we require core vaccinations and flea control. If you’re unsure, share your vet records and we’ll guide you.',
  },
  {
    q: 'Can I get updates during the stay?',
    a: 'Yes. We can share daily photo/video updates on request so you can relax while your cat settles in.',
  },
  {
    q: 'How do you handle shy or anxious cats?',
    a: 'We use gentle, low-stress handling and provide quiet zones, hiding spots, and slow introductions to routines—no forced interactions.',
  },
]

const interiorGallery = [
  {
    title: 'Bright & airy suites',
    note: 'Calm lighting, clean spaces, and cozy corners.',
    src: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Enrichment play areas',
    note: 'Climbing, scratching, and supervised exploration.',
    src: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Comfort-first details',
    note: 'Soft bedding, fresh air, and a peaceful vibe.',
    src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1400&q=80',
  },
]

function classNames(...v: Array<string | false | undefined>) {
  return v.filter(Boolean).join(' ')
}

function App() {
  return (
    <div className="min-h-screen bg-[#fbf6f2] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#fbf6f2]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo}
              alt="The Meow Manor logo"
              className="h-10 w-10 rounded-xl object-cover shadow-sm"
            />
            <div className="leading-tight">
              <div className="text-base font-semibold tracking-tight">
                The Meow Manor
              </div>
              <div className="text-xs text-slate-600">Cat Boarding</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a className="hover:text-slate-950" href="#benefits">
              Benefits
            </a>
            <a className="hover:text-slate-950" href="#interiors">
              Interiors
            </a>
            <a className="hover:text-slate-950" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-slate-950" href="#faq">
              FAQ
            </a>
            <a className="hover:text-slate-950" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Book a stay
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-b from-rose-200/60 via-amber-100/40 to-transparent blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
            <div>
              <p className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                Premium, calm & hygienic boarding for cats
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                A cozy holiday for your cat. Peace of mind for you.
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700">
                At <span className="font-semibold">The Meow Manor</span>, we
                provide a clean, quiet and enriching environment—designed for
                feline comfort. From gentle handling to daily routine care, we
                treat every guest like family.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                >
                  See pricing
                </a>
                <a
                  href="#benefits"
                  className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white"
                >
                  Explore benefits
                </a>
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-black/10 bg-white/60 p-4 shadow-sm md:grid-cols-3">
                <div>
                  <dt className="text-xs font-medium text-slate-600">Pricing</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-950">
                    ₹400–₹500 / night
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-slate-600">
                    Updates
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-950">
                    Photo/video on request
                  </dd>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <dt className="text-xs font-medium text-slate-600">
                    Environment
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-950">
                    Calm, clean, enrichment-focused
                  </dd>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt=""
                    className="h-12 w-12 rounded-2xl object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-slate-950">
                      The Meow Manor
                    </div>
                    <div className="text-xs text-slate-600">
                      Cat boarding suites • Gentle care
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    { k: 'Sanitized suites', v: 'Daily cleaning & fresh setup' },
                    { k: 'Routine care', v: 'Feeding, water, litter, meds' },
                    { k: 'Enrichment', v: 'Playtime, scratching, calm music' },
                    { k: 'Safety first', v: 'Secure spaces & monitoring' },
                  ].map((x) => (
                    <div
                      key={x.k}
                      className="flex items-start justify-between gap-4 rounded-2xl border border-black/10 bg-white/70 px-4 py-3"
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-950">
                          {x.k}
                        </div>
                        <div className="text-xs text-slate-600">{x.v}</div>
                      </div>
                      <div className="mt-1 h-2 w-2 rounded-full bg-rose-400" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-slate-900 px-4 py-3 text-white">
                  <div className="text-xs text-white/70">Best for</div>
                  <div className="text-sm font-semibold">
                    Weekend trips • Work travel • Family vacations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              What your cat gets at The Meow Manor
            </h2>
            <p className="max-w-2xl text-slate-700">
              A thoughtfully designed stay—focused on comfort, hygiene and
              low-stress handling.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Calm, cat-friendly suites',
                desc: 'Quiet zones, soft bedding, and hiding spots for security.',
              },
              {
                title: 'Cleanliness & hygiene',
                desc: 'Daily cleaning routines and fresh litter setup.',
              },
              {
                title: 'Routine feeding & care',
                desc: 'Feeding as per your schedule and fresh water always.',
              },
              {
                title: 'Medication support',
                desc: 'Administering meds as instructed (with owner notes).',
              },
              {
                title: 'Play & enrichment',
                desc: 'Scratchers, toys and supervised interaction time.',
              },
              {
                title: 'Updates for owners',
                desc: 'Photo/video updates available so you stay connected.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm"
              >
                <div className="text-base font-semibold text-slate-950">
                  {card.title}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="interiors" className="mx-auto max-w-6xl px-4 pb-14">
          <div className="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm md:p-10">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Interior inspiration
                </h2>
                <p className="mt-1 max-w-2xl text-slate-700">
                  A modern, warm aesthetic—easy to clean, calming for cats, and
                  comfortable for long stays.
                </p>
              </div>
              <div className="text-xs text-slate-500">
                Images via Unsplash for inspiration
              </div>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {interiorGallery.map((x) => (
                <figure
                  key={x.title}
                  className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"
                >
                  <img
                    src={x.src}
                    alt={x.title}
                    className="h-52 w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="p-4">
                    <div className="text-sm font-semibold text-slate-950">
                      {x.title}
                    </div>
                    <div className="mt-1 text-xs text-slate-600">{x.note}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-4 pb-14">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Simple pricing
              </h2>
              <p className="mt-2 text-slate-700">
                Transparent rates with premium care included.
              </p>

              <div className="mt-6 rounded-3xl bg-slate-900 p-6 text-white">
                <div className="text-xs text-white/70">Starting from</div>
                <div className="mt-1 text-3xl font-semibold tracking-tight">
                  ₹400–₹500
                </div>
                <div className="mt-1 text-sm text-white/80">
                  per night (or per day, depending on stay duration)
                </div>
                <a
                  href="#contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                >
                  Request availability
                </a>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {[
                  'Daily hygiene & suite refresh',
                  'Feeding and fresh water',
                  'Litter management',
                  'Enrichment & supervised play',
                  'Photo/video updates on request',
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-rose-400" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/60 p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-950">
                Add-ons (optional)
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Customize the stay based on your cat’s personality and needs.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  { t: 'Extra enrichment session', d: 'More play & interaction time' },
                  { t: 'Special diet handling', d: 'Measured portions & notes followed' },
                  { t: 'Medication support', d: 'Administer as per instructions' },
                  { t: 'Daily update package', d: 'Photo/video update every day' },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3"
                  >
                    <div className="text-sm font-semibold text-slate-950">
                      {x.t}
                    </div>
                    <div className="mt-1 text-xs text-slate-600">{x.d}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-dashed border-black/20 bg-white/60 p-4 text-sm text-slate-700">
                Final pricing can vary slightly based on stay length and care
                requirements.
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-4 pb-14">
          <div className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              FAQ
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {faqs.map((x) => (
                <div
                  key={x.q}
                  className="rounded-3xl border border-black/10 bg-white/70 p-6"
                >
                  <div className="text-sm font-semibold text-slate-950">
                    {x.q}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 pb-20">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Book a stay
              </h2>
              <p className="mt-2 text-slate-700">
                Share your dates and your cat’s routine—we’ll respond with
                availability and next steps.
              </p>

              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget as HTMLFormElement
                  const data = new FormData(form)
                  const name = String(data.get('name') ?? '')
                  const phone = String(data.get('phone') ?? '')
                  const dates = String(data.get('dates') ?? '')
                  const notes = String(data.get('notes') ?? '')
                  const subject = encodeURIComponent('Booking request — The Meow Manor')
                  const body = encodeURIComponent(
                    `Name: ${name}\nPhone: ${phone}\nDates: ${dates}\n\nNotes:\n${notes}\n`,
                  )
                  window.location.href = `mailto:themeowmanor@example.com?subject=${subject}&body=${body}`
                }}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-medium text-slate-700">
                      Your name
                    </span>
                    <input
                      name="name"
                      required
                      className="mt-1 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-rose-200 focus:ring-4"
                      placeholder="Full name"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-700">
                      Phone/WhatsApp
                    </span>
                    <input
                      name="phone"
                      className="mt-1 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-rose-200 focus:ring-4"
                      placeholder="+91 8520977320"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs font-medium text-slate-700">
                    Dates
                  </span>
                  <input
                    name="dates"
                    required
                    className="mt-1 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-rose-200 focus:ring-4"
                    placeholder="e.g., 20 Apr – 23 Apr"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-slate-700">
                    Notes (diet, meds, temperament)
                  </span>
                  <textarea
                    name="notes"
                    rows={4}
                    className="mt-1 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-rose-200 focus:ring-4"
                    placeholder="Anything we should know?"
                  />
                </label>

                <button
                  type="submit"
                  className={classNames(
                    'inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm',
                    'hover:bg-slate-800',
                  )}
                >
                  Send booking request
                </button>

                <p className="text-xs text-slate-500">
                  This opens your email app. Replace the email/phone in the code
                  with your real contact details.
                </p>
              </form>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/60 p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-950">
                Contact details
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3">
                  <div className="text-xs text-slate-500">Email</div>
                  <div className="font-semibold text-slate-950">
                    themeowmanor@example.com
                  </div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3">
                  <div className="text-xs text-slate-500">Phone</div>
                  <div className="font-semibold text-slate-950">
                    +91 8520977320
                  </div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3">
                  <div className="text-xs text-slate-500">Location</div>
                  <div className="font-semibold text-slate-950">
                    Your City, India
                  </div>
                  <div className="mt-1 text-xs text-slate-600">
                    Add your full address after you decide it.
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-3xl bg-gradient-to-br from-rose-200/70 via-amber-100/70 to-white p-6">
                <div className="text-sm font-semibold text-slate-950">
                  Professional care, a cozy vibe
                </div>
                <div className="mt-2 text-sm text-slate-700">
                  Designed for calm stays—ideal for shy cats and frequent
                  travelers.
                </div>
                <a
                  className="mt-4 inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white/90"
                  href="#pricing"
                >
                  View packages
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt=""
              className="h-9 w-9 rounded-xl object-cover"
            />
            <div className="text-sm font-semibold text-slate-950">
              The Meow Manor
            </div>
          </div>
          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} The Meow Manor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
