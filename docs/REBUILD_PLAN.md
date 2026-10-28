# Portfolio rebuild plan

Last reviewed: 2026-10-21

## Goal and audience

Build a memorable, fast portfolio for software engineering and forward deployed engineering applications. A visitor should understand John Edwards's strengths and find a relevant project within one minute, then be able to inspect the problem, John's contribution, technical decisions, and evidence without opening a demo. When a public demo or source is available, it should be one click away.

Git is the source of truth. Updating a project means editing one content file and its media, pushing the change, and letting checks and deployment publish it. No database or admin login is needed for the first release.

## Current product contract to preserve

- The existing public entry point is `https://johnedwards700.github.io/John-Portfolio/`.
- Visitors can reach an introduction, about, projects, experience, education/coursework, skills, contact links, and the resume.
- Four project stories and four experience stories have stable slugs in `src/data/portfolioData.js`.
- The profile photo, resume PDF, LinkedIn, GitHub, and email links are existing assets or destinations.
- GitHub Pages deploys on pushes to `main`.
- Existing `/#/projects/:slug` and `/#/experience/:slug` links should continue to resolve after the rebuild.

Preserve the warm light palette, clear typography, personal photo, and case-study intent. The current carousels and abstract gradient panels are implementation choices, not protected workflows.

## Editorial direction: a working notebook

The visual idea is a concise engineering field notebook: projects are numbered entries with strong titles, a small evidence strip, and marginal notes explaining decisions. Use warm paper, near-black ink, one restrained rust or cobalt accent, a serif display face with plain sans body text, and monospaced labels for dates/metadata. Real screenshots, architecture sketches, and specific details carry the visual interest. Avoid glass cards, glowing orbs, oversized gradients, generic AI imagery, animated counters, and stacks of interchangeable feature cards.

The landing page should feel like an edited selection of work, not a dashboard. One intentional interaction is enough: a compact project index that lets visitors jump to an entry. All projects remain visible in ordinary page flow; no content is hidden behind a carousel.

## Information architecture

1. Home: exact positioning statement, immediate resume/contact actions, featured work, brief experience proof, approach, and contact.
2. Projects index: visible project list with a short description, role, status, stack, and direct actions for demo, source, and case study when available.
3. Project detail: 30-second summary; problem and users; scope and role; constraints; selected decisions and trade-offs; artifacts and demo; outcome; lessons and next step.
4. Experience: concise index and individual stories that emphasize stakeholders, responsibility, collaboration, systems, and outcomes.
5. About: a human introduction and a curated skills map that links skills to evidence. Keep coursework concise.

The homepage should provide the gist of each featured project for someone who never opens a detail page. Case studies should use precise, verifiable claims. Unknown metrics stay qualitative, never fabricated.

## Content and publishing architecture

- Build a static Astro site with content collections for projects and experience. Use small client-side enhancements only where an interaction materially helps.
- Store one Markdown file per project and experience, with schema validation for title, summary, role, date, status, technologies, featured order, optional public links, and image metadata.
- Keep body copy in the same file as the entry. Publish sanitized screenshots and diagrams under `public/` with descriptive alternative text. Preserve original legacy data until migration is verified.
- Set `site` and `base` for the existing GitHub Pages URL, and emit static routes that can be opened directly.
- On build, validate content and fail for missing required fields or broken local image references. Pushes to `main` build and deploy through GitHub Actions. Editing in GitHub's web UI is an acceptable lightweight UI.
- A future Git-backed CMS may offer an editing form, but should commit to the same content files. Do not introduce a separate database unless a concrete workflow needs it.

## Candidate stories to review

Current site: Document Management System, Reinforcement Learning Drone Simulation, Elephant Noise Cleanup, Sequence Pattern Discovery, CRM Analyst Intern, and Software Developer Intern. Local folders also contain Life Tracker, KMS, and VerbatimX. These are candidates only; verify John's role, rights to publish, current status, links, and safe visuals before adding or expanding them.

Prioritize three or four featured stories that together demonstrate: full-stack architecture, a real stakeholder or operational workflow, and a distinct technical specialty. For FDE roles, highlight discovery, integration, delivery, and user impact where evidence exists.

## Delivery sequence

1. Snapshot and audit existing content, links, dates, and assets. Keep old URL behavior.
2. Build the content schema and migrate current entries without losing text or slugs.
3. Implement the working-notebook visual system, home, project pages, experience pages, and responsive navigation.
4. Add real artifacts and direct demo/source links only where verified. Clearly label private, prototype, and research work.
5. Add metadata, accessible interaction, deployment automation, and content update documentation.
6. Review the rendered desktop and mobile site, revise weak compositions, and run build and route checks.

## Acceptance criteria

- A visitor can identify John's target work, open a relevant project, find the resume/contact links, and reach a public demo or source where one exists.
- Every existing project and experience slug has a working static detail page; legacy hash URLs reach the corresponding new page.
- Every project card is visible without operating a carousel and has a useful summary on the homepage or index.
- Each featured case study distinguishes John's contribution from team work and includes at least one real artifact or a clearly stated reason it cannot be shown.
- The site works at narrow and wide viewports, keyboard navigation is usable, focus is visible, images have meaningful alt text, and reduced-motion settings are honored.
- Build-time validation catches malformed content. A direct visit to a detail URL works on GitHub Pages. A documented Git edit and push publishes an update.
- No invented metrics, testimonials, capabilities, or public links. Time-sensitive profile and experience copy is reviewed before publishing.

## Known decisions and open content checks

- Hosting stays on GitHub Pages and updates stay Git-first.
- Existing site code is React/Vite; the rebuild uses Astro as recommended for static case studies.
- John confirmed the current headline should be **Software engineer**. The education dates remain historical facts from the existing portfolio.
- The four existing projects have verified public source repositories under `JohnEdwards700`. The sequence research report and drone demonstration video are linked from their respective repository READMEs. No stable public live demo was found for the other projects, so no live-demo URLs are claimed.
- The first three featured projects are Document Management System, Elephant Noise Cleanup, and Sequence Pattern Discovery. The drone project remains in the project index.
- Confirm the latest resume PDF before launch.

## Implementation notes

- The working-notebook direction uses numbered entries, margin notes, restrained typography, and simplified system-path sketches instead of the old carousel and gradient panels. These sketches are explanatory views based on project documentation, not product screenshots.
- The content migration corrected an important distinction: the Document Management System repository currently wires upload and retrieval, while file update and deletion remain part of the intended workflow rather than completed file routes.
- Four project and four experience slugs are generated as static pages. The legacy hash-link redirect is handled in the shared layout. The build verifier checks every generated internal link and expected route.
- A public release still benefits from current screenshots, an updated resume if available, and a visual review in a browser. No results or impact metrics were invented to fill those gaps.
