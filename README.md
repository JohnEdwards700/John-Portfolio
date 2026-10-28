# John Edwards Portfolio

Astro portfolio for John Edwards, published on GitHub Pages at <https://johnedwards700.github.io/John-Portfolio/>.

The design and preservation decisions are recorded in [the rebuild plan](docs/REBUILD_PLAN.md).

## Update project or experience content

Git is the source of truth. Edit the matching Markdown file under `src/content/projects/` or `src/content/experience/`. Keep its filename stable to preserve the detail page URL. Update the YAML frontmatter to match the collection schema in `src/content.config.ts`, and put the story itself in the Markdown body below the `---` separator.

Project entries include `title`, `summary`, `subtitle`, `timeframe`, `role`, `status`, `technologies`, and `keyContributions`. Optional fields include `featuredOrder`, `demoUrl`, `sourceUrl`, `artifactUrl`, `artifactLabel`, `image`, `imageAlt`, and `outcome`. Experience entries include `title`, `organization`, `timeframe`, `location`, `summary`, `technologies`, and `keyContributions`; `featuredOrder` is optional. Lower `featuredOrder` values appear first. Only add public links and images that are cleared to publish. Local image files should live under `public/` and use a root-relative path such as `/images/project-shot.png`.

To publish an update:

1. Edit the Markdown and add or update any approved media in `public/`.
2. Run `npm ci`, `npm run build`, and `npm run verify:build` locally.
3. Commit and push the change to `main`.

GitHub Actions validates the content during the Astro build and deploys the generated `dist/` site to GitHub Pages. There is no database or admin login; the committed Markdown files are the editable source.

## Local development

Requires Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Create the production build with `npm run build`; preview it locally with `npm run preview`.

## Release check

Check the current resume, project statuses, and publishable media before making a public release.
