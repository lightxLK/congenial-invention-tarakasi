import { useEffect } from 'react';
import Lenis from 'lenis';
import '@/App.css';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Opening from '@/sections/Opening';
import History from '@/sections/History';
import Making from '@/sections/Making';
import WireLanguage from '@/sections/WireLanguage';
import Objects from '@/sections/Objects';
import Odissi from '@/sections/Odissi';
import Festival from '@/sections/Festival';
import GI from '@/sections/GI';
import Closing from '@/sections/Closing';

function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); window.__lenis = null; };
  }, []);

  return (
    <div className="grain bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <Opening />
        <History />
        <Making />
        <WireLanguage />
        <Objects />
        <Odissi />
        <Festival />
        <GI />
        <Closing />
      </main>
    </div>
  );
}

export default App;
