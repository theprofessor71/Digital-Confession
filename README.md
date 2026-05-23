# প্রতিদানহীন.পাতা.বাংলা (Protidanhin)

The most elegant, premium and heartfelt digital letter platform for unspoken, unrequited, silent and deep personal emotions.

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- shadcn/ui components
- Supabase (Backend - to be connected)

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Supabase Setup (Next Steps):**
   - Create a Supabase project.
   - Create a `letters` table with columns: `id`, `emotion`, `theme`, `content`, `handwriting`, `seal_text`, `created_at`, `likes`.
   - Setup Row Level Security (RLS) for anonymous inserts and public reads.
   - Setup Supabase Storage for any custom sticker/image uploads.
   - Add your Supabase credentials to `.env.local`:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     ```

## Deployment

This project is optimized for Vercel.
Simply push to GitHub and connect the repository to Vercel for automatic deployments.

Ensure you set the `.env` variables in your Vercel project settings.

## Design Philosophy
- **Strictly NO AI features.**
- Luxurious, poetic, emotional, minimalist.
- Bengali typography first.
