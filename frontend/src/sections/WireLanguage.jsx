import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE, Loupe, Ph, Reveal, SectionHead, SourceNote } from '../components/Shared';
import { MOTIFS } from '../content';

const MOTIF_IMAGES = {
  Spiral: '/images/wire-motif-spiral.png',
  Curl: '/images/wire-motif-curl.png',
  Creeper: '/images/wire-motif-creeper.png',
  'Jaali lattice': '/images/wire-motif-jaali.png',
  Circle: '/images/wire-motif-circle.png',
  Dot: '/images/wire-motif-dot.png',
};

export default function WireLanguage() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="motifs" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-40" data-testid="section-motifs">
      <SectionHead num="04" kicker="Motifs" title="A Language of Wire" />

      <Reveal>
        <p className="max-w-[680px] text-base leading-relaxed text-silverd md:text-lg md:leading-[1.7]">
          Gauge varies; the vocabulary does not. Across the craft, an estimated ninety types of wire design exist: spirals, curls, creepers, jaali-like lattices, the alphabet from which every motif is built. <SourceNote keys={['virasat']} />
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-16 font-display font-light leading-[1.05] tracking-tight text-ink md:mt-24" style={{ fontSize: 'clamp(2.6rem, 7vw, 6.5rem)' }}>
          Ninety ways<br /><span className="italic text-silverd">to bend a line.</span>
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-2 gap-5 md:mt-24 md:grid-cols-3 md:gap-8">
        {MOTIFS.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.05}>
            <button
              onClick={() => setOpen(m)}
              data-testid={`motif-tile-${m.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group block w-full text-left"
            >
              <div className="transition-[filter] duration-300 group-hover:brightness-[1.04]">
                <Ph
                  label={`MACRO: ${m.name.toLowerCase()} wire pattern`}
                  ratio="aspect-square"
                  src={MOTIF_IMAGES[m.name]}
                  alt={`Tarakasi ${m.name.toLowerCase()} wire pattern, macro`}
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="font-display text-lg font-light text-ink md:text-xl">{m.name}</span>
                <span className="font-micro text-[10px] tracking-[0.2em] text-silverm">{String(i + 1).padStart(2, '0')}</span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={() => setOpen(null)}
            data-testid="motif-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={`Wire pattern: ${open.name}`}
          >
            <motion.div
              className="w-full max-w-2xl"
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-micro text-[10px] uppercase tracking-[0.24em] text-silverm">Wire pattern</p>
              <h3 className="mt-2 font-display text-4xl font-light italic text-paper md:text-5xl">{open.name}</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-silverl">{open.note} <SourceNote keys={open.sources} dark /></p>
              <div className="mt-8">
                <Loupe
                  dark
                  fit="contain"
                  ratio="aspect-square"
                  src={MOTIF_IMAGES[open.name]}
                  alt={`Tarakasi ${open.name.toLowerCase()} wire pattern, macro`}
                  label={`Move to inspect: ${open.name.toLowerCase()} macro`}
                />
              </div>
              <button
                onClick={() => setOpen(null)}
                data-testid="motif-overlay-close"
                className="mt-6 border border-silverd px-5 py-2.5 font-micro text-[11px] uppercase tracking-[0.2em] text-silverl transition-colors duration-300 hover:border-paper hover:text-paper"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
