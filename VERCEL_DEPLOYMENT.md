# Deploying to Vercel

This project is now fully configured to use Next.js App Router API Routes and Serverless Functions, making it fully compatible with Vercel deployment.

## Step 1: Create a Vercel Project
1. Push your code to a GitHub repository.
2. Log into [Vercel](https://vercel.com).
3. Click **Add New... > Project**.
4. Import your GitHub repository.

## Step 2: Configure Environment Variables
Before deploying, you must configure the following environment variables in the Vercel dashboard (Settings > Environment Variables):

| Variable Name | Description | Example |
|---|---|---|
| `RESEND_API_KEY` | Your secret API key from Resend.com | `re_123456789` |
| `CONTACT_EMAIL` | The email address where form submissions will be sent | `your.email@example.com` |

## Step 3: Deploy
- Leave the Build Command and Output Directory settings at their default values (Next.js preset).
- Click **Deploy**.

## Step 4: Verify Domain in Resend
To ensure your emails don't go to spam and function correctly in production:
1. Go to your [Resend Dashboard](https://resend.com/domains).
2. Add the custom domain you are using on Vercel.
3. Update your DNS records in Vercel to match the provided Resend TXT/MX records.
4. Once verified, update the `from` address in `app/api/contact/route.ts` to match your verified domain (e.g., `onboarding@yourdomain.com`).

## Why We Moved from GitHub Pages
GitHub Pages only supports static hosting (HTML/CSS/JS). Because the new robust Contact form requires a backend Node.js server to hide the Resend API Key and securely dispatch emails, we migrated the deployment architecture to Vercel (which supports Next.js Route Handlers natively).
