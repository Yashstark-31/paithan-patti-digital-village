# PAITHAN PATTI — THE DIGITAL VILLAGE

Responsive Next.js community portal. Includes resident accounts, local business/service directory, house/property listings, listing image upload, owner dashboard, admin listing approval, admin-created news/events, village information, gallery landing page, visitor counter and a Telegram contact link. Footer credit: **BUILD BY YASH**.

## Required setup
1. Create a Supabase project at https://supabase.com.
2. Run all of `supabase/schema.sql` in Supabase SQL Editor.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel Project → Settings → Environment Variables for Production, Preview and Development. Redeploy.
4. Create your own account. Copy its UUID from Supabase Authentication → Users, then run: `update public.profiles set role='admin' where id='YOUR_AUTH_USER_UUID';`
5. Sign in at /account and manage submissions/posts at /admin.

Never expose a Supabase service-role key in NEXT_PUBLIC variables. Exact residential addresses are not published; contact information requires consent. Verify village facts and sources before publication. Add CAPTCHA/rate limiting, abuse reporting, audit logs, backups and privacy/legal notices before broad public launch.

## Local development
`npm install`, copy `.env.example` to `.env.local`, fill Supabase URL/key, then `npm run dev`.
