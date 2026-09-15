import { motion } from 'framer-motion';
import { EASE, MaskLine, Ph, Reveal, SectionHead, SourceNote, placeholderUrl, scrollToId } from '../components/Shared';
import { CHALLENGES, SOURCES } from '../content';

function Challenge() {
  return (
    <section id="challenge" className="bg-charcoal py-24 text-silverl md:py-40" data-testid="section-challenge">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHead dark num="10" kicker="The Present Tense" title="The Craft Must Continue" />
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ol>
              {CHALLENGES.map((c, i) => (
                <li key={i} className="border-t border-silverd/30 py-7 first:border-t-0 first:pt-0">
                  <Reveal>
                    <div className="flex gap-6">
                      <span className="font-micro text-xs tracking-[0.2em] text-silverd">{String(i + 1).padStart(2, '0')}</span>
                      <p className={`max-w-xl text-sm leading-relaxed md:text-base md:leading-[1.7] ${c.closing ? 'text-paper' : 'text-silverm'}`}>
                        {c.text} <SourceNote keys={c.sources} dark />
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-8 lg:col-span-4 lg:col-start-9">
            <Reveal><Ph dark label="WORKSHOP — tools at rest, window light" meta="Photograph to be supplied · no posed portraits" ratio="aspect-[4/5]" /></Reveal>
            <Reveal delay={0.08}><Ph dark label="INTERIOR — small workshop behind a showroom" meta="Photograph to be supplied" ratio="aspect-[4/3]" /></Reveal>
          </div>
        </div>
        <Reveal className="mt-20 border-t border-silverd/30 pt-10">
          <p className="max-w-2xl font-display text-2xl font-light leading-snug text-paper md:text-3xl">
            The last word belongs to continuity: new designers, new stages, new hands learning the wire.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  const seq = 'Tara — wire · Kasi — design · Cuttack Rupa Tarakasi · Geographical Indication · 15 March 2024 · The Silver City of Odisha · ';
  return (
    <div className="overflow-hidden border-b border-rule bg-paper py-7" aria-hidden="true" data-testid="marquee">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {[0, 1].map((k) => (
          <span key={k} className="pr-4 font-display text-3xl font-light italic tracking-tight text-silverm md:text-5xl">{seq}</span>
        ))}
      </div>
    </div>
  );
}

function Thread() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden" data-testid="section-closing">
      <motion.img
        src={placeholderUrl('closing-finished-piece — natural light', 'aspect-[16/9]', 1600)}
        alt="Photograph to be supplied: one slowly moving macro shot of a finished piece catching natural light"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1.02 }}
        viewport={{ once: true }}
        transition={{ duration: 3.2, ease: EASE }}
      />
      <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-32 md:px-10">
        <MaskLine inView className="font-micro text-[11px] uppercase tracking-[0.24em] text-silverl">Closing</MaskLine>
        <h2 className="mt-6 font-display font-light leading-[1.02] tracking-tight text-paper" style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}>
          <MaskLine inView delay={0.1}>The Thread</MaskLine>
          <MaskLine inView delay={0.22} className="italic text-silverl">Continues</MaskLine>
        </h2>
        <Reveal delay={0.3}>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-silverl md:text-base">
            Pure silver, drawn finer than hair, bent by patient hands into a city&rsquo;s memory — and still being bent today.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => scrollToId('making')}
              data-testid="cta-explore-making"
              className="bg-paper px-7 py-3.5 font-micro text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-silverl"
            >
              Explore the making
            </button>
            <button
              onClick={() => scrollToId('sources')}
              data-testid="cta-read-sources"
              className="border border-silverl/60 px-7 py-3.5 font-micro text-[11px] uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:border-paper"
            >
              Read the sources
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Sources() {
  const keys = Object.keys(SOURCES);
  return (
    <section id="sources" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-40" data-testid="section-sources">
      <SectionHead num="11" kicker="Provenance" title="Sources &amp; Further Reading" />
      <Reveal>
        <p className="max-w-[680px] text-sm leading-relaxed text-silverd md:text-base md:leading-[1.7]">
          Every factual claim on this page carries its source. This bibliography is part of the exhibition, not a footnote to it.
        </p>
      </Reveal>
      <ol className="mt-14 border-t border-rule">
        {keys.map((k, i) => {
          const s = SOURCES[k];
          return (
            <li key={k} className="grid grid-cols-1 gap-3 border-b border-rule py-8 md:grid-cols-12 md:gap-6">
              <span className="font-micro text-xs tracking-[0.2em] text-accent md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
              <div className="md:col-span-4">
                <p className="font-display text-xl font-light text-ink md:text-2xl">{s.label}</p>
                <p className="mt-1 text-sm italic text-silverd">{s.title}</p>
              </div>
              <p className="text-sm leading-relaxed text-silverd md:col-span-5">{s.role}</p>
              <div className="md:col-span-2 md:text-right">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`source-link-${k}`}
                  className="font-micro text-[11px] uppercase tracking-[0.16em] text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  Visit source
                </a>
              </div>
            </li>
          );
        })}
      </ol>
      <Reveal className="mt-10 space-y-3">
        <p className="font-micro text-[11px] leading-relaxed tracking-wide text-silverm">All sources accessed July 2026.</p>
        <p className="max-w-2xl font-micro text-[11px] leading-relaxed tracking-wide text-silverm">
          Editorial note — the Vikaspedia / ASI page did not fully render during the design pass; its exact wording is to be re-verified by an editor against the live URL before launch.
        </p>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-rule bg-paper2/60" data-testid="footer">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-display text-2xl italic text-ink">Tarakasi</p>
          <p className="mt-2 max-w-sm font-micro text-[10px] uppercase leading-relaxed tracking-[0.16em] text-silverd">
            A digital exhibition · all editorial content drawn from the six cited sources
          </p>
        </div>
        <div className="space-y-2 md:text-right">
          <p className="font-micro text-[10px] uppercase leading-relaxed tracking-[0.16em] text-silverm">
            Stand-in textures: Bayu Prahara, Logan Voss, The Witch&rsquo;s House — Unsplash
          </p>
          <button
            onClick={() => scrollToId('top')}
            data-testid="back-to-top"
            className="font-micro text-[11px] uppercase tracking-[0.2em] text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default function Closing() {
  return (
    <>
      <Challenge />
      <Marquee />
      <Thread />
      <Sources />
      <Footer />
    </>
  );
}
