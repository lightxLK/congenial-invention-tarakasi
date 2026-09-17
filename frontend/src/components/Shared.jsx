import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SOURCES } from '../content';

export function Loupe({ src, alt, ratio = 'aspect-[4/5]', label = 'Move to inspect: optical loupe', dark = false, fit = 'cover' }) {
  const ref = useRef(null);
  const [lens, setLens] = useState(null);
  const R = 80;
  const ZOOM = 2.4;

  const move = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLens({ x, y, w: rect.width, h: rect.height });
  };

  return (
    <div
      ref={ref}
      className={`relative ${ratio} cursor-none overflow-hidden border ${dark ? 'border-silverd/40' : 'border-rule'}`}
      onMouseMove={move}
      onMouseLeave={() => setLens(null)}
      onClick={move}
      data-testid="loupe-image"
    >
      <img src={src} alt={alt} className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`} loading="lazy" />
      {lens && (
        <div
          className="pointer-events-none absolute rounded-full border border-paper shadow-[0_0_0_1px_rgba(23,23,23,0.25)]"
          style={{
            width: R * 2,
            height: R * 2,
            left: lens.x - R,
            top: lens.y - R,
            backgroundImage: `url(${src})`,
            backgroundSize: `${lens.w * ZOOM}px ${lens.h * ZOOM}px`,
            backgroundPosition: `-${lens.x * ZOOM - R}px -${lens.y * ZOOM - R}px`,
          }}
          aria-hidden="true"
        />
      )}
      <span className={`absolute bottom-3 left-3 px-2 py-1 font-micro text-[10px] uppercase tracking-[0.18em] ${dark ? 'bg-ink/85 text-silverl' : 'bg-paper/85 text-silverd'}`}>
        {label}
      </span>
    </div>
  );
}

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
    <div className="mb-10 md:mb-14">
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
    <sup className={`ml-0.5 inline-flex gap-0.5 align-super text-[0.6em] ${dark ? 'text-silverm' : 'text-silverd'}`}>
      {keys.map((k) => (
        <a
          key={k}
          href={SOURCES[k].url}
          target="_blank"
          rel="noopener noreferrer"
          title={SOURCES[k].label}
          data-testid={`source-chip-${k}`}
          className={`font-micro tracking-[0.04em] transition-colors duration-200 ${dark ? 'hover:text-silverl' : 'hover:text-accent'}`}
        >
          {SOURCES[k].sup}
        </a>
      ))}
    </sup>
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
  return `https://placehold.co/${width}x${h}/EDE9DF/9D9A93?text=${text}&font=lora`;
}

export function Ph({ label, meta, ratio = 'aspect-[4/3]', dark = false, className = '', width = 1200, src, alt }) {
  return (
    <figure
      data-testid={src ? 'image' : 'image-placeholder'}
      className={`relative overflow-hidden ${ratio} ${dark ? 'bg-ink/60 text-silverm' : 'bg-paper2 text-silverd'} ${className}`}
    >
      <img
        src={src || placeholderUrl(label, ratio, width)}
        alt={src ? alt || label : `Photograph to be supplied: ${label}${meta ? `, ${meta}` : ''}`}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </figure>
  );
}
