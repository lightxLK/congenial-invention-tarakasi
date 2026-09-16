import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV } from '../content';
import { EASE, scrollToId } from './Shared';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 350 : 0);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${scrolled ? 'border-b border-rule bg-paper/90 backdrop-blur-md' : 'border-b border-transparent'}`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <button
            onClick={() => go('top')}
            data-testid="nav-wordmark"
            className="flex items-center"
            aria-label="Tarakasi, back to top"
          >
            <img src="/images/logo-full.png" alt="Tarakasi" className="h-9 w-auto object-contain" />
          </button>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Sections">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                data-testid={`nav-link-${n.id}`}
                className="group relative font-micro text-[11px] uppercase tracking-[0.16em] text-silverd transition-colors duration-300 hover:text-ink"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-[width] duration-300 ease-editorial group-hover:w-full" aria-hidden="true" />
              </button>
            ))}
          </nav>
          <button
            onClick={() => setOpen(true)}
            data-testid="nav-menu-button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Open menu"
          >
            <span className="h-px w-6 bg-ink" />
            <span className="h-px w-6 bg-ink" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-charcoal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            data-testid="mobile-menu"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <img src="/images/logo-full.png" alt="Tarakasi" className="h-9 w-auto object-contain" />
              <button
                onClick={() => setOpen(false)}
                data-testid="nav-menu-close"
                className="flex h-11 w-11 items-center justify-center font-micro text-xs uppercase tracking-[0.2em] text-silverm"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-8" aria-label="Sections">
              {NAV.map((n, i) => (
                <motion.button
                  key={n.id}
                  onClick={() => go(n.id)}
                  data-testid={`mobile-nav-link-${n.id}`}
                  className="border-b border-silverd/30 py-4 text-left font-display text-3xl font-light text-paper"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.6, ease: EASE }}
                >
                  <span className="mr-4 font-micro text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                  {n.label}
                </motion.button>
              ))}
            </nav>
            <p className="px-8 pb-10 font-micro text-[10px] uppercase tracking-[0.2em] text-silverd">Cuttack, Odisha, the Silver City</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
