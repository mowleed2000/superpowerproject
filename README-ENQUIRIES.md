# Enquiry form setup

The site uses `VITE_ENQUIRY_ENDPOINT` for booking, care-home, community and contact forms.

1. Create a form endpoint with a provider such as Formspree, Basin or your own backend.
2. Add the endpoint URL as the `VITE_ENQUIRY_ENDPOINT` repository variable (Settings → Secrets and variables → Actions → Variables), and in a local `.env` file for development. The Pages workflow passes this variable into the production build.
3. Rebuild and deploy. The forms show a success state only after the endpoint returns a successful response. Without the variable they remain visible and explain that submission is not configured.

Do not put private API keys in a `VITE_` variable; those values are included in browser code. Use a public form endpoint URL only.
