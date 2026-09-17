import { motion } from 'framer-motion';
import { EASE, Ph, Reveal, SectionHead, SourceNote } from '../components/Shared';
import { MEDHA, PUJA_AREAS } from '../content';

export default function Festival() {
  return (
    <>
      <section className="border-y border-rule bg-paper2/60 py-16 md:py-28" data-testid="section-durga-puja">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHead num="07" kicker="In Culture: Durga Puja" title="When Cuttack Turns Silver" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-base leading-relaxed text-ink md:text-lg md:leading-[1.7]">
                  Tarakasi is central to Cuttack&rsquo;s Durga Puja, most visibly in the immense silver backdrops known as Chandi Medha, which frame the goddess&rsquo;s idol, alongside silver crowns and ornaments made for the occasion. <SourceNote keys={['wiki']} />
                </p>
                <p className="mt-6 text-base leading-relaxed text-ink md:text-lg md:leading-[1.7]">
                  The Sharadiya Utsav puja tradition in this form is linked to a 16th-century visit by Chaitanya Mahaprabhu, with consecration historically conducted at the Binod Behari Devi Mandap. <SourceNote keys={['wiki']} />
                </p>
                <p className="mt-6 text-base leading-relaxed text-ink md:text-lg md:leading-[1.7]">
                  More than 150 filigree artisans are engaged each year making the backdrop and ornament designs. <SourceNote keys={['wiki']} />
                </p>
              </Reveal>
              <Reveal delay={0.1} className="mt-10">
                <p className="font-micro text-[10px] uppercase tracking-[0.22em] text-accent">Puja localities named in the record</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {PUJA_AREAS.map((a) => (
                    <li key={a} className="border border-rule px-3 py-1.5 font-micro text-[10px] uppercase tracking-[0.14em] text-silverd">{a}</li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-silverd">
                  Tarakasi work is also associated with Cuttack&rsquo;s Bali Yatra celebrations. <SourceNote keys={['oaklores']} />
                </p>
              </Reveal>

              <Reveal delay={0.15} className="mt-14">
                <p className="font-micro text-[10px] uppercase tracking-[0.22em] text-accent">Weight of installed backdrops, kilograms of silver</p>
                <p className="mt-3 max-w-md text-xs leading-relaxed text-silverm">
                  Ten of the roughly 36 Cuttack puja committees known to install a chandi medha, by year and weight. <SourceNote keys={['orissapost']} />
                </p>
                <ol className="mt-6 space-y-5">
                  {MEDHA.map((m, i) => (
                    <li key={m.year} data-testid={`medha-row-${m.year}`}>
                      <div className="flex items-baseline justify-between gap-4 font-micro text-[11px] uppercase tracking-[0.16em] text-silverd">
                        <span>{m.year} · {m.place}</span>
                        <span className="text-ink">{m.kg} kg</span>
                      </div>
                      <div className="mt-2 h-[3px] w-full bg-rule/60">
                        <motion.div
                          className="h-full bg-silverd"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(m.kg / 500) * 100}%` }}
                          viewport={{ once: true, margin: '-10% 0px' }}
                          transition={{ duration: 1.1, delay: i * 0.08, ease: EASE }}
                        />
                      </div>
                      <p className="mt-1.5 text-xs text-silverm">{m.note}</p>
                    </li>
                  ))}
                </ol>
                <div className="mt-4"><SourceNote keys={['wiki', 'orissapost', 'obytes1', 'obytes2']} /></div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <div className="relative">
                  <Ph label="PANORAMA: Chandi Medha backdrop framing the idol" meta="Photograph to be supplied, wide, festival light, drag-zoom intended" ratio="aspect-[21/10]" src="/images/festival-chandi-medha-panorama.png" alt="Chandi Medha silver backdrop framing the Durga idol" />
                  <div className="relative z-10 -mt-10 ml-auto w-2/5 border-4 border-paper2 md:-mt-16">
                    <Ph label="MACRO: one motif of the same backdrop" meta="The scale contrast, in one frame" ratio="aspect-square" src="/images/festival-chandi-medha-detail.png" alt="Macro detail of the Chandi Medha silver backdrop wirework" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="cuttack" className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-28" data-testid="section-cuttack">
        <SectionHead num="08" kicker="Place" title="Made in Cuttack" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-base leading-relaxed text-ink md:text-lg md:leading-[1.7]">
                Cuttack has been a commercial hub on Odisha&rsquo;s eastern coast since the early medieval period, and its silverwork earned it the epithet &lsquo;Silver City of Odisha&rsquo;. <SourceNote keys={['oaklores']} />
              </p>
              <p className="mt-6 text-base leading-relaxed text-ink md:text-lg md:leading-[1.7]">
                Across India, silver filigree carries associations with purity and ritual, used in ceremonial and auspicious occasions, historically in royal households, in temple ritual objects, and in festival processions. <SourceNote keys={['oaklores']} />
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <p className="font-micro text-[10px] uppercase tracking-[0.22em] text-accent">Craft neighbourhoods</p>
              <ul className="mt-4 space-y-3">
                {['Nayasadak', 'Balu Bazaar', 'Mangalabag'].map((n) => (
                  <li key={n} className="flex items-baseline justify-between border-b border-rule pb-3">
                    <span className="font-display text-xl font-light text-ink md:text-2xl">{n}</span>
                    <span className="font-micro text-[10px] uppercase tracking-[0.16em] text-silverm">worked &amp; sold here</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-silverm">Hundreds of shops across these neighbourhoods carry the craft. <SourceNote keys={['oaklores']} /></p>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-24">
            <Reveal>
              <Ph label="CITY: Cuttack market lane, silver shops" meta="Photograph to be supplied, early morning, directional light" ratio="aspect-[4/3]" src="/images/cuttack-market-lane.png" alt="Cuttack silver-market lane lined with Tarakasi jewellers" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
