import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE, Reveal, SectionHead, SourceNote } from '../components/Shared';
import { ODISSI_FORMS } from '../content';

export default function Odissi() {
  const [active, setActive] = useState(null);

  return (
    <section id="culture" className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-28" data-testid="section-odissi">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHead num="06" kicker="In Culture: Odissi" title="Silver in Motion" />
            <Reveal>
              <p className="max-w-md text-sm leading-relaxed text-silverd md:text-base md:leading-[1.7]">
                Tarakasi jewellery forms the traditional ornament set of Odissi dance costume, worn from head to waist. Natural, uncut stones are sometimes set within silver-and-gold work for these pieces. <SourceNote keys={['wiki']} />
              </p>
              <p className="mt-5 max-w-md font-micro text-[10px] uppercase leading-relaxed tracking-[0.18em] text-silverm">
                Object labels: tap a marker, as you would read an exhibition case
              </p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <div
              className="relative aspect-[1536/2752]"
              style={{ backgroundColor: '#F3F0E9' }}
              role="img"
              aria-label="Odissi ornament set, photograph to be supplied; markers indicate the eight named ornament forms from head to feet"
              data-testid="odissi-panel"
            >
              <div
                className="absolute inset-x-0 bottom-0 h-24 opacity-40"
                style={{ background: 'radial-gradient(ellipse 42% 100% at center, rgba(23,23,23,0.5), transparent 70%)', filter: 'blur(14px)' }}
                aria-hidden="true"
              />
              <img
                src="/images/odissi-ornament-set.png"
                alt="Odissi dancer wearing the full traditional Tarakasi ornament set, head to waist"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {ODISSI_FORMS.map((f, i) => {
                const on = active === i;
                return (
                  <div key={f.name} className="absolute" style={{ left: `${f.x}%`, top: `${f.y}%` }}>
                    <button
                      onClick={() => setActive(on ? null : i)}
                      data-testid={`odissi-marker-${f.name.toLowerCase().replace(/[\s/]+/g, '-')}`}
                      aria-label={`${f.name}, ${f.zone}`}
                      aria-expanded={on}
                      className="flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                    >
                      <motion.span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors duration-300 ${on ? 'border-accent bg-accent/10' : 'border-silverd bg-paper'}`}
                        animate={{ opacity: [1, 0.25, 1] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
                      >
                        <span className={`h-1 w-1 rounded-full transition-colors duration-300 ${on ? 'bg-accent' : 'bg-silverd'}`} />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {on && (
                        <motion.div
                          className={`absolute z-10 w-52 border border-rule bg-paper p-4 shadow-sm ${f.x > 50 ? 'right-8' : 'left-8'} top-0`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.3, ease: EASE }}
                          data-testid="odissi-label"
                        >
                          <p className="font-display text-lg font-light italic text-ink">{f.name}</p>
                          <p className="mt-1 font-micro text-[10px] uppercase tracking-[0.18em] text-silverd">{f.zone}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
