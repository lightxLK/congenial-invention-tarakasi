import { motion } from 'framer-motion';
import { SOURCES } from '../content';

export const EASE = [0.22, 1, 0.36, 1];

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -64, duration: 1.6 });
  else el.scrollIntoView({ behavior: 'smooth' });
}

export function Reveal({ children, delay = 0, y = 18, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function MaskLine({ children, delay = 0, inView = false, className = '' }) {
  const t = { duration: 1.1, delay, ease: EASE };
  const inner = (
    <motion.span
      className={className}
      variants={{ hidden: { y: '112%' }, show: { y: 0 } }}
      transition={t}
    >
      {children}
    </motion.span>
  );
  if (inView) {
    return (
      <motion.span className="mask-line" initial="hidden" whileInView="show" viewport={{ once: true, margin: '-8% 0px' }}>
        {inner}
      </motion.span>
    );
  }
  return (
    <motion.span className="mask-line" initial="hidden" animate="show">
      {inner}
    </motion.span>
  );
}

export function SectionHead({ num, kicker, title, dark = false, id }) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal y={10}>
        <div className={`flex items-baseline gap-4 border-t pt-4 ${dark ? 'border-silverd/40' : 'border-rule'}`}>
          <span className="font-micro text-xs tracking-[0.2em] text-accent">{num}</span>
          <span className={`font-micro text-xs uppercase tracking-[0.2em] ${dark ? 'text-silverm' : 'text-silverd'}`}>{kicker}</span>
        </div>
      </Reveal>
      <h2
        id={id}
        className={`mt-8 font-display font-light leading-[1.08] tracking-tight text-4xl sm:text-5xl lg:text-6xl ${dark ? 'text-paper' : 'text-ink'}`}
      >
        <MaskLine inView>{title}</MaskLine>
      </h2>
    </div>
  );
}

export function SourceNote({ keys = [], dark = false }) {
  return (
    <span className={`inline-flex flex-wrap items-center gap-1.5 align-middle ${dark ? 'text-silverm' : 'text-silverd'}`}>
      {keys.map((k) => (
        <a
          key={k}
          href={SOURCES[k].url}
          target="_blank"
          rel="noopener noreferrer"
          title={SOURCES[k].label}
          data-testid={`source-chip-${k}`}
          className={`border px-1.5 py-0.5 font-micro text-[10px] uppercase tracking-[0.14em] transition-colors duration-200 ${dark ? 'border-silverd/50 hover:border-silverl hover:text-silverl' : 'border-rule hover:border-accent hover:text-accent'}`}
        >
          {k}
        </a>
      ))}
    </span>
  );
}

function ratioValue(ratio) {
  if (ratio.includes('square')) return 1;
  const m = ratio.match(/\[(\d+)\/(\d+)\]/);
  return m ? parseInt(m[1], 10) / parseInt(m[2], 10) : 4 / 3;
}

export function placeholderUrl(label, ratio = 'aspect-[4/3]', width = 1200) {
  const h = Math.round(width / ratioValue(ratio));
  const text = encodeURIComponent(`${width}x${h}\n${label}`);
  return `https://placehold.co/${width}x${h}/EDE9DF/9D9A93?text=${text}&font=roboto`;
}

export function Ph({ label, meta, ratio = 'aspect-[4/3]', dark = false, className = '', width = 1200 }) {
  return (
    <figure
      data-testid="image-placeholder"
      className={`relative overflow-hidden ${ratio} ${dark ? 'bg-ink/60 text-silverm' : 'bg-paper2 text-silverd'} ${className}`}
    >
      <img
        src={placeholderUrl(label, ratio, width)}
        alt={`Photograph to be supplied: ${label}${meta ? ` — ${meta}` : ''}`}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </figure>
  );
}
