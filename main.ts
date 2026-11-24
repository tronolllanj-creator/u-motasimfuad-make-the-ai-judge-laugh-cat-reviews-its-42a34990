// cat-reviews: one funny single-line one-star cat review, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const filePath = join(dir, 'entry.txt');
const text = "Closed the bedroom door at 3 AM. A catastrophic breach of our lease agreement, leaving me no choice but to sing the songs of my ancestors.";

writeFileSync(filePath, text, 'utf8');
