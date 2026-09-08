import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const skillDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => fs.readFileSync(file, "utf8");
const failures = [];
const fail = (message) => failures.push(message);
const styleIds = [
  "pixel-avatar",
  "grotesque-soul-sketch",
  "messy-crayon-pet-portrait",
  "fashion-sketch-observation",
  "polaroid-keepsake",
  "minimal-paper-acrylic-block-illustration",
  "surreal-pop-up-paper-landscape",
];

for (const relative of [
  "SKILL.md",
  "references/style-catalog.md",
  "references/avatar-prompt-blueprint.md",
]) {
  if (!fs.existsSync(path.join(skillDir, relative))) fail(`Missing ${relative}`);
}

if (!failures.length) {
  const skill = read(path.join(skillDir, "SKILL.md"));
  for (const contract of [
    "exactly one bundled style",
    "Default to `1:1`",
    "punk-assets/punk-avatar/{slug}/prompts/avatar.md",
    "Never call image-generation tools or generate, download, or save image files.",
  ]) {
    if (!skill.includes(contract)) fail(`SKILL.md missing contract: ${contract}`);
  }
  for (const forbidden of ["image_gen", "/avatar.png"]) {
    if (skill.includes(forbidden)) fail(`SKILL.md contains forbidden image output: ${forbidden}`);
  }

  const catalog = read(path.join(skillDir, "references/style-catalog.md"));
  const catalogIds = new Set(
    [...catalog.matchAll(/\|\s*[^|\n]+\|\s*`([a-z0-9-]+)`\s*\|/g)].map((match) => match[1]),
  );

  for (const id of styleIds) {
    for (const file of ["META.md", "STYLE.md"]) {
      if (!fs.existsSync(path.join(skillDir, "styles", id, file))) {
        fail(`styles/${id} missing ${file}`);
      }
    }
    if (!catalogIds.has(id)) fail(`Catalog missing ${id}`);
  }
  for (const id of catalogIds) {
    if (!styleIds.includes(id)) fail(`Catalog contains unsupported style ${id}`);
  }

  const surrealDir = path.join(skillDir, "styles", "surreal-pop-up-paper-landscape");
  for (const file of ["references/before-after.md", "references/final-artwork.md"]) {
    if (!fs.existsSync(path.join(surrealDir, file))) fail(`Missing surreal mode ${file}`);
  }
  const surreal = read(path.join(surrealDir, "STYLE.md"));
  for (const anchor of ["before-after", "final-artwork", "75°–85°", "10%–20%"] ) {
    if (!surreal.includes(anchor)) fail(`Surreal style missing anchor: ${anchor}`);
  }
}

if (failures.length) {
  console.error("punk-avatar validation failed:");
  failures.forEach((item) => console.error(`- ${item}`));
  process.exit(1);
}

console.log("punk-avatar validation passed for 7 avatar styles.");
