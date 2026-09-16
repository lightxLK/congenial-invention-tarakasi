import { Loupe, Ph, Reveal, SectionHead, SourceNote } from '../components/Shared';

const LOUPE_SRC = '/images/opening-loupe-wire-macro.png';

export default function Opening() {
  return (
    <section id="craft" className="mx-auto max-w-[1440px] px-5 pb-24 pt-10 md:px-10 md:pb-40 md:pt-16" data-testid="section-craft">
      <SectionHead num="01" kicker="The Craft" title="The Silver City" />

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6 lg:col-start-2">
          <Reveal>
            <p className="max-w-[680px] text-base leading-relaxed text-ink md:text-lg md:leading-[1.7]">
              <span className="float-left mr-3 mt-1 font-display text-6xl font-light leading-[0.8] text-accent md:text-7xl">C</span>
              uttack has stood as a trading city on Odisha&rsquo;s eastern coast since the early medieval period. Somewhere inside that long commercial history, silver was drawn into wire, and the wire was given a name it still carries: Tarakasi.{' '}
              <SourceNote keys={['oaklores']} />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[680px] text-base leading-relaxed text-silverd md:text-lg md:leading-[1.7]">
              Its silverwork earned the city its epithet, the Silver City of Odisha. This is not a museum relic; it is a living tradition, worked daily in neighbourhoods where hundreds of shops still carry the craft.{' '}
              <SourceNote keys={['oaklores']} />
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-12">
            <Ph
              src="/images/opening-city-street.png"
              alt="A Cuttack silver-market lane lined with filigree jewellery shops"
              ratio="aspect-[3/2]"
            />
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
              Tarakasi is Cuttack&rsquo;s tradition of pulling silver, usually 90% pure or finer <SourceNote keys={['wiki']} />, into threads thinner than a hair <SourceNote keys={['oaklores']} />, then coiling those threads into pattern by hand.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <Loupe src={LOUPE_SRC} alt="Macro of a silver filigree butterfly brooch, wire-on-wire detail" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
