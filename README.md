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

## Signed-in pages

`/account` (and `GET /api/account`) need a sign-in. People sign in at `/signin` with any email (demo-grade: no password). QAdence signs in with its test token instead:

1. On QAdence's Repos page, open this repo's **Test token** and click **Generate**. Copy the token; it is shown once.
2. In Vercel, **Settings → Environment Variables**, add `QADENCE_TEST_TOKEN` with that value for **Preview** and **Production**, then redeploy.

A request carrying `X-QAdence-Test-Token` equal to `QADENCE_TEST_TOKEN` is the test account `test@qadence.dev` (`lib/session.ts`, constant-time compare). With the variable unset the header is ignored.

## Personas

QAdence can test as several kinds of user. It sends `X-QAdence-Persona: {"role":"member"}` next to the test token; `currentRole()` in `lib/session.ts` reads the `role` attribute (no header means the owner test account). `/admin` is owner only, so a member persona that reaches it makes QAdence block the PR.

Vercel reports each preview as a GitHub `deployment_status`, which is how QAdence finds the PR's preview URL.
