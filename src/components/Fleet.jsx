import { FadeUp } from '../hooks.jsx';
import SectionHead from './SectionHead.jsx';

const FLEET = [
  { no: '/ 01', name: 'CAT 390F UHD', spec: 'HIGH-REACH EXCAVATOR / 38M', stat: '38m' },
  { no: '/ 02', name: 'Volvo EC480E', spec: 'TRACKED EXCAVATOR / 48T', stat: '48T' },
  { no: '/ 03', name: 'Komatsu PC490', spec: 'PROCESSOR-FITTED / 50T', stat: '50T' },
  { no: '/ 04', name: 'Doosan DX300', spec: 'CRUSHER ATTACHMENT', stat: '300t/h' },
  { no: '/ 05', name: 'Hino 700 Series', spec: 'TIPPER FLEET / x12', stat: 'x12' },
  { no: '/ 06', name: 'Mecalac MWR', spec: 'WHEELED SOFT-STRIP', stat: 'AGILE' },
];

export default function Fleet() {
  return (
    <section id="fleet" className="fleet">
      <div style={{ marginBottom: 64 }}>
        <SectionHead
          num="04 / FLEET — WHAT WE BRING"
          title="The right tool"
          strikeWord="every time"
          lede="Mobilized crews on the road in 90 minutes anywhere in the DMV. Maintained in-house, certified operators, replaced on a strict roster."
        />
      </div>
      <div className="fleet__grid">
        {FLEET.map((f, i) => (
          <FadeUp key={i} as="div" className="fleet-item" delay={i * 60}>
            <div className="fleet-item__no">{f.no}</div>
            <div className="fleet-item__name">{f.name}</div>
            <div className="fleet-item__spec">{f.spec}</div>
            <div className="fleet-item__visual">
              <span>[ {f.name} silhouette ]</span>
            </div>
            <div className="fleet-item__stat">{f.stat}</div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
