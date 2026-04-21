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

function classNames(...v: Array<string | false | undefined>) {
  return v.filter(Boolean).join(' ')
}

function App() {
  return (
    <div className="min-h-screen bg-[#C9967A] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#C9967A]/80 backdrop-blur">
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
                A cozy, cage-free stay for your cats—just like home ❤️
                <br />
                <br />
                Our cat boarding is set in a peaceful 2BHK space where your cats
                are free to relax, explore, and play without the stress of cages.
                We have two separate rooms: one with extra amenities for a more
                premium stay, and another comfortable space for regular boarding.
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
                    ₹400–₹700 / night
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
                      Cat boarding rooms • Gentle care
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    { k: 'Sanitized rooms', v: 'Daily cleaning & fresh setup' },
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Calm, cat-friendly rooms',
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

          <div className="mt-10">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              What your cat gets at The Meow Manor
            </h2>
            <p className="mt-2 max-w-3xl text-slate-700">
              A thoughtfully designed stay—focused on comfort, hygiene and
              low-stress handling.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm md:col-span-2">
              <div className="text-sm font-semibold text-slate-950">
                Feeding &amp; personalized care
              </div>
              <div className="mt-2 space-y-3 text-sm leading-relaxed text-slate-700">
                <p>
                  We provide structured and personalized feeding care based on
                  each cat’s established meal routine. Owners are encouraged to
                  share detailed feeding schedules, portion guidelines, and
                  dietary preferences to ensure continuity and comfort.
                </p>
                <p>
                  Homemade meals are available upon request, and we accommodate
                  customized diets, including special nutritional requirements
                  and medication administration.
                </p>
                <p className="rounded-2xl border border-dashed border-black/20 bg-white/60 p-4 text-xs text-slate-600">
                  Disclaimer: Any additional food items, specialty diets, or
                  ingredients procured on behalf of the owner will be billed
                  separately and are not included in the standard boarding fee.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-950">
                Boarding requirements
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  'Vaccinations must be up to date',
                  'Cats must be dewormed',
                  'Tick/Flea treatment must be up to date',
                  'Cats should be healthy and fit for boarding',
                  'Owners must inform us of any medical conditions or special care needs',
                  'Full disclosure of medical history and special care instructions',
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-rose-400" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
                Your cat’s comfort, safety, and happiness are our top priorities.
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-rose-200/70 via-amber-100/70 to-white p-6 shadow-sm md:col-span-3">
              <div className="text-sm font-semibold text-slate-950">
                Say hello to our brand ambassadors—Loki &amp; Veera 🐱✨
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-700">
                These two brothers run the house (we just manage it 😄)
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-3xl border border-black/10 bg-white/70 p-5">
                  <div className="text-sm font-semibold text-slate-950">
                    🐾 Loki
                  </div>
                  <div className="mt-1 text-sm text-slate-700">
                    the mischievous cuddle buddy
                  </div>
                </div>
                <div className="rounded-3xl border border-black/10 bg-white/70 p-5">
                  <div className="text-sm font-semibold text-slate-950">
                    🐾 Veera
                  </div>
                  <div className="mt-1 text-sm text-slate-700">
                    the sweet, calm explorer
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm leading-relaxed text-slate-700">
                They make sure every guest cat feels welcome, comfortable, and
                never lonely. From playtime zoomies to chill nap vibes—they set
                the mood here 💛
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-4 pb-14">
          <div className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Pricing
                </h2>
                <p className="mt-2 max-w-3xl text-slate-700">
                  Clear stay plans, day care options, and meal plans—choose what
                  suits your cat best.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Request availability
              </a>
            </div>

            <div className="mt-7 rounded-3xl border border-rose-200/70 bg-gradient-to-br from-rose-100/80 via-amber-100/60 to-white p-6">
              <div className="text-sm font-semibold text-slate-950">
                First Day Trial – ₹100 off
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  'Only for new customers',
                  'Valid for first booking only',
                  'Meals charged separately (no discount on food)',
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-rose-400" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-black/10 bg-white/70 p-6">
                <div className="text-sm font-semibold text-slate-950">
                  Non‑AC Room
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  ₹399/night
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  {['Cage-free stay', 'Standard room'].map((x) => (
                    <div key={x} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-2 w-2 rounded-full bg-rose-400" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white/70 p-6">
                <div className="text-sm font-semibold text-slate-950">
                  AC Room Upgrade
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  +₹50/night
                </div>
                <div className="mt-2 text-sm text-slate-700">
                  Add on any stay plan.
                </div>
                <div className="mt-4 rounded-2xl border border-dashed border-black/20 bg-white/60 p-4 text-xs text-slate-600">
                  Upgrade is subject to availability.
                </div>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white/70 p-6">
                <div className="text-sm font-semibold text-slate-950">
                  🌞 Day Care (Per Day)
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  ₹299/day
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  {[
                    'Up to 8–10 hours stay',
                    'Playtime & supervision',
                    'Litter access',
                  ].map((x) => (
                    <div key={x} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-2 w-2 rounded-full bg-rose-400" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-slate-600">
                  Meals: add based on meal plan below.
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-3xl border border-black/10 bg-white/60 p-6">
              <div className="text-sm font-semibold text-slate-950">🍽️ Meal Plans</div>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-black/10 bg-white/70 p-5">
                  <div className="text-sm font-semibold text-slate-950">
                    🥣 Basic Meal Plan – ₹119/day
                  </div>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    <li>Homemade wet food + Grain Zero dry food</li>
                    <li>OR Felix wet food + Grain Zero dry food</li>
                    <li className="text-slate-600">
                      Treat: Grain Zero creamy treats
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-black/10 bg-white/70 p-5">
                  <div className="text-sm font-semibold text-slate-950">
                    🥣 Mid Meal Plan – ₹189/day
                  </div>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    <li>Smlyo wet food + Sheba dry food / Grain Zero dry food</li>
                    <li>OR Sheba wet food + Sheba dry food / Grain Zero dry food</li>
                    <li className="text-slate-600">
                      Treat: Temptations creamy treat
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-black/10 bg-white/70 p-5">
                  <div className="text-sm font-semibold text-slate-950">
                    🥣 Premium Meal Plan – ₹219/day
                  </div>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    <li>Royal Canin wet food + N&amp;D Prime dry food</li>
                    <li className="text-slate-600">Treats: Churu creamy treats</li>
                  </ul>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-black/10 bg-white/70 p-5">
                <div className="text-sm font-semibold text-slate-950">
                  🍽️ Meal Customization
                </div>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  <li>
                    Owners can customize meals based on their cat’s preferences
                  </li>
                  <li>
                    Special diets, homemade variations, and medication mixing
                    supported
                  </li>
                </ul>
              </div>

              <div className="mt-4 rounded-2xl border border-black/10 bg-white/70 p-5">
                <div className="text-sm font-semibold text-slate-950">
                  🥣 Special Breed Care Plan – ₹249/day
                </div>
                <div className="mt-2 text-sm text-slate-700">
                  Suitable for Persian &amp; special breed cats.
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {[
                    'Breed-specific nutrition (e.g. Royal Canin Persian Adult)',
                    'Premium wet food (based on availability)',
                    'N&D Prime / equivalent high-quality dry food',
                    'Supports coat health, digestion & picky eaters',
                    'Customized feeding as per owner instructions',
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-2 w-2 rounded-full bg-rose-400" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-2xl border border-black/10 bg-white/70 p-5">
                <div className="text-sm font-semibold text-slate-950">
                  📌 Notes
                </div>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  {[
                    'Recommended for long-haired & sensitive breeds like Persian cat',
                    'Additional charges may apply if specific products need to be specially purchased',
                    'If cat parents provide their own food, meal charges will be reduced/waived accordingly',
                    'Any special food or ingredients purchased by us on request will be charged separately',
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-2 w-2 rounded-full bg-rose-400" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
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

        <section id="terms" className="mx-auto max-w-6xl px-4 pb-14">
          <div className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Cat Boarding – Terms &amp; Conditions (Short Version)
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              By booking with us, you agree to the following:
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  t: '1. Vaccination & Health',
                  d: 'All cats must be healthy, vaccinated, dewormed, and free from fleas/ticks. We reserve the right to refuse admission if these conditions are not met.',
                },
                {
                  t: '2. Food & Diet',
                  d: 'Owners may provide their cat’s food. If not provided, meals will be charged as per our pricing. Special diet instructions must be clearly mentioned.',
                },
                {
                  t: '3. Behavior Disclosure',
                  d: 'Owners must inform us of any aggression, anxiety, or special behavior. We may decline cats that pose a risk to themselves or others.',
                },
                {
                  t: '4. Emergency Care',
                  d: 'In case of illness or emergency, we will contact you immediately. If unreachable, we may seek veterinary care. All medical costs are the owner’s responsibility.',
                },
                {
                  t: '5. Liability',
                  d: 'We take utmost care of all cats. However, we are not liable for pre-existing health conditions, stress-related illness, or minor injuries due to normal cat behavior.',
                },
                {
                  t: '6. Check-in / Check-out',
                  d: 'Boarding is charged per day. Late pickups may incur additional charges.',
                },
                {
                  t: '7. Cancellation Policy',
                  d: 'Last-minute cancellations or no-shows may be subject to charges.',
                },
                {
                  t: '8. Owner Consent',
                  d: 'By booking our services, you confirm that all information provided is accurate and you agree to our full boarding policies.',
                },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-3xl border border-black/10 bg-white/70 p-6"
                >
                  <div className="text-sm font-semibold text-slate-950">{x.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">
                    {x.d}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-black/20 bg-white/60 p-4 text-sm text-slate-700">
              📌 Full agreement and detailed terms are shared at the time of
              booking.
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
                  window.location.href = `mailto:themeowmanor.tmm26@gmail.com?subject=${subject}&body=${body}`
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
                      placeholder="+91 7795277272"
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
                    themeowmanor.tmm26@gmail.com
                  </div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3">
                  <div className="text-xs text-slate-500">Phone</div>
                  <div className="font-semibold text-slate-950">
                    +91 7795277272
                  </div>
                </div>
                <a
                  className="block rounded-2xl border border-black/10 bg-white/70 px-4 py-3 transition hover:bg-white"
                  href="https://www.google.com/maps/search/?api=1&query=Flat%20no.%20309%2C%203rd%20floor%2C%20Sai%20Indraprastha%20Apartment%2C%20Rachenahalli%20Main%20Rd%2C%20Sinthan%20Nagar%2C%20Thanisandra%2C%20Bengaluru%2C%20Karnataka%20560077"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-xs text-slate-500">Location</div>
                  <div className="font-semibold text-slate-950">
                    Flat no.309, 3rd floor, Sai Indraprastha Apartment
                  </div>
                  <div className="mt-1 text-xs text-slate-600">
                    Rachenahalli Main Rd, Sinthan Nagar, Thanisandra, Bengaluru,
                    Karnataka 560077
                  </div>
                </a>
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

      <a
        href="https://wa.me/917795277272?text=Hi%2C%20Wanted%20to%20enquire%20on%20the%20cat%20boarding%20services%20you%20provide%3F"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.2c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.84 1.05-.16.18-.31.2-.58.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.98-.22-.53-.44-.45-.6-.46l-.51-.01c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.95 2.58 1.09 2.76.13.18 1.87 2.85 4.53 3.99.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.58-.65 1.8-1.28.22-.63.22-1.17.16-1.28-.07-.11-.24-.18-.51-.31z" />
          <path d="M26.66 5.34C23.86 2.54 20.14 1 16.18 1 8.1 1 1.54 7.56 1.54 15.64c0 2.58.67 5.1 1.95 7.31L1.41 31l8.25-2.06c2.13 1.16 4.52 1.77 6.93 1.77h.01c8.08 0 14.64-6.56 14.64-14.64 0-3.96-1.54-7.68-4.38-10.73zM16.6 28.25h-.01c-2.19 0-4.34-.59-6.21-1.7l-.45-.27-4.9 1.23 1.31-4.78-.29-.49c-1.21-2.04-1.85-4.38-1.85-6.78C4.2 8.96 9.47 3.69 16.18 3.69c3.28 0 6.37 1.28 8.69 3.6 2.32 2.32 3.6 5.41 3.6 8.69 0 6.71-5.26 12.27-11.87 12.27z" />
        </svg>
        WhatsApp
      </a>
    </div>
  )
}

export default App
