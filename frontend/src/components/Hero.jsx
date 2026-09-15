import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { EASE, MaskLine, scrollToId } from './Shared';

export default function Hero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 26]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -18]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden" data-testid="hero">
      <div className="mx-auto grid w-full max-w-[1440px] flex-1 grid-cols-1 gap-10 px-5 pb-10 pt-28 md:px-10 lg:grid-cols-12 lg:gap-6 lg:pt-32">
        <motion.div style={{ y: textY }} className="relative z-10 flex flex-col justify-center lg:col-span-7">
          <div className="mb-8 flex items-center gap-3">
            <motion.span
              className="h-px w-10 bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              style={{ transformOrigin: 'left' }}
              aria-hidden="true"
            />
            <MaskLine delay={0.2} className="font-micro text-[11px] uppercase tracking-[0.24em] text-silverd">
              Cuttack, Odisha — the Silver City
            </MaskLine>
          </div>

          <h1 className="font-display font-light leading-[0.95] tracking-[-0.02em] text-ink" style={{ fontSize: 'clamp(4.2rem, 11.5vw, 10.5rem)' }}>
            <MaskLine delay={0.35}>Tara</MaskLine>
            <MaskLine delay={0.5} className="pl-[0.9em] italic text-silverd">kasi</MaskLine>
          </h1>

          <div className="mt-10 max-w-md">
            <MaskLine delay={0.75} className="font-display text-xl font-light leading-snug text-ink md:text-2xl">
              Silver, drawn into wire.
            </MaskLine>
            <MaskLine delay={0.88} className="font-display text-xl font-light italic leading-snug text-silverd md:text-2xl">
              Wire, shaped into a city&rsquo;s memory.
            </MaskLine>
            <motion.p
              className="mt-6 text-sm leading-relaxed text-silverd md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
            >
              A silver filigree tradition native to Cuttack, Odisha — pure silver drawn into hair-fine wire, hand-shaped into ornament.
            </motion.p>
          </div>
        </motion.div>

        <div className="relative lg:col-span-5">
          <motion.div
            className="absolute -left-6 top-0 hidden h-full w-px bg-rule lg:block"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.6, delay: 0.4, ease: EASE }}
            style={{ transformOrigin: 'top' }}
            aria-hidden="true"
          />
          <motion.figure
            className="relative h-[46vh] overflow-hidden border border-rule p-2 sm:h-[56vh] lg:h-[74vh]"
            initial={{ clipPath: 'inset(6% 6% 6% 6%)', opacity: 0 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.55, ease: EASE }}
          >
            <motion.div
              className="relative flex h-full w-full items-center justify-center bg-paper2 text-silverd"
              style={{ y: imgY, scale: 1.06 }}
              initial={{ scale: 1.14 }}
              animate={{ scale: 1.06 }}
              transition={{ duration: 2.4, delay: 0.55, ease: EASE }}
              data-testid="hero-image"
              role="img"
              aria-label="Photograph to be supplied: hero macro of finished filigree catching light"
            >
              <i className="absolute left-3 top-3 h-3 w-3 border-l border-t border-silverm" aria-hidden="true" />
              <i className="absolute right-3 top-3 h-3 w-3 border-r border-t border-silverm" aria-hidden="true" />
              <i className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-silverm" aria-hidden="true" />
              <i className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-silverm" aria-hidden="true" />
              <span className="font-micro text-[10px] uppercase tracking-[0.22em]">
                Hero — macro of finished filigree, photograph to be supplied
              </span>
            </motion.div>
          </motion.figure>
          <motion.figcaption
            className="mt-3 font-micro text-[10px] uppercase tracking-[0.18em] text-silverm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Macro — metal loops in directional light · stand-in texture, filigree photograph to be supplied
          </motion.figcaption>
        </div>
      </div>

      <motion.div
        className="mx-auto flex w-full max-w-[1440px] items-end justify-between border-t border-rule px-5 py-5 md:px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.6 }}
      >
        <div className="flex items-center gap-8">
          <span className="font-micro text-[10px] uppercase tracking-[0.2em] text-silverd">GI recognised · 15.03.2024</span>
          <span className="hidden font-micro text-[10px] uppercase tracking-[0.2em] text-silverd sm:inline">A living craft, not a relic</span>
        </div>
        <button
          onClick={() => scrollToId('craft')}
          data-testid="hero-scroll-cue"
          className="group flex items-center gap-3"
          aria-label="Scroll to the craft"
        >
          <span className="font-micro text-[10px] uppercase tracking-[0.2em] text-silverd transition-colors group-hover:text-ink">Begin</span>
          <span className="relative block h-10 w-px overflow-hidden bg-rule">
            <span className="animate-cue absolute inset-0 bg-accent" aria-hidden="true" />
          </span>
        </button>
      </motion.div>
    </section>
  );
}
