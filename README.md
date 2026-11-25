# Paithan Patti — The Digital Village

Premium, mobile-first Next.js starter for the Paithan Patti community platform.

## Phase 1
- Emerald / gold landing page with responsive navigation
- Village discovery, heritage, community gallery and contribution sections
- Site-wide visit counter (increments on each page opening)
- Supabase SQL schema for listings and atomic visit counting
- Public listing view excludes exact residential addresses and owner IDs

## Local development
1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add your Supabase URL and anon key.
4. Run `npm run dev`, then open http://localhost:3000.

## Supabase setup
Create a Supabase project and run `supabase/schema.sql` in SQL Editor. Add the two environment variables to Vercel before deployment.

## Launch checklist
This is a Phase 1 starter, not a completed production marketplace. Add authentication, server-side admin approval, CAPTCHA/rate limits, photo validation, moderation, reporting, audit logs and backups before public registration. Replace placeholders with real, permissioned village photos and locally verified facts. Keep exact house addresses private and publish contact details only with explicit opt-in. Verify census, PIN-code, panchayat and facility details against authoritative records.
