import Link from "next/link";
import { ArrowUpRight, MapPinned, Users, House, Ruler, BookOpen, Info } from "lucide-react";
import Title from "@/components/section-title";

const facts = [
  ["2,969","Population","Census 2011"],
  ["1,512","Male residents","Census 2011"],
  ["1,457","Female residents","Census 2011"],
  ["434","Households","Census 2011"],
  ["148 ha","Recorded area","Census 2011"],
  ["64.7%","Literacy rate","Census 2011"],
];

export default function Village() {
  return <main className="wrap page village-page">
    <Title eyebrow="OUR PLACE · OUR IDENTITY" title="Meet Paithan Patti" description="A village profile built from public records, with historic figures clearly labelled and local details added only after verification."/>
    <section className="village-overview">
      <div><span className="section-index">VILLAGE SNAPSHOT / 01</span><h2>Paithan Patti,<br/><em>Gopalganj, Bihar.</em></h2><p>Paithan Patti is recorded in the Census of India village directory under Manjha block, Gopalganj district. The profile below uses Census 2011 baseline figures.</p><div className="village-tags"><span><MapPinned size={14}/> MANJHA BLOCK</span><span>PIN 841427</span><span>CODE 230944</span></div></div>
      <div className="village-map-card"><div className="map-grid"/><MapPinned size={38}/><strong>PAITHAN PATTI</strong><small>GOPALGANJ · BIHAR · INDIA</small><Link href="https://www.google.com/maps/search/?api=1&query=Paithan+Patti%2C+Gopalganj%2C+Bihar" target="_blank">OPEN MAP <ArrowUpRight size={14}/></Link></div>
    </section>
    <section className="village-facts"><div className="facts-heading"><span className="section-index">02 / CENSUS PROFILE</span><h2>Our village, <em>by the numbers.</em></h2><p>Historical baseline · Census of India 2011</p></div><div className="facts-grid">{facts.map(([value,label,year])=><article className="fact-card" key={label}><strong>{value}</strong><span>{label}</span><small>{year}</small></article>)}</div><div className="facts-note"><Info size={16}/><span>These are 2011 census figures, not a live estimate. Literacy is reported as approximately 64.7% in village census reference tables. Current figures may differ.</span></div></section>
    <section className="village-details"><article><span className="section-index">03 / LOCATION</span><h3>Where we are</h3><p><b>Village:</b> Paithan Patti</p><p><b>Block:</b> Manjha</p><p><b>District:</b> Gopalganj</p><p><b>State:</b> Bihar, India</p><p><b>PIN code:</b> 841427</p><p><b>Census village code:</b> 230944</p></article><article><span className="section-index">04 / HISTORY & COMMUNITY</span><h3>Our story is still being written.</h3><p>Local history, festivals, landmarks, schools, public services, agriculture and community achievements will be added with resident input and reliable sources. We will not invent names, dates or traditions.</p><p className="muted">Know a verified fact or have a village story to share? Contact the site team.</p><a href="https://t.me/Yash_help_robot" target="_blank" rel="noreferrer" className="inline-link">SHARE A VILLAGE UPDATE <ArrowUpRight size={14}/></a></article></section>
    <section className="source-panel"><BookOpen size={20}/><div><b>Sources & accuracy</b><p>Primary reference: Census of India 2011, District Census Handbook – Gopalganj, and village directory entry for census code 230944. Other public village profiles were cross-checked for PIN and location details. Administrative labels and current amenities should be confirmed with the local Gram Panchayat before being treated as current.</p><div className="source-links"><a href="https://censusindia.gov.in/nada/index.php/catalog/269/download/726/DH_2011_1015_PART_B_DCHB_GOPALGANJ.pdf" target="_blank" rel="noreferrer">CENSUS DISTRICT HANDBOOK <ArrowUpRight size={13}/></a><a href="https://censusindia.gov.in/nada/index.php/catalog/268/download/722/DH_2011_1015_PART_A_DCHB_GOPALGANJ.pdf" target="_blank" rel="noreferrer">VILLAGE DIRECTORY <ArrowUpRight size={13}/></a></div></div></section>
  </main>;
}