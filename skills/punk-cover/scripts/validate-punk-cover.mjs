import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const skillDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => fs.readFileSync(file, "utf8");
const failures = [];
const fail = (message) => failures.push(message);
const required = [
  "SKILL.md",
  "references/style-catalog.md",
  "references/cover-prompt-blueprint.md",
];

for (const relative of required) {
  if (!fs.existsSync(path.join(skillDir, relative))) fail(`Missing ${relative}`);
}

if (!failures.length) {
  const skill = read(path.join(skillDir, "SKILL.md"));
  for (const contract of [
    "exactly one bundled style",
    ".context/{slug}/{style-id}.md",
    "The source body is context only",
    "Build an exact visible-text whitelist",
    "Open Graph (OG): `2400 × 1260` (`40:21`)",
    "Do not infer or optimize for social-platform presets.",
    "Never include its name, Style ID, resource path",
    "Never call image-generation tools or generate, download, or save image files.",
  ]) {
    if (!skill.includes(contract)) fail(`SKILL.md missing contract: ${contract}`);
  }
  for (const forbidden of ["image_gen", "/cover.png", "Xiaohongshu", "WeChat"]) {
    if (skill.includes(forbidden)) fail(`SKILL.md contains forbidden contract: ${forbidden}`);
  }

  const blueprint = read(path.join(skillDir, "references/cover-prompt-blueprint.md"));
  for (const contract of [
    "## Visible Text Whitelist",
    "## Semantic Context — Never Render as Text",
    "Do not invent, paraphrase, or render any other words",
  ]) {
    if (!blueprint.includes(contract)) fail(`Prompt blueprint missing contract: ${contract}`);
  }
  for (const forbidden of ["{style_name}", "{style_id}", "{platform}"]) {
    if (blueprint.includes(forbidden)) fail(`Prompt blueprint exposes forbidden reference: ${forbidden}`);
  }

  const businessStyle = read(path.join(skillDir, "styles/business-magazine-front-page/STYLE.md"));
  for (const contract of [
    "可从来源内容准确提炼最多一个短副标题",
    "完整文章只用于理解主题、判断和视觉隐喻",
    "除白名单外，不得生成、改写或虚构任何文字",
  ]) {
    if (!businessStyle.includes(contract)) fail(`Business magazine style missing contract: ${contract}`);
  }

  const catalog = read(path.join(skillDir, "references/style-catalog.md"));
  for (const forbidden of ["Xiaohongshu", "WeChat", "For X,"]) {
    if (catalog.includes(forbidden)) fail(`Style catalog contains platform ranking: ${forbidden}`);
  }

  const stylesDir = path.join(skillDir, "styles");
  const styleIds = fs.readdirSync(stylesDir).filter((id) =>
    fs.statSync(path.join(stylesDir, id)).isDirectory(),
  );
  const catalogIds = new Set(
    [...catalog.matchAll(/\|\s*[^|\n]+\|\s*`([a-z0-9-]+)`\s*\|/g)].map((match) => match[1]),
  );

  for (const id of styleIds) {
    const dir = path.join(stylesDir, id);
    const metaPath = path.join(dir, "META.md");
    const stylePath = path.join(dir, "STYLE.md");
    if (!fs.existsSync(metaPath)) fail(`styles/${id} missing META.md`);
    if (!fs.existsSync(stylePath)) fail(`styles/${id} missing STYLE.md`);
    if (!catalogIds.has(id)) fail(`Catalog missing ${id}`);
    if (!fs.existsSync(metaPath)) continue;

    const meta = read(metaPath);
    if (!/outputs:\s*\[[^\]]*\b(cover|poster)\b[^\]]*\]/.test(meta)) {
      fail(`styles/${id}/META.md is not cover/poster eligible`);
    }
    for (const field of [
      "style_anchors:",
      "cover_shape_adaptation:",
      "must_preserve:",
      "avoid_when_applying_to_cover:",
    ]) {
      if (!meta.includes(field)) fail(`styles/${id}/META.md missing ${field}`);
    }
  }

  for (const id of catalogIds) {
    if (!styleIds.includes(id)) fail(`Catalog references missing style ${id}`);
  }

  if (styleIds.length !== 31) fail(`Expected 31 cover styles, found ${styleIds.length}`);
}

if (failures.length) {
  console.error("punk-cover validation failed:");
  failures.forEach((item) => console.error(`- ${item}`));
  process.exit(1);
}

console.log("punk-cover validation passed for 31 cover/poster styles.");
