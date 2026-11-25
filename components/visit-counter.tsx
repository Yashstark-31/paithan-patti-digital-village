"use client";
import { useEffect, useRef, useState } from "react";
import { Eye } from "lucide-react";

export default function VisitCounter() {
  const [count,setCount] = useState<number|null>(null);
  const sent = useRef(false);
  useEffect(() => {
    let active = true;
    async function run() {
      try {
        const r = await fetch("/api/visit",{cache:"no-store"});
        if (r.ok) { const d = await r.json(); if(active && typeof d.count === "number") setCount(d.count); }
        if (!sent.current) {
          sent.current = true;
          const p = await fetch("/api/visit",{method:"POST",cache:"no-store"});
          if(p.ok) { const d = await p.json(); if(active && typeof d.count === "number") setCount(d.count); }
        }
      } catch {}
    }
    void run();
    return () => { active = false; };
  },[]);
  return <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-black/20 px-3 py-1.5 text-[11px] text-white/65" aria-live="polite"><Eye size={13} className="text-gold"/> VISITS <strong className="font-semibold tabular-nums text-gold">{count===null?"—":count.toLocaleString("en-IN")}</strong></span>;
}
