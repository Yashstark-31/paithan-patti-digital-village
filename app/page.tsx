import Link from "next/link";
import { ArrowUpRight, Store, House, MapPinned, Images, CalendarDays, Newspaper, Users, Sparkles, Compass, BookOpen, ShieldCheck } from "lucide-react";

const destinations = [
  { icon: Store, number: "01", title: "Local directory", text: "Discover shops, skilled people and everyday services around the village.", href: "/directory", tag: "FIND LOCAL" },
  { icon: House, number: "02", title: "Homes & places", text: "Browse community-submitted homes and property information.", href: "/homes", tag: "EXPLORE HOMES" },
  { icon: MapPinned, number: "03", title: "Know the village", text: "Explore Paithan Patti facts, geography and its public profile.", href: "/village", tag: "VILLAGE GUIDE" },
  { icon: Images, number: "04", title: "Photo stories", text: "A growing visual record of people, places and village moments.", href: "/gallery", tag: "SEE MEMORIES" },
  { icon: CalendarDays, number: "05", title: "Events", text: "Community gatherings, festivals and important dates.", href: "/events", tag: "WHAT'S ON" },
  { icon: Newspaper, number: "06", title: "Village updates", text: "Announcements and updates shared with the community.", href: "/news", tag: "LATEST NEWS" },
];

export default function Home() {
  return <main className="home-new">
    <section className="hero-new"><div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
      <div className="wrap hero-new-inner">
        <div className="hero-copy">
          <div className="live-label"><span/> THE DIGITAL HOME OF OUR VILLAGE</div>
          <p className="hero-kicker">GOPALGANJ, BIHAR · INDIA</p>
          <h1>Rooted here.<br/><em>Connected</em><br/>everywhere.</h1>
          <p className="hero-description">Paithan Patti, in one place. Discover local services, explore our village, share stories and stay connected with the people who make it home.</p>
          <div className="hero-actions"><Link href="/village" className="btn-new btn-bright">EXPLORE PAITHAN PATTI <ArrowUpRight size={17}/></Link><Link href="/directory" className="btn-new btn-glass">LOCAL DIRECTORY</Link></div>
          <div className="hero-footnote"><span className="mini-mark">P.</span><span>OUR PEOPLE <b>·</b> OUR PLACE <b>·</b> OUR FUTURE</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-top"><span>VILLAGE PROFILE</span><span>BIHAR / 841427</span></div>
          <div className="visual-art"><div className="sun-disc"/><div className="field field-back"/><div className="field field-mid"/><div className="field field-front"/><div className="village-house house-a"/><div className="village-house house-b"/><div className="village-tree tree-a"/><div className="village-tree tree-b"/><div className="visual-caption"><span>OUR HOME</span><strong>PAITHAN<br/>PATTI</strong></div></div>
          <div className="visual-bottom"><span>MANJHA BLOCK</span><span className="visual-dot"/> <span>GOPALGANJ DISTRICT</span></div>
        </div>
      </div>
      <div className="hero-ticker"><div>LOCAL BUSINESS <b>✳</b> VILLAGE STORIES <b>✳</b> COMMUNITY EVENTS <b>✳</b> HOMES & PLACES <b>✳</b> LOCAL BUSINESS <b>✳</b> VILLAGE STORIES <b>✳</b></div></div>
    </section>
    <section className="quick-stats"><div className="wrap quick-stats-inner"><div><small>THE PLACE</small><strong>Paithan Patti</strong></div><div><small>BLOCK</small><strong>Manjha</strong></div><div><small>DISTRICT</small><strong>Gopalganj</strong></div><div><small>PIN CODE</small><strong>841427</strong></div><Link href="/village" className="stat-link">VIEW VILLAGE PROFILE <ArrowUpRight size={15}/></Link></div></section>
    <section className="discover-section"><div className="wrap"><div className="section-heading"><div><span className="section-index">01 / DISCOVER</span><h2>Everything local.<br/><em>All connected.</em></h2></div><p>A digital village directory built to make everyday discovery easier—for residents, families and anyone looking to know Paithan Patti.</p></div>
      <div className="destination-grid">{destinations.map(({icon:Icon,number,title,text,href,tag})=><Link href={href} className="destination-card" key={number}><div className="destination-top"><span>{number}</span><Icon size={24}/></div><div><h3>{title}</h3><p>{text}</p></div><div className="destination-bottom"><span>{tag}</span><ArrowUpRight size={17}/></div></Link>)}</div>
    </div></section>
    <section className="community-band"><div className="wrap community-inner"><div className="community-symbol"><Users size={34}/><span>ONE<br/>VILLAGE</span></div><div className="community-copy"><span className="section-index">02 / COMMUNITY FIRST</span><h2>Made by the village.<br/><em>For the village.</em></h2><p>Residents can submit a business, service or property listing. Each submission is reviewed before it appears publicly, helping keep the directory useful and trustworthy.</p><Link href="/register-listing" className="btn-new btn-bright">ADD A LOCAL LISTING <ArrowUpRight size={16}/></Link></div><div className="community-points"><div><ShieldCheck/><span><b>Reviewed submissions</b><small>Listings go through admin approval.</small></span></div><div><BookOpen/><span><b>Village knowledge</b><small>Facts carry a source and reference year.</small></span></div><div><Sparkles/><span><b>Shared identity</b><small>A place for our stories and updates.</small></span></div></div></div></section>
    <section className="closing-section"><div className="wrap closing-inner"><Compass size={25}/><span>THIS IS OUR PLACE</span><h2>Our village.<br/><em>Our digital home.</em></h2><Link href="/village" className="btn-new btn-dark">GET TO KNOW US <ArrowUpRight size={16}/></Link></div></section>
  </main>;
}