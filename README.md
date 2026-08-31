# Safety Education course site — setup (v3)

## Design

Institutional/LMS look modeled on the NTNU color direction — solid color top bar
(no blur/translucency), underline-tab course switcher, white cards with a colored
left accent bar. EMI course = red accent, grad seminar = blue accent, switched
automatically via `body[data-course]`. Built to be read quickly by students
scanning for what's due, not to look like a marketing site.

## What's in this version

- **Roster & groups** (`admin.html` + `Students` tab) — edit names, emails, and
  group numbers in a table, save once. Feeds the dropdowns on Submit/Progress.
- **Attendance** (`Attendance` + `AttendanceCodes` tabs, built into `progress.html`) —
  set a code per week in `admin.html`, students enter it to check in. Counts toward
  the 10% attendance component.
- **Weekly progress log** (`Progress` tab, in `progress.html`) — each group (EMI) or
  student (grad) logs progress per week and sees their own history.
- **Submission history** (in `progress.html`) — students see their own past
  submissions from the `Submissions` tab without leaving the page.
- **Announcements** (`Announcements` tab, posted from `admin.html`, shown on
  `index.html`) — up to 5 most recent per course/semester.
- **Dashboard** (`dashboard.html`, passphrase-gated like `admin.html`) — read-only
  overview: attendance rate for a selected week, which groups/students have never
  submitted anything, which haven't logged progress for a selected week.
- **Weekly reminder emails** (`sendWeeklyReminders` in `Code.gs`) — optional, needs
  a manual trigger setup, see step 6 below.
- **Semesters** — every data tab has a `Semester` column; a selector sits atop every
  page. `Config` tab's `ACTIVE_SEMESTER` sets the default for new visitors.

## 1. Backend (Google Sheet + Apps Script)

1. Create a new blank Google Sheet.
2. Extensions > Apps Script. Delete the placeholder code, paste in `apps-script/Code.gs`.
3. Run `setupSheets` once (function dropdown > Run ▶, approve permissions).
   Creates 11 tabs: `Materials_EMI`, `Materials_Grad`, `Showcase`, `Submissions`,
   `Comments`, `Students`, `Progress`, `Attendance`, `AttendanceCodes`,
   `Announcements`, `Config`.
4. Open the `Config` tab. Replace the `ADMIN_KEY` value with a passphrase only you
   know — this unlocks `admin.html` and `dashboard.html`. It's a simple shared-secret
   check, not real authentication — don't use it for anything more sensitive than
   "keep students from editing the roster by accident."
5. Deploy > New deployment > Web app. Execute as: **Me**. Who has access: **Anyone**.
   Copy the Web app URL.
6. *(Optional)* To turn on weekly reminder emails: in the Apps Script editor, click
   the clock icon (Triggers) in the left sidebar > Add Trigger > choose function
   `sendWeeklyReminders` > Select event source: Time-driven > Week timer > pick a
   day and time > Save. This can't be turned on just by deploying code — it's a
   one-time manual step in the Apps Script UI. Only students with an `Email` filled
   in on the `Students` tab will receive anything.

## 2. Frontend (GitHub Pages)

1. Open `site/config.js`, replace `GAS_URL` with the Web app URL.
2. Push everything in `site/` to a GitHub repo.
3. Repo Settings > Pages > deploy from branch `main`, folder `/ (root)`.
4. Your site is live at `https://yourusername.github.io/reponame/`.

## 3. Set up a semester

1. Go to `admin.html` on your live site, enter the ADMIN_KEY passphrase.
2. Type the semester code (e.g. `115-1`) into the box next to "Set as active semester"
   and click it — this becomes the default every visitor sees.
3. Pick the course (top segmented control), add each student's name (and email —
   required if you want them to receive reminder emails), and their group number —
   leave group blank for the grad seminar since it's individual. Click **Save roster**.
4. Repeat for the other course.

Re-running this each term: set a new `ACTIVE_SEMESTER` and save a fresh roster.
Nothing from previous semesters is touched — old data stays exactly where it is,
just filtered out by default.

## Weekly teaching routine

- Before each class: in `admin.html`, set that week's attendance code.
- In class: tell students the code; they check in on `progress.html`.
- Any time: post an announcement from `admin.html` if something needs flagging.
- Check `dashboard.html` to see who hasn't checked in, submitted, or logged progress.

## Editing content day to day

- **Materials_EMI / Materials_Grad** — edit weekly topics/descriptions/links directly
  in the Sheet. A row with a blank `Semester` applies to every semester (the default);
  fill in a specific semester only if that week's content changes that term.
- **Showcase** — one row per past project. `CoverColorHex` is a 6-digit hex color
  without the `#`. The cover art is drawn live from this data — no image files to manage.
- **Students / groups / attendance codes / announcements** — manage through
  `admin.html`, not by hand-editing the sheet, so everything stays in sync with what
  the site shows.
- **Submissions**, **Comments**, **Progress**, **Attendance** — fill themselves in as
  students use the site.

## Known limits

- The comments box polls every 8 seconds — near-real-time, not instant like a chat app.
- Cover images are flat-color Canvas drawings, not AI-generated artwork.
- The passphrase gate on `admin.html`/`dashboard.html` is a basic shared-secret check
  suitable for keeping a classroom tool tidy — it is not real user authentication.
  Anyone with edit access to the Google Sheet can also open `Code.gs` directly, so
  only share Sheet edit access with people you'd trust with the admin passphrase too.
- Attendance codes stop nothing from being shared student-to-student — they're a
  basic deterrent against checking in from home, not a hard guarantee of presence.

## If a CSS/JS change doesn't seem to show up after you push it

Every page loads `styles.css`, `config.js`, and `app.js` with a `?v=6` version tag
on the end. Browsers and GitHub's CDN cache these files aggressively, so after
pushing a real change to any of them, bump that number in all eight HTML files
(find-and-replace `?v=6` → `?v=7`, etc.) — that forces every visitor's browser to
fetch the new version instead of quietly reusing an old cached copy. If you ever
see "the update doesn't seem to have applied," this is almost always why — try a
hard refresh (Ctrl/Cmd+Shift+R) first, and bump the version number if that doesn't
clear it.
