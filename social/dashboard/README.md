# social.pravnix.ai dashboard

A password-protected page to watch the rendered reels, approve each script, render again, and post or schedule
to Instagram, YouTube, Facebook and LinkedIn through Upload-Post.

- **No dependencies, no build.** Plain Node 22 (`node:http`), about 50 MB of memory.
- **Rendering doesn't happen on the server.** "Render again" starts the `Render social reels` GitHub Actions
  workflow (`.github/workflows/social-render.yml`); when it finishes, the dashboard downloads the MP4s.
- **Posting needs an approval.** Each language's script and post must be approved (with the reviewer's name)
  before it can be posted. Changing the text in a later render needs a new approval.
- Posting uses `scripts/upload-post.mjs`, the same code as `npm run post`.

## Configuration

An env file outside the repo, e.g. `~/apps/social-data/.env` (mode 600):

| Variable | |
|---|---|
| `DATA_DIR` | Where renders, approvals and the post log are kept, e.g. `/home/pravnix/apps/social-data` |
| `SESSION_SECRET` | 64 random hex characters: `openssl rand -hex 32` |
| `DASHBOARD_PASSWORD_HASH` | From `node social/dashboard/hash-password.mjs` (prompts for the password; only the hash is stored) |
| `PORT` | `3020` |
| `PUBLIC_ORIGIN` | `https://social.pravnix.ai` |
| `GITHUB_TOKEN` | Fine-grained token, repository `raibhaskarr/pravnya-marketing` only, permission **Actions: Read and write** |
| `GITHUB_REPO`, `GITHUB_REF` | Default `raibhaskarr/pravnya-marketing`, `main` |
| `UPLOAD_POST_API_KEY`, `UPLOAD_POST_USER` | From Upload-Post |
| `FACEBOOK_PAGE_ID`, `LINKEDIN_PAGE_ID` | Optional, when the account has more than one page |
| `POST_TIMEZONE` | Default `Asia/Kolkata` |
| `POST_AI_DISCLOSURE` | `false` to stop labelling posts as AI-generated |

The render workflow also needs the repository secret `SARVAM_API_KEY` (for the voiceovers).

## Server setup (once)

```sh
mkdir -p ~/apps/social-data && chmod 700 ~/apps/social-data
# write ~/apps/social-data/.env as above, then:
chmod 600 ~/apps/social-data/.env
pm2 start --name pravnya-social --interpreter node --interpreter-args "--env-file=/home/pravnix/apps/social-data/.env" \
  ~/apps/pravnya-marketing/social/dashboard/server.mjs
pm2 save
```

Nginx: a `social.pravnix.ai` server block proxying to `127.0.0.1:3020` (same shape as the other sites), with
`client_max_body_size 1m`, and the certificate extended to include `social.pravnix.ai`.
Cloudflare DNS: `social` A record → the server, proxied.

Deploys: `~/apps/deploy.sh` (run on every push to `main`) ends with `pm2 restart pravnya-social`.

## Local run

```sh
node --env-file=dashboard/.env.local dashboard/server.mjs   # PUBLIC_ORIGIN=http://localhost:3020
```
