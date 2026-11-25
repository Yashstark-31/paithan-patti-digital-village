import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
export const dynamic = "force-dynamic";
function db() {
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL, key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return url && key ? createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}}) : null;
}
export async function GET() {
  const s=db(); if(!s) return NextResponse.json({count:null,configured:false});
  const {data,error}=await s.rpc("get_site_views");
  if(error) return NextResponse.json({error:"Counter unavailable"},{status:503});
  return NextResponse.json({count:Number(data??0)},{headers:{"Cache-Control":"no-store"}});
}
export async function POST() {
  const s=db(); if(!s) return NextResponse.json({error:"Database not configured"},{status:503});
  const {data,error}=await s.rpc("record_site_view");
  if(error) return NextResponse.json({error:"Could not record visit"},{status:503});
  return NextResponse.json({count:Number(data??0)},{headers:{"Cache-Control":"no-store"}});
}
