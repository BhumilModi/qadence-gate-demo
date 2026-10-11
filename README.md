# qadence-gate-demo

A tiny Next.js shop that exists so QAdence has real pull requests to gate.

| Branch | Change | What QAdence should say |
|---|---|---|
| `clean-change` | Home page headline copy | Pass |
| `broken-change` | Featured products read `FEATURED_PRODUCTS` with `JSON.parse`; unset on Vercel, so `/products` returns 500 | Block, pointing at `lib/products.ts` |

## Set up

1. Create an empty GitHub repo (e.g. `qadence-gate-demo`), add it as `origin`, and push `main`, `clean-change` and `broken-change`.
2. Import it into Vercel. Under **Settings → Deployment Protection**, turn **Vercel Authentication off** so headless Chromium can open previews. Leave `FEATURED_PRODUCTS` unset.
3. Install the QAdence GitHub App on the repo and import it into a project. On the Repos page, set its base URL to the Vercel production URL (`https://<project>.vercel.app`).
4. Open a PR from `clean-change`, then one from `broken-change`.

Vercel reports each preview as a GitHub `deployment_status`, which is how QAdence finds the PR's preview URL.
