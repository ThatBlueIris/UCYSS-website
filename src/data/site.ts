/* ============================================================================
   SITE DATA — the one file to edit for the numbers on this website
   ============================================================================

   HOW TO EDIT THIS FILE (no coding experience needed)
   ----------------------------------------------------
   Open it on GitHub: click the file, click the pencil icon, change the words or
   numbers, then scroll down and press "Commit changes". That is the whole
   process. Nothing else needs editing anywhere on the site.

   TO CHANGE THE MEMBER COUNT
   --------------------------
   Find this block near the top of the file:

       export const figures = {
         members: { value: 92, label: "Members" },

   Change `92` to the new number. That single digit updates the homepage
   statistics and anywhere else the member count appears. Leave the quotation
   marks off a number, and put them on if you are writing text instead
   (for example "Most weeks").

   TO ADD A SESSION
   ----------------
   Scroll to `export const sessions` near the bottom. Copy one of the existing
   blocks, paste it just after the first `{` in the list, and change the words.
   The session will appear on the homepage automatically. Put the newest session
   first — the list is shown in the order you write it.

   A session block looks like this:

       {
         topic: "OSINT",        <- the topic, as it was taught. Required.
         date: "",              <- the date, as "2026-08-28". Put "" if unknown.
         presenter: "",         <- who taught it. Put "" if unknown.
         note: "",              <- one short line about it. "" hides the line.
       },

   Anything left as "" is handled: an empty date shows a small "date to add"
   marker so it is obvious it still needs filling in, and an empty presenter or
   note is simply left out of the page. You never have to delete a field.

   ---------------------------------------------------------------------------
   A NOTE ON THE FUTURE
   ---------------------------------------------------------------------------
   This file is deliberately plain data: values, strings and lists. There is no
   code in here, nothing is calculated, and nothing is derived from anything
   else. Every number is written out in full, exactly as it should appear.

   That is on purpose. A content management system is planned for later, where
   someone without GitHub access can edit the same values through a form
   instead. Because this file is already plain data, moving it then is a matter
   of pointing that form at these values — there is no logic to rewrite and no
   risk of the two versions disagreeing.

   Please keep it that way: plain values, no functions, no calculations.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   The figures shown in the homepage statistics row.

   Four numbers, and only four. Change the value; leave the labels alone unless
   you want to reword them. `approximate: true` adds a "~" in front of the
   number, so use it for anything rounded or estimated.
   ------------------------------------------------------------------------- */
export const figures = {
	members: { value: 92, label: "Members" },
	sessionsRun: { value: 20, label: "Sessions and activities", approximate: true },
	ctfsEntered: { value: 4, label: "CTFs entered" },
	meetupCadence: { value: "Wednesdays", label: "Usual meetup day" },
} as const;

/* ---------------------------------------------------------------------------
   The capture-the-flag competitions we have entered as a team.
   Add a new name to the end of the list, one per line, with the quotation mark
   and a comma:  "Some New CTF",

   When you add a competition here, bump `ctfsEntered` above to match.

   SunCTF is the one the university backs (transport funding). The rest the
   team funds itself.
   ------------------------------------------------------------------------- */
export const ctfNames = [
	"SunCTF",
	"Bahtera CTF",
	"Maltego OSINT CTF",
	"Nadi CTF",
] as const;

/* ---------------------------------------------------------------------------
   The sharing sessions, newest first.

   Only the three below are confirmed, so only the three below are listed. Put
   "" in any field you do not know yet rather than guessing — a visible gap is
   better than a wrong date or a made-up name. See "TO ADD A SESSION" at the
   top of this file.
   ------------------------------------------------------------------------- */
export interface SharingSession {
	/** What was taught. This is the only required field. */
	topic: string;
	/** Session date as YYYY-MM-DD, or "" if not recorded yet. */
	date: string;
	/** Who ran it, or "" if not recorded yet. Left out of the page when empty. */
	presenter: string;
	/** One short line on what it covered, or "" to leave it out. */
	note: string;
}

export const sessions: SharingSession[] = [
	{
		topic: "OSINT",
		date: "",
		presenter: "",
		note: "",
	},
	{
		topic: "Web exploitation with Burp Suite",
		date: "",
		presenter: "",
		note: "",
	},
	{
		topic: "Linux for beginners",
		date: "",
		presenter: "",
		note: "",
	},
];

/* ---------------------------------------------------------------------------
   THE ARCHIVE — the list under "The archive" heading on the homepage.

   This is the site's credibility section, so keep it honest and keep it
   representative. Three things to watch:

   1. Do NOT list sharing sessions here. They live in the `sessions` list
      above, and the homepage hero already shows them. Carrying the same rows
      in both places made one page say "OSINT, Burp, Linux" three times over,
      which reads as filler. This archive is for the things the hero does not
      show: workshops, labs, conventions, visits and external meetups.

   2. Leave attendance numbers out. "38 students went to the convention" is not
      the thing worth saying about an event. Say what happened instead.

   3. When more weekly sessions get recorded, revisit this split. It works
      today because the hero has three topics and the archive has four other
      things. Do not assume that balance holds as the list grows.

   A block looks like this:

       {
         kind: "Sharing session",   <- one of: Sharing session, Lab, Workshop,
                                       Convention, Meetup, Visit
         title: "OSINT",            <- what it was. Required.
         date: "2026-08-28",        <- "YYYY-MM-DD". Put "" if unknown.
         body: "",                  <- one or two plain lines. "" hides the line.
       },

   Empty `date` renders a small "date to add" marker rather than a guess.
   ------------------------------------------------------------------------- */
export interface ActivityEntry {
	/** What sort of thing this was. Shown as a small mono label. */
	kind: string;
	/** The name of the session, event or visit. */
	title: string;
	/** Date as YYYY-MM-DD, or "" if not recorded yet. */
	date: string;
	/** One or two plain lines on what it actually involved. "" hides the line. */
	body: string;
}

export const activityLog: ActivityEntry[] = [
	{
		kind: "Convention",
		title: "CyberDSA 2026",
		date: "2026-10-05",
		body: "MITEC, Kuala Lumpur. A national convention on secure AI, digital trust and critical infrastructure, attended with the wider FCOM delegation under Pixora's ATAP allocation.",
	},
	{
		kind: "Workshop",
		title: "The Art of OSINT",
		date: "2026-08-28",
		body: "Arif Abd Kahar's 26-slide deck: digital footprint, ethics under Malaysian cyber law, dorking, SOCMINT, GEOINT and TECHINT — closing on a self-audit of your own cooked footprint.",
	},
	{
		kind: "Lab",
		title: "Hack The Box, first lab",
		date: "2026-08-05",
		body: "Classroom CR 5.20, 10:30pm. Our first hands-on lab together, run with Pixora's protocol, technical and media teams.",
	},
	{
		kind: "Visit",
		title: "CyberSecurity Malaysia",
		date: "2026-06-25",
		body: "A morning at Cyberjaya with the UPTM delegation — briefing, questions, and a look at how a national CERT actually operates.",
	},
];
