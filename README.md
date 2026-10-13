# qadence-gate-demo

A tiny Next.js shop that exists so QAdence has real pull requests to gate.

| Branch | Change | What QAdence should say |
|---|---|---|
| `clean-change` | Home page headline copy | Pass |
| `broken-change` | Featured products read `FEATURED_PRODUCTS` with `JSON.parse`; unset in QAdence's build, so `/products` returns 500 | Block, pointing at `lib/products.ts` |

## Set up

1. Create an empty GitHub repo (e.g. `qadence-gate-demo`), add it as `origin`, and push `main`, `clean-change` and `broken-change`.
2. Install the QAdence GitHub App on the repo and import it into a project. QAdence builds the app itself from each PR, so there is nothing to deploy and no URL to configure. Leave `FEATURED_PRODUCTS` unset.
3. Open a PR from `clean-change`, then one from `broken-change`.

## Signed-in pages

`/account` (and `GET /api/account`) need a sign-in. People sign in at `/signin` with any email (demo-grade: no password). QAdence signs in with a test token instead: it sets a random `QADENCE_TEST_TOKEN` in its own build, so there is nothing to copy.

A request carrying `X-QAdence-Test-Token` equal to `QADENCE_TEST_TOKEN` is the test account `test@qadence.dev` (`lib/session.ts`, constant-time compare). With the variable unset the header is ignored.

## Personas

QAdence can test as several kinds of user. It sends `X-QAdence-Persona: {"role":"member"}` next to the test token; `currentRole()` in `lib/session.ts` reads the `role` attribute (no header means the owner test account). `/admin` is owner only, so a member persona that reaches it makes QAdence block the PR.
