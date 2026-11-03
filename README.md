# Safety Education course site — simplified static version

No Google Sheet, no Apps Script, no backend of any kind. Three files:
`index.html`, `styles.css`, `script.js`. Everything — weekly materials, grading,
past projects, groups — lives directly inside `script.js` as plain data you edit
by hand.

## Deploy

1. Push these 3 files to a GitHub repo.
2. Repo Settings → Pages → deploy from branch `main`, folder `/ (root)`.
3. Live at `https://yourusername.github.io/reponame/`.

That's it — no Apps Script deployment, no spreadsheet setup, no `ADMIN_KEY`.

## How to add your real weekly material links

Open `script.js`, find the `DATA.emi.weeks` or `DATA.grad.weeks` array. Each week
looks like this:

```js
{ week: 5, topic: "Traffic Safety", desc: "...", link: "" },
```

Paste your file/slide/Drive link between the quotes in `link: ""`, e.g.:

```js
{ week: 5, topic: "Traffic Safety", desc: "...", link: "https://drive.google.com/..." },
```

A week with an empty `link: ""` simply shows no link button — nothing breaks.
Save the file and re-upload it to GitHub; that's the whole update process.

## How to update other content

- **Grading** — edit the `grading` array for each course (`label` + `pct`). The
  percentages aren't checked against 100 automatically, so double-check they add up.
- **Showcase (past projects)** — edit the `showcase` array. `color` is a 6-digit
  hex code without the `#` — the cover image is drawn live from title/who/semester,
  no image file needed. The two rows marked `EXAMPLE` are placeholders — replace
  them with real past projects or delete them.
- **Groups (EMI only)** — edit the `groups` array (`name` + `members` as a plain
  string of names). Set `groups: null` for a course that doesn't use groups (the
  grad seminar is already set this way, since it's individual).

## How "Submit progress" works

There's no database. The form just builds a `mailto:` link and hands it to the
browser — clicking "Send" opens the student's own email app (Gmail, Outlook,
Mail, whatever they have set as default) with:

- **To:** yutung@gm.ntunhs.edu.tw (already filled in)
- **Subject:** `NTNU <course name> 進度回報 - <what they typed as their name/group>`
- **Body:** whatever they typed in the progress box

Nothing is sent from the page itself — it only opens the student's mail client
with everything pre-filled; they still have to hit send on their end. If a
student has no email app configured on the device they're using (e.g. some
phone browsers), the mailto link may not do anything visible — worth mentioning
to the class once at the start of term.

## What got removed from the old version, and why

Attendance codes, the admin dashboard, live comments, and the Google Sheet
backend all existed to support multiple people reading and writing data at the
same time. Since you're the only one editing content now (students only submit
via email, they don't write to the site), none of that infrastructure is needed
— and removing it also removes the entire class of bugs that came with keeping
a live spreadsheet and a deployed script in sync with the website.

If you used the old Apps Script version, you can leave that Google Sheet and
deployment alone (it costs nothing sitting idle) or delete them — this new
version doesn't call them at all.

## Midterm progress report (EMI)
`site/midterm.html` + `site/midterm.js`: group form for lesson-plan and Base44 game progress.
Press "Open email" -> mailto to the instructor with the report in the body (long reports are copied to clipboard instead).
Edit questions in midterm.html; required fields are listed in the REQUIRED array in midterm.js.
