import { useInView } from '../hooks.jsx';

export default function SectionHead({ num, title, lede, strikeWord }) {
  const [ref, inView] = useInView();
  return (
    <div className="section__head">
      <div className="section__num">{num}</div>
      <h2 ref={ref} className={`section__title ${inView ? 'in-view' : ''}`}>
        {title}
        {strikeWord && (
          <>
            {' '}
            <span className="strike">{strikeWord}</span>
          </>
        )}
      </h2>
      <p className="section__lede">{lede}</p>
    </div>
  );
}
