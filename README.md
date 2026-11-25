# PAITHAN PATTI — THE DIGITAL VILLAGE

Next.js 14 + Supabase community portal.

Included: responsive homepage/navigation, directory search, home listings, resident signup/login, personal dashboard, business/property submission with image upload, admin approval/rejection, village info framework, gallery/events/news pages, visitor counter, privacy-aware public listing view. Footer includes **BUILD BY YASH** and direct Telegram contact @Yash_help_robot.

## Required production connection
A real shared user database cannot be created without an owner-controlled Supabase project. Create a project at https://supabase.com, run `supabase/schema.sql` in SQL Editor, then set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel Project → Settings → Environment Variables. Redeploy. Never use the service-role key in browser environment variables.

Create your account, copy its UUID from Supabase Authentication → Users, then run `update public.profiles set role='admin' where id='YOUR_AUTH_USER_UUID';` in SQL Editor. Listings require admin approval. Public house addresses are not displayed; contact details require opt-in.

Village factual data is intentionally not invented: population, PIN code, panchayat, schools, health facilities and local history need source verification before publication. Add CAPTCHA/rate limiting, abuse reporting, audit logs, backups and privacy policy before opening public registration.
