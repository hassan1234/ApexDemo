const ITEMS = [
  'PRECISION',
  'COMMERCIAL',
  'INDUSTRIAL',
  'RESIDENTIAL',
  'SOFT-STRIP',
  'ASBESTOS',
  'STRUCTURAL',
  'SITE PREP',
];

export default function Marquee() {
  const renderList = () => (
    <>
      {ITEMS.map((it, i) => (
        <span className="marquee__item" key={i}>
          {it} <span className="marquee__dot" />
        </span>
      ))}
    </>
  );

  return (
    <div className="marquee">
      <div className="marquee__track">
        {renderList()}
        {renderList()}
      </div>
    </div>
  );
}

const MINI_ITEMS = [
  '◢ Insured to $20M',
  '◢ ISO 9001 / 14001 / 45001',
  '◢ EPA Licensed',
  '◢ 24/7 Emergency Response',
  '◢ Worksafe Compliant',
  '◢ Zero-Waste Targets',
  '◢ Heritage-Approved Crews',
];

export function MiniTicker() {
  return (
    <div className="miniticker">
      <div className="miniticker__track">
        <span>
          {MINI_ITEMS.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </span>
        <span>
          {MINI_ITEMS.map((i) => (
            <span key={i + 'b'}>{i}</span>
          ))}
        </span>
      </div>
    </div>
  );
}
