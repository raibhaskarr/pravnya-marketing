# Pravnya social reels

Short app-demo videos in English and Hindi for Instagram Reels, YouTube Shorts, Facebook and LinkedIn.
Built with [Remotion](https://www.remotion.dev) (React → video), voiced with Sarvam AI, posted through Upload-Post.

```
src/reels/*.ts   one file per reel: scenes (screenshot, on-screen line, voice script) in en + hi, and the post text
src/AppDemoReel.tsx   the video template (vertical 1080×1920 and square 1080×1080)
scripts/         tts (voice), render (MP4s), review (review page), post (publish)
```

## Rules for every reel

- **Demo data only.** Screens come from `website/public/assets/screenshots` (the made-up Maya/Aarav family). Never real children, parents or therapists.
- **Only claim what the app does**, and no medical claims (same rules as the website).
- **A native Hindi speaker approves the Hindi script and post** before anything is posted.

## Setup (once)

```sh
cd social
npm install
cp .env.example .env    # add SARVAM_API_KEY, UPLOAD_POST_API_KEY, UPLOAD_POST_USER
```

Rendering needs Chromium. Remotion downloads its own; in WSL without system libraries, point
`REMOTION_BROWSER` at an installed Chromium (e.g. Playwright's headless shell).

## Make a reel

1. **Write it**: copy `src/reels/log-in-seconds.ts`, change the scenes and post text, add it to `src/reels/index.ts`.
2. **Preview**: `npm run studio` opens Remotion Studio to scrub through every reel, language and format.
3. **Voice**: `npm run tts` generates the voiceover for each scene (only for text that changed). Scenes then
   last as long as their voice line. Without it, reels render silent with timing estimated from the text.
4. **Render**: `npm run render` (all) or `npm run render -- iep-goals-hi` (matching ids) → `out/*.mp4`.
5. **Review**: `npm run review` writes `out/review.html` with each video beside its script and post text.
6. **Post**: dry run first, then `--live`:

```sh
npm run post -- iep-goals --lang hi --at 2026-11-20T19:00          # prints exactly what would be sent
npm run post -- iep-goals --lang hi --at 2026-11-20T19:00 --live   # schedules it (Asia/Kolkata time)
npm run post -- iep-goals --lang en --queue --live                 # next free slot in the Upload-Post queue
npm run post -- iep-goals --lang en --platforms linkedin --live    # one platform
```

Vertical video goes to Instagram, YouTube and Facebook; the square cut goes to LinkedIn. Posts are marked as
containing AI-generated content (the voice) on platforms that support it; set `POST_AI_DISCLOSURE=false` to turn that off.
