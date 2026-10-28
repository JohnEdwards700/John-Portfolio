import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const base = '/John-Portfolio/';
const expected = [
  'index.html',
  'projects/index.html',
  'experience/index.html',
  'projects/document-management-system/index.html',
  'projects/elephant-noise-cleanup/index.html',
  'projects/2026-sequence-pattern-discovery-research/index.html',
  'projects/reinforcement-learning-drone-simulation/index.html',
  'experience/crm-analyst-intern-university-of-dallas/index.html',
  'experience/software-developer-intern-cesolutions/index.html',
  'experience/president-university-of-dallas-martial-arts-club/index.html',
  'experience/member-programming-team-university-of-dallas/index.html',
];

const failures = [];
for (const page of expected) {
  if (!existsSync(join(dist, page))) failures.push(`Missing page: ${page}`);
}

function visit(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) { visit(path); continue; }
    if (!path.endsWith('.html')) continue;
    const html = readFileSync(path, 'utf8');
    if (!/<title>[^<]+<\/title>/.test(html)) failures.push(`${relative(dist, path)} has no page title`);
    if (!/<meta name="description" content="[^"]+"/.test(html)) failures.push(`${relative(dist, path)} has no description`);
    for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
      const url = match[1].split(/[?#]/, 1)[0];
      if (!url.startsWith(base)) continue;
      const asset = url.slice(base.length);
      const target = join(dist, asset);
      if (!existsSync(target) && !existsSync(join(target, 'index.html'))) {
        failures.push(`${relative(dist, path)} links to missing ${url}`);
      }
    }
  }
}

if (existsSync(dist)) visit(dist);
else failures.push('dist/ does not exist; run npm run build first');

if (existsSync(join(dist, 'index.html')) && !readFileSync(join(dist, 'index.html'), 'utf8').includes('projects|experience')) {
  failures.push('Missing legacy project/experience hash URL redirect');
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Verified ${expected.length} pages and all generated internal links/assets.`);
}
