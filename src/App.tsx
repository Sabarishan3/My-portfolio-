import {useCallback, useRef, useState} from 'react';
import {
  bio,
  certifications,
  education,
  faces,
  interests,
  languages,
  nav,
  person,
  projects,
  skillGroups,
  stack,
} from './content';
import {FaceCanvas, type Mood} from './face/FaceCanvas';
import {useFitHeadline, useTheme} from './hooks';

const DISC = '#c25036';

function Header({dark, onToggle}: {dark: boolean; onToggle: () => void}) {
  return (
    <header className="relative z-40 flex items-center justify-between gap-4 px-[clamp(16px,2.4vw,36px)] pt-[clamp(14px,2.4vh,24px)]">
      <a
        href="#"
        aria-label={`${person.fullName} — home`}
        className="flex items-center gap-2.5 font-display text-[15px] font-bold tracking-[-0.01em]"
      >
        <span className="relative size-8 overflow-hidden rounded-full bg-disc">
          <img
            src={faces.base.src}
            alt=""
            className="absolute top-[-41%] left-[-50%] w-[200%] max-w-none"
          />
        </span>
        <span className="hidden min-[380px]:inline">{person.handle}</span>
      </a>
      <nav aria-label="Main" className="flex items-center gap-1.5">
        {nav.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            className={`rounded-full px-3.5 py-2 text-ui font-semibold uppercase transition-colors ${
              i === 0 ? 'bg-ink text-page' : 'hover:bg-line'
            }`}
          >
            {l.label}
          </a>
        ))}
        <button
          type="button"
          onClick={onToggle}
          aria-pressed={dark}
          aria-label="Dark mode"
          className="ml-2 flex h-7 w-12 items-center rounded-full bg-sun p-1"
        >
          <span
            className={`size-5 rounded-full bg-ink transition-transform duration-300 ${dark ? 'translate-x-5' : ''}`}
          />
        </button>
      </nav>
    </header>
  );
}

function SayHi() {
  return (
    <div className="w-full max-w-[380px] space-y-2.5">
      <p className="flex items-center justify-between text-micro font-medium uppercase text-mute">
        <span>Say hi</span>
        <span className="flex items-center gap-1.5 normal-case">
          <span className="size-1.5 rounded-full bg-[#3fa05c]" aria-hidden />
          Open to frontend roles
        </span>
      </p>
      <a
        href={`mailto:${person.email}`}
        className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-field px-4 py-3 transition-colors hover:border-ink"
      >
        <span className="min-w-0 truncate text-[14px] font-medium">{person.email}</span>
        <span className="text-ui uppercase text-mute transition-transform group-hover:translate-x-0.5" aria-hidden>
          →
        </span>
      </a>
      <div className="flex gap-2">
        <a
          href={person.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-full border border-line px-4 py-2.5 text-center text-ui font-semibold uppercase transition-colors hover:bg-line"
        >
          LinkedIn
        </a>
        <a
          href={`tel:${person.phoneHref}`}
          className="flex-1 rounded-full border border-line px-4 py-2.5 text-center text-ui font-semibold uppercase transition-colors hover:bg-line"
        >
          Call
        </a>
      </div>
    </div>
  );
}

function MoodMeter({mood}: {mood: Mood}) {
  const p = mood.patience;
  return (
    <div className="w-full max-w-[380px] space-y-3" aria-live="polite">
      <div className="flex items-baseline justify-between text-micro uppercase">
        <span className="text-mute">Current mood</span>
        <span className="font-display text-[15px] font-bold tracking-[-0.01em] normal-case">{faces[mood.face].mood}</span>
      </div>
      <div>
        <div className="mb-1.5 flex justify-between text-micro uppercase text-mute">
          <span>Patience</span>
          <span className="tabular-nums">{p}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full transition-[width] duration-150"
            style={{width: `${p}%`, background: `color-mix(in oklab, var(--disc) ${p}%, #e8412c)`}}
          />
        </div>
      </div>
    </div>
  );
}

function SectionHead({kicker, title, note}: {kicker: string; title: string; note?: string}) {
  return (
    <div className="mb-[clamp(26px,4vh,46px)] flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-micro font-medium uppercase text-mute">{kicker}</p>
        <h2 className="mt-2 font-display text-[clamp(30px,4.6vw,64px)] leading-[0.95] font-black tracking-[-0.035em]">
          {title}
        </h2>
      </div>
      {note && <p className="max-w-[40ch] text-lede text-mute">{note}</p>}
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="scroll-mt-6 border-t border-line px-[clamp(16px,2.4vw,36px)] py-[clamp(52px,9vh,104px)] text-left">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead
          kicker="01 — Selected work"
          title="Things I’ve built"
          note="Dashboards, products and experiments — mostly React on the surface, Python and data behind it."
        />
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2">
          {projects.map((p, i) => (
            <article key={p.title} className="group bg-page p-6 transition-colors hover:bg-field md:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-micro font-medium uppercase text-mute tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-micro font-medium uppercase text-mute tabular-nums">{p.year}</span>
              </div>
              <h3 className="mt-6 font-display text-[clamp(22px,2.2vw,32px)] font-bold tracking-[-0.02em]">
                {p.title}
              </h3>
              <p className="mt-1 text-micro font-medium uppercase text-disc">{p.tech}</p>
              <p className="mt-4 max-w-[48ch] text-lede text-mute">{p.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CV() {
  return (
    <section id="cv" className="scroll-mt-6 border-t border-line px-[clamp(16px,2.4vw,36px)] py-[clamp(52px,9vh,104px)] text-left">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead
          kicker="02 — CV"
          title="Where I’ve been"
          note="A data-science foundation, an electronics degree, and a frontend toolkit — each one shapes how I build."
        />

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <h3 className="text-micro font-medium uppercase text-mute">Education</h3>
            <div className="mt-4 rounded-2xl border border-line p-5">
              <p className="font-display text-[17px] font-bold leading-snug tracking-[-0.01em]">{education.degree}</p>
              <p className="mt-1 text-lede text-mute">
                {education.school} · {education.place}
              </p>
              <p className="mt-2 text-micro font-medium uppercase text-mute tabular-nums">
                {education.dates} · {education.detail}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-micro font-medium uppercase text-mute">Certifications</h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                  <span>
                    <span className="block text-[14px] font-medium">{c.name}</span>
                    <span className="block text-micro text-mute">{c.org}</span>
                  </span>
                  <span className="text-micro font-medium uppercase text-mute tabular-nums">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 xl:col-span-1">
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-1 xl:gap-9">
              <div>
                <h3 className="text-micro font-medium uppercase text-mute">Languages</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {languages.map((l) => (
                    <li key={l} className="rounded-full border border-line px-2.5 py-1 text-micro text-mute">
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-micro font-medium uppercase text-mute">Interests</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {interests.map((l) => (
                    <li key={l} className="rounded-full border border-line px-2.5 py-1 text-micro text-mute">
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-micro font-medium uppercase text-mute">Skills</h3>
          <div className="mt-4 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-6">
            {skillGroups.map((g, i) => {
              const span = i < 3 ? 'md:col-span-2' : 'md:col-span-3';
              return (
                <div key={g.label} className={`bg-page p-5 ${span}`}>
                  <p className="text-ui font-semibold uppercase">{g.label}</p>
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {g.items.map((it) => (
                      <li key={it} className="rounded-full bg-field px-2.5 py-1 text-micro text-mute">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [dark, toggle] = useTheme();
  const title = useFitHeadline<HTMLHeadingElement>();
  const stageRef = useRef<HTMLDivElement>(null);
  const [mood, setMood] = useState<Mood>({face: 'base', patience: 100, pulls: 0});
  const onMood = useCallback((m: Mood) => setMood(m), []);

  return (
    <div className="flex min-h-[100svh] flex-col bg-page text-ink">
      <Header dark={dark} onToggle={toggle} />

      <main className="relative isolate flex flex-1 flex-col px-[clamp(16px,2.4vw,36px)] pt-[clamp(16px,3vh,32px)] text-center">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-3 text-left text-micro font-medium uppercase text-mute">
          <span>{person.role}</span>
          <span>{person.location}</span>
        </div>

        <h1 ref={title} className="headline relative z-0 mt-[clamp(14px,3vh,30px)] inline-block text-[14.2vw] md:whitespace-nowrap">
          <span className="block md:inline">Hey, I’m </span>
          <span className="marker">{person.name}</span>
        </h1>

        <div className="relative grid flex-1 grid-cols-1 items-end gap-x-8 gap-y-8 pt-[clamp(12px,2vh,22px)] text-left md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <div ref={stageRef} className="stage relative mx-auto aspect-square w-[min(100%,580px)] md:col-span-2 xl:order-2 xl:col-span-1 xl:w-[min(46vw,78svh)]">
            <p
              className={`hint absolute top-[24%] right-[-2%] hidden rotate-6 font-serif text-[clamp(17px,1.5vw,22px)] italic md:block md:right-[-8%] ${
                mood.pulls ? 'translate-y-2 opacity-0' : ''
              }`}
            >
              pull my face
              <svg viewBox="0 0 60 40" className="ml-6 block h-8 w-12 -scale-x-100" fill="none" aria-hidden>
                <path d="M4 4c18 2 34 12 44 30" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M40 31l8 4 1-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </p>
          </div>

          <div className="relative z-10 max-w-[380px] space-y-3 pb-[clamp(20px,5vh,48px)] text-lede xl:order-1">
            {bio.map((b, i) => (
              <p key={i} className={i === 0 ? 'font-display text-[1.25em] font-bold tracking-[-0.015em]' : 'text-mute'}>
                {b}
              </p>
            ))}
          </div>

          <div className="relative z-10 flex min-w-0 flex-col gap-7 pb-[clamp(20px,5vh,48px)] md:w-full md:max-w-[380px] md:justify-self-end xl:order-3 xl:items-end">
            <MoodMeter mood={mood} />
            <SayHi />
          </div>
        </div>

        <FaceCanvas stageRef={stageRef} discColor={DISC} onMood={onMood} />
      </main>

      <Work />
      <CV />

      <footer className="border-t border-line px-[clamp(16px,2.4vw,36px)] py-[clamp(40px,7vh,72px)] text-left">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <p className="text-micro font-medium uppercase text-mute">Say hi</p>
              <a
                href={`mailto:${person.email}`}
                className="mt-2 block font-display text-[clamp(22px,3.4vw,52px)] font-black tracking-[-0.03em] break-words transition-colors hover:text-disc"
              >
                {person.email.split('@')[0]}<wbr />@{person.email.split('@')[1]}
              </a>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-lede text-mute">
                <a href={person.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
                  {person.linkedinLabel}
                </a>
                <a href={`tel:${person.phoneHref}`} className="transition-colors hover:text-ink">
                  {person.phone}
                </a>
              </div>
              <p className="mt-1 text-micro font-medium uppercase text-mute">{person.location}</p>
            </div>
            <p className="max-w-[300px] text-lede text-mute">
              Currently in Bengaluru — open to frontend, data and AI-workflow roles.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-line pt-5 text-mute">
            <span className="text-micro font-medium uppercase">Built with</span>
            {stack.map((s) => (
              <span key={s.name} className={`text-wordmark ${s.font}`}>
                {s.name}
              </span>
            ))}
          </div>

          <p className="mt-6 text-micro font-medium uppercase text-mute">
            © {new Date().getFullYear()} {person.fullName} · Bengaluru, IN
          </p>
        </div>
      </footer>
    </div>
  );
}
