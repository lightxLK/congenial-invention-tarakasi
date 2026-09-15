import { useRef, useState } from 'react';
import { Ph, Reveal, SectionHead, SourceNote } from '../components/Shared';

function Loupe() {
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
      className="relative aspect-[4/5] cursor-none overflow-hidden border border-rule"
      onMouseMove={move}
      onMouseLeave={() => setLens(null)}
      onClick={move}
      data-testid="loupe-image"
    >
      <div
        className="flex h-full w-full items-center justify-center bg-paper2 text-silverd"
        role="img"
        aria-label="Photograph to be supplied: macro of real wire detail for the optical-loupe interaction"
      >
        <span className="font-micro text-[10px] uppercase tracking-[0.22em]">
          MACRO — wire detail, photograph to be supplied
        </span>
      </div>
      {lens && (
        <div
          className="pointer-events-none absolute flex items-center justify-center rounded-full border border-paper bg-paper2 shadow-[0_0_0_1px_rgba(23,23,23,0.25)]"
          style={{ width: R * 2, height: R * 2, left: lens.x - R, top: lens.y - R }}
          aria-hidden="true"
        >
          <span className="font-micro text-[8px] uppercase tracking-[0.14em] text-silverd">loupe</span>
        </div>
      )}
      <span className="absolute bottom-3 left-3 bg-paper/85 px-2 py-1 font-micro text-[10px] uppercase tracking-[0.18em] text-silverd">
        Move to inspect — optical loupe
      </span>
    </div>
  );
}

export default function Opening() {
  return (
    <section id="craft" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-40" data-testid="section-craft">
      <SectionHead num="01" kicker="The Craft" title="The Silver City" />

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6 lg:col-start-2">
          <Reveal>
            <p className="max-w-[680px] text-base leading-relaxed text-ink md:text-lg md:leading-[1.7]">
              <span className="float-left mr-3 mt-1 font-display text-6xl font-light leading-[0.8] text-accent md:text-7xl">C</span>
              uttack has stood as a trading city on Odisha&rsquo;s eastern coast since the early medieval period. Somewhere inside that long commercial history, silver was drawn into wire — and the wire was given a name it still carries: Tarakasi.{' '}
              <SourceNote keys={['oaklores']} />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[680px] text-base leading-relaxed text-silverd md:text-lg md:leading-[1.7]">
              Its silverwork earned the city its epithet — the Silver City of Odisha. This is not a museum relic; it is a living tradition, worked daily in neighbourhoods where hundreds of shops still carry the craft.{' '}
              <SourceNote keys={['oaklores']} />
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-12">
            <Ph label="CITY — Cuttack silver-market street, documentary wide" meta="Photograph to be supplied · 3:2, natural light" ratio="aspect-[3/2]" />
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:col-start-9 lg:pt-40">
          <Reveal>
            <h3 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
              What is <span className="italic">Tarakasi?</span>
            </h3>
            <div className="mt-6 flex gap-6 border-y border-rule py-5">
              <div>
                <p className="font-display text-2xl italic text-accent">tara</p>
                <p className="mt-1 font-micro text-[10px] uppercase tracking-[0.2em] text-silverd">wire</p>
              </div>
              <div className="w-px bg-rule" aria-hidden="true" />
              <div>
                <p className="font-display text-2xl italic text-accent">kasi</p>
                <p className="mt-1 font-micro text-[10px] uppercase tracking-[0.2em] text-silverd">design</p>
              </div>
              <p className="ml-auto self-end font-micro text-[10px] uppercase tracking-[0.14em] text-silverm">traditional etymology</p>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-silverd md:text-base md:leading-[1.7]">
              Tarakasi is Cuttack&rsquo;s tradition of pulling silver — usually 90% pure or finer <SourceNote keys={['wiki']} /> — into threads thinner than a hair <SourceNote keys={['oaklores']} />, then coiling those threads into pattern by hand.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <Loupe />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
