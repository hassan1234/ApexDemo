import { useState, useEffect, useRef, useCallback } from 'react';

export default function BeforeAfter() {
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
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      updateFromX(x);
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);
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
    <div
      className="beforeafter"
      ref={wrapRef}
      onMouseDown={(e) => { dragging.current = true; updateFromX(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; updateFromX(e.touches[0].clientX); }}
    >
      <div className="beforeafter__layer beforeafter__after">
        <div className="beforeafter__label" style={{ right: 24, color: 'var(--ink)' }}>
          AFTER — CLEAN GRADE
        </div>
        <div className="beforeafter__center" style={{ color: 'var(--ink)' }}>
          CLEANER
          <br />
          FUTURE
        </div>
      </div>
      <div className="beforeafter__layer-clip" style={{ width: `${pos}%` }}>
        <div
          className="beforeafter__layer beforeafter__before"
          style={{ width: `${100 / (pos / 100)}%` }}
        >
          <div className="beforeafter__label" style={{ left: 24, color: 'var(--bone)' }}>
            BEFORE — STANDING
          </div>
          <div className="beforeafter__center" style={{ color: 'var(--bone)' }}>
            STANDING
            <br />
            STRUCTURE
          </div>
        </div>
      </div>
      <div className="beforeafter__handle" style={{ left: `${pos}%` }} />
    </div>
  );
}
