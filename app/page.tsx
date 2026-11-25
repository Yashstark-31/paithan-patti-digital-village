import { ArrowUpRight, Camera, Eye, Landmark, MapPin, ShieldCheck, Store, Users, House, Sprout } from "lucide-react";
import VisitCounter from "@/components/visit-counter";

const cards = [
  { icon: Store, title: "Local businesses", text: "Discover village shops, services, makers and local professionals.", href: "#businesses" },
  { icon: House, title: "Homes & property", text: "A privacy-aware place for home and property listings.", href: "#register" },
  { icon: Camera, title: "Village memories", text: "A community archive of authentic photographs and stories.", href: "#gallery" },
  { icon: Landmark, title: "Village heritage", text: "Explore local history and verified public information.", href: "#heritage" }
];

export default function Home() {
  return <main>
    <nav className="container flex items-center justify-between gap-4 py-6">
      <a href="#" className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-gold"><Landmark size={22}/></span><span><b className="block text-sm tracking-widest">PAITHAN PATTI</b><small className="text-[10px] tracking-[.2em] text-white/50">THE DIGITAL VILLAGE</small></span></a>
      <div className="hidden gap-7 text-sm text-white/70 md:flex"><a href="#about">About</a><a href="#businesses">Businesses</a><a href="#heritage">Village</a><a href="#gallery">Gallery</a></div>
      <div className="flex items-center gap-3"><div className="hidden sm:block"><VisitCounter/></div><a href="#register" className="rounded-full border border-gold/60 px-4 py-2.5 text-xs font-bold text-gold">JOIN THE VILLAGE <ArrowUpRight className="ml-1 inline" size={14}/></a></div>
    </nav>

    <section className="relative isolate overflow-hidden border-y border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_25%,rgba(33,102,77,.5),transparent_55%),linear-gradient(120deg,#071d19,#0b3027_55%,#071d19)]"/>
      <div className="container grid min-h-[620px] items-center gap-12 py-20 md:grid-cols-[1.1fr_.9fr]">
        <div><div className="eyebrow mb-7 flex items-center gap-3"><span className="h-px w-9 bg-gold"/>GOPALGANJ · BIHAR · INDIA</div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-tight md:text-7xl">One village.<br/><span className="text-gold">One digital</span><br/>identity.</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/65">A living digital home for Paithan Patti—celebrating our people, preserving our stories and bringing local businesses into the spotlight.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#explore" className="rounded-full bg-gold px-7 py-4 text-sm font-bold text-forest">EXPLORE THE VILLAGE <ArrowUpRight className="ml-2 inline" size={16}/></a><a href="#register" className="rounded-full border border-white/20 px-7 py-4 text-sm">ADD YOUR LISTING</a></div>
          <div className="mt-14 flex flex-wrap gap-8 border-t border-white/10 pt-7 text-xs text-white/55"><div><b className="block text-lg text-white">People-powered</b>Built by the community</div><div><b className="block text-lg text-white">Local-first</b>Stories, places & enterprise</div><div><b className="block text-lg text-white">Privacy-aware</b>Your details, your choice</div></div>
        </div>
        <div className="relative"><div className="absolute -inset-5 rounded-[2rem] border border-gold/20"/><div className="relative flex min-h-[430px] flex-col justify-between overflow-hidden rounded-[1.6rem] border border-white/15 bg-[linear-gradient(145deg,rgba(25,79,61,.9),rgba(5,23,20,.96))] p-7 shadow-glow">
          <div className="flex justify-between"><span className="eyebrow">A PLACE TO BELONG</span><MapPin className="text-gold"/></div>
          <div className="mx-auto grid h-48 w-48 place-items-center rounded-full border border-gold/30"><div className="grid h-32 w-32 place-items-center rounded-full border border-gold/50 bg-forest text-center shadow-glow"><Landmark className="mx-auto mb-2 text-gold" size={30}/><span className="text-xs tracking-[.2em]">PAITHAN<br/>PATTI</span></div></div>
          <div><div className="eyebrow">OUR ROOTS. OUR FUTURE.</div><h2 className="mt-3 text-3xl font-semibold">A village story,<br/>written together.</h2><p className="mt-3 text-sm leading-6 text-white/55">Local knowledge deserves a global window.</p></div>
        </div></div>
      </div>
    </section>

    <section id="explore" className="container py-24"><div className="mb-12"><div className="eyebrow">EXPLORE PAITHAN PATTI</div><h2 className="mt-4 text-3xl font-semibold md:text-4xl">Everything local. <span className="text-gold">All in one place.</span></h2></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{cards.map(({icon:Icon,title,text,href})=><a key={title} href={href} className="glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-gold/40"><Icon className="text-gold" size={26}/><h3 className="mt-8 text-lg font-semibold">{title}</h3><p className="mt-3 min-h-16 text-sm leading-6 text-white/55">{text}</p><span className="mt-5 inline-flex text-xs font-bold text-gold">EXPLORE <ArrowUpRight className="ml-2" size={14}/></span></a>)}</div>
    </section>

    <section id="about" className="border-y border-white/10 bg-[#0a2922] py-20"><div className="container grid gap-10 md:grid-cols-2 md:items-center"><div><div className="eyebrow">MORE THAN A WEBSITE</div><h2 className="mt-4 text-3xl font-semibold md:text-5xl">Our identity is made of <span className="text-gold">many stories.</span></h2></div><div><p className="text-base leading-8 text-white/65">A community-powered platform to document local history, share authentic photographs, discover services and celebrate the people who make this place home.</p><p className="mt-4 text-sm leading-7 text-white/45">Village facts will be published with sources and verification status. Historical census figures will be labelled by year—not presented as current population.</p></div></div></section>

    <section id="businesses" className="container py-20"><div className="eyebrow">SUPPORT LOCAL</div><h2 className="mt-4 text-3xl font-semibold md:text-4xl">Give your business a <span className="text-gold">digital address.</span></h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/55">Shops, services, farms and local professionals can request a public listing. Approved listings will get a shareable profile.</p><div className="mt-9 grid gap-4 md:grid-cols-3">{["Shops & stores","Local services","Farmers & makers"].map((x,i)=><div key={x} className="glass rounded-xl p-6"><div className="text-xs text-gold">0{i+1} / DIRECTORY</div><h3 className="mt-5 text-xl font-semibold">{x}</h3><p className="mt-2 text-sm text-white/50">A place for local talent to be discovered.</p></div>)}</div></section>

    <section id="heritage" className="border-y border-white/10 bg-[#0a2922] py-20"><div className="container grid gap-8 md:grid-cols-3"><div className="md:col-span-2"><div className="eyebrow">ROOTED IN REAL LIFE</div><h2 className="mt-4 text-3xl font-semibold md:text-4xl">Document the village.<br/><span className="text-gold">Respect the facts.</span></h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">History, geography, schools, healthcare, roads and agriculture will be added using reliable records and community submissions reviewed before publication.</p></div><div className="glass rounded-2xl p-6"><ShieldCheck className="text-gold" size={27}/><h3 className="mt-5 font-semibold">Verified information</h3><p className="mt-2 text-sm leading-6 text-white/55">Every public fact can show its source, status and last-updated date.</p></div></div></section>

    <section id="gallery" className="container py-20"><div className="eyebrow">COMMUNITY PHOTO ARCHIVE</div><h2 className="mt-4 text-3xl font-semibold">Our village, <span className="text-gold">through our eyes.</span></h2><div className="mt-8 grid gap-4 md:grid-cols-3">{[{Icon:Camera,name:"Village life"},{Icon:Sprout,name:"Fields & seasons"},{Icon:Users,name:"People & celebrations"}].map(({Icon,name})=><div key={name} className="glass flex min-h-52 items-end rounded-2xl p-6"><div><Icon className="mb-3 text-gold"/><b>{name}</b><p className="mt-1 text-xs text-white/45">Community photos coming soon</p></div></div>)}</div></section>

    <section id="register" className="container pb-24"><div className="rounded-3xl border border-gold/30 bg-[linear-gradient(110deg,#123d30,#0a251f)] p-8 md:p-14"><div className="eyebrow">BE PART OF THE STORY</div><h2 className="mt-4 text-3xl font-semibold md:text-5xl">Your village needs <span className="text-gold">your voice.</span></h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">Help build the first trusted digital directory and archive for Paithan Patti. Registration and public publishing will open after the secure backend is connected.</p><a href="mailto:hello@paithanpatti.in?subject=Paithan%20Patti%20Digital%20Village" className="mt-8 inline-flex rounded-full bg-gold px-7 py-4 text-xs font-bold text-forest">I WANT TO CONTRIBUTE <ArrowUpRight className="ml-2" size={15}/></a></div></section>

    <footer className="border-t border-white/10 py-8"><div className="container flex flex-wrap items-center justify-between gap-4 text-xs text-white/40"><span>© {new Date().getFullYear()} PAITHAN PATTI DIGITAL VILLAGE</span><span>Our Village. Our People. Our Future.</span><span className="sm:hidden"><VisitCounter/></span></div></footer>
  </main>;
}
