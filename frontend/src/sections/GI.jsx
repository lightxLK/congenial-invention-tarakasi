import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE, Reveal, SectionHead, SourceNote } from '../components/Shared';
import { GI_ROWS } from '../content';

export default function GI() {
  const [open, setOpen] = useState(0);

  return (
    <section id="gi" className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-28" data-testid="section-gi">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHead num="09" kicker="Recognition" title="A Name Protected by Place" />
            <Reveal>
              <p className="max-w-sm text-sm leading-relaxed text-silverd md:text-base md:leading-[1.7]">
                In March 2024, the name &lsquo;Cuttack Rupa Tarakasi&rsquo; stopped being only a description and became, in law, a place. <SourceNote keys={['drishti']} />
              </p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal className="flex justify-center lg:justify-start">
            <div className="flex flex-col items-center gap-5">
              <img
                src="/images/gi-seal.png"
                alt="Cuttack Rupa Tarakasi Geographical Indication seal, 15 March 2024"
                className="h-56 w-56 object-contain md:h-64 md:w-64"
                data-testid="gi-seal"
              />
              <p className="font-micro text-[10px] uppercase tracking-[0.16em] text-silverm">Typographic marker, not an official emblem</p>
            </div>
          </Reveal>

          <div className="mt-14 border-t border-rule">
            {GI_ROWS.map((r, i) => {
              const on = open === i;
              return (
                <div key={r.q} className="border-b border-rule">
                  <button
                    onClick={() => setOpen(on ? -1 : i)}
                    data-testid={`gi-row-${i}`}
                    aria-expanded={on}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className={`font-display text-xl font-light transition-colors duration-300 md:text-2xl ${on ? 'text-accent' : 'text-ink'}`}>{r.q}</span>
                    <motion.span
                      className="relative block h-4 w-4 shrink-0"
                      animate={{ rotate: on ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      aria-hidden="true"
                    >
                      <span className="absolute left-0 top-1/2 h-px w-full bg-silverd" />
                      <span className="absolute left-1/2 top-0 h-full w-px bg-silverd" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-7 text-sm leading-relaxed text-silverd md:text-base md:leading-[1.7]">
                          {r.a} <SourceNote keys={r.sources} />
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
