import { useState, useEffect, useRef, useCallback } from 'react';

export default function ComparisonSlider({ beforeSrc, afterSrc, label, sublabel }) {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef(null);
  const dragging = useRef(false);

  const updateFromX = useCallback((clientX) => {
    if (!wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(r.width, clientX - r.left));
    setPos((x / r.width) * 100);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      updateFromX(e.touches ? e.touches[0].clientX : e.clientX);
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, [updateFromX]);

  return (
    <div className="cs-wrap">
      {label && (
        <div className="cs-meta">
          <div className="cs-label">{label}</div>
          {sublabel && <div className="cs-sublabel">{sublabel}</div>}
        </div>
      )}
      <div
        className="cs"
        ref={wrapRef}
        onMouseDown={(e) => { dragging.current = true; updateFromX(e.clientX); }}
        onTouchStart={(e) => { dragging.current = true; updateFromX(e.touches[0].clientX); }}
      >
        {/* AFTER layer (base, always visible) */}
        <div className="cs__layer cs__after">
          {afterSrc
            ? <img src={afterSrc} alt="After" className="cs__img" />
            : <div className="cs__placeholder" />}
          <div className="cs__badge cs__badge--right">AFTER</div>
        </div>

        {/* BEFORE layer (clipped left) */}
        <div className="cs__clip" style={{ width: `${pos}%` }}>
          <div className="cs__layer cs__before" style={{ width: `${100 / (pos / 100)}%` }}>
            {beforeSrc
              ? <img src={beforeSrc} alt="Before" className="cs__img" />
              : <div className="cs__placeholder cs__placeholder--dark" />}
            <div className="cs__badge cs__badge--left">BEFORE</div>
          </div>
        </div>

        {/* Handle */}
        <div className="cs__handle" style={{ left: `${pos}%` }}>
          <div className="cs__handle-line" />
          <div className="cs__handle-circle">◂ ▸</div>
        </div>
      </div>
    </div>
  );
}
