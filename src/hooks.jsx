// Hooks and helpers
import { useState, useEffect, useRef } from 'react';

// Throttled scroll value via rAF
export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setY(window.scrollY);
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return y;
}

export function useInView(opts = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.15, ...opts },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}

// Count-up driven by visibility
export const CountUp = ({ to, suffix = '', duration = 1600, decimals = 0 }) => {
  const [ref, inView] = useInView();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start;
    let raf;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(to * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  const display = decimals ? v.toFixed(decimals) : Math.floor(v).toLocaleString();
  return (
    <span ref={ref}>
      {display}
      <span className="unit">{suffix}</span>
    </span>
  );
};

// FadeUp wrapper
export const FadeUp = ({ children, delay = 0, as: As = 'div', ...rest }) => {
  const [ref, inView] = useInView();
  return (
    <As
      ref={ref}
      {...rest}
      className={`fade-up ${inView ? 'in' : ''} ${rest.className || ''}`}
      style={{ ...(rest.style || {}), transitionDelay: `${delay}ms` }}
    >
      {children}
    </As>
  );
};
