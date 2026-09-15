import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { EASE, Ph, Reveal, SectionHead, SourceNote } from '../components/Shared';
import { STEPS, WORKSHOP } from '../content';

function buildWirePath(n, W, H, amp) {
  const cx = W / 2;
  const stepH = H / n;
  let d = `M ${cx} 0`;
  for (let i = 0; i < n; i++) {
    const y0 = i * stepH;
    const ym = y0 + stepH / 2;
    const dir = i % 2 === 0 ? 1 : -1;
    d += ` C ${cx + dir * amp} ${y0 + stepH * 0.16}, ${cx - dir * amp} ${ym - stepH * 0.2}, ${cx} ${ym}`;
    d += ' a 8 8 0 1 1 0.01 0';
    if (i < n - 1) {
      const y1 = (i + 1) * stepH;
      d += ` C ${cx + dir * amp} ${ym + stepH * 0.2}, ${cx - dir * amp} ${y1 - stepH * 0.16}, ${cx} ${y1}`;
    } else {
      d += ` L ${cx} ${H}`;
    }
  }
  return d;
}

const W = 140, H = 1400;
const DESKTOP_PATH = buildWirePath(STEPS.length, W, H, 30);
const MOBILE_PATH = `M ${W / 2} 0 L ${W / 2} ${H}`;

function WireRail({ progress, mobile }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className="h-full w-full"
      aria-hidden="true"
    >
      <path d={mobile ? MOBILE_PATH : DESKTOP_PATH} fill="none" stroke="#C9C4BA" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <motion.path
        d={mobile ? MOBILE_PATH : DESKTOP_PATH}
        fill="none"
        stroke="#575650"
        strokeWidth="1.6"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        style={{ pathLength: progress }}
      />
    </svg>
  );
}

export default function Making() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(-1);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.65'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.6 });
  const full = useTransform(scrollYProgress, () => 1);
  const progress = reduced ? full : smooth;

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(STEPS.length - 1, Math.floor(v * STEPS.length * 1.02)));
  });

  return (
    <section id="making" className="border-y border-rule bg-paper2/60 py-24 md:py-40" data-testid="section-making">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHead num="03" kicker="The Making" title="From Silver to Filigree" />
              <Reveal>
                <p className="max-w-sm text-sm leading-relaxed text-silverd md:text-base md:leading-[1.7]">
                  Silver arrives as bricks and lumps, historically sourced from trading centres such as Kolkata and Mumbai. <SourceNote keys={['gac']} />
                </p>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-silverd md:text-base md:leading-[1.7]">
                  Follow the wire. A single line runs the length of the process (melting, drawing, twisting, fusing), the way a single strand runs through every piece.
                </p>
              </Reveal>
            </div>
          </div>

          <div ref={ref} className="relative lg:col-span-8">
            <div className="absolute inset-y-0 left-4 w-[72px] md:left-1/2 md:w-[140px] md:-translate-x-1/2">
              <div className="hidden h-full md:block"><WireRail progress={progress} mobile={false} /></div>
              <div className="h-full md:hidden"><WireRail progress={progress} mobile /></div>
            </div>

            <ol className="relative">
              {STEPS.map((s, i) => {
                const left = i % 2 === 0;
                return (
                  <li key={s.name} className="relative pb-16 pl-16 md:pb-24 md:pl-0" data-testid={`step-${i + 1}`}>
                    <div className={`md:w-[calc(50%-110px)] ${left ? '' : 'md:ml-[calc(50%+110px)]'}`}>
                      <Reveal>
                        <div className="flex items-baseline gap-4">
                          <span className={`font-micro text-xs tracking-[0.2em] transition-colors duration-500 ${i <= active ? 'text-accent' : 'text-silverm'}`}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <h3 className={`font-display text-2xl font-light transition-colors duration-500 md:text-3xl ${i <= active ? 'text-ink' : 'text-silverd'}`}>
                            {s.name}
                          </h3>
                        </div>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-silverd md:leading-[1.7]">{s.detail}</p>
                        <div className="mt-3"><SourceNote keys={s.sources} /></div>
                        <Ph
                          label={`PROCESS: ${s.name.toLowerCase()}, workshop macro`}
                          meta="Photograph to be supplied"
                          ratio="aspect-[16/9]"
                          className="mt-5 max-w-md"
                        />
                      </Reveal>
                    </div>
                  </li>
                );
              })}
            </ol>

            <Reveal className="relative ml-16 md:ml-[calc(50%+110px)] md:w-[calc(50%-110px)]">
              <aside className="border border-rule bg-paper p-6 md:p-8" data-testid="workshop-aside">
                <p className="font-micro text-[10px] uppercase tracking-[0.22em] text-accent">Workshop realities</p>
                <ul className="mt-5 space-y-4">
                  {WORKSHOP.map((w, i) => (
                    <li key={i} className="border-t border-rule pt-4 text-sm leading-relaxed text-silverd first:border-t-0 first:pt-0">
                      {w.text} <SourceNote keys={w.sources} />
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
