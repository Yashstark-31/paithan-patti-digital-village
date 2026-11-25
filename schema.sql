create extension if not exists pgcrypto;
create table if not exists public.listings (
 id uuid primary key default gen_random_uuid(),
 owner_id uuid not null references auth.users(id) on delete cascade,
 listing_type text not null check(listing_type in ('business','house','service')),
 title text not null, description text, category text,
 photos text[] not null default '{}',
 public_phone text, public_whatsapp text, public_location text,
 exact_address text,
 allow_public_contact boolean not null default false,
 status text not null default 'pending' check(status in ('pending','approved','rejected','hidden')),
 created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
alter table public.listings enable row level security;
create policy "owners read own listings" on public.listings for select to authenticated using(auth.uid()=owner_id);
create policy "owners create own listings" on public.listings for insert to authenticated with check(auth.uid()=owner_id and status='pending');
create policy "owners update own pending listings" on public.listings for update to authenticated using(auth.uid()=owner_id and status in ('pending','rejected')) with check(auth.uid()=owner_id);
create or replace view public.approved_listings with (security_invoker=true) as
select id,listing_type,title,description,category,photos,
case when allow_public_contact then public_phone else null end as public_phone,
case when allow_public_contact then public_whatsapp else null end as public_whatsapp,
public_location,created_at from public.listings where status='approved';

-- Atomic site-wide page view counter: each POST increments once.
create table if not exists public.site_stats(id integer primary key check(id=1),total_views bigint not null default 0);
insert into public.site_stats(id,total_views) values(1,0) on conflict(id) do nothing;
alter table public.site_stats enable row level security;
create or replace function public.get_site_views() returns bigint language sql security definer set search_path=public as $$
 select total_views from public.site_stats where id=1;
$$;
create or replace function public.record_site_view() returns bigint language plpgsql security definer set search_path=public as $$
declare n bigint;
begin
 update public.site_stats set total_views=total_views+1 where id=1 returning total_views into n;
 return coalesce(n,0);
end;
$$;
revoke all on function public.get_site_views() from public;
revoke all on function public.record_site_view() from public;
grant execute on function public.get_site_views() to anon,authenticated;
grant execute on function public.record_site_view() to anon,authenticated;
