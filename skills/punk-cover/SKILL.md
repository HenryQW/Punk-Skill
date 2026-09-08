---
name: punk-cover
description: Create reusable Open Graph or explicitly sized cover-image prompts for articles, posters, and long-form text with bundled Punk styles. Confirms the dimensions and style, summarizes source content, then saves and returns prompt text only.
---

# Punk Cover

Create one editorial cover prompt per requested size by compiling derived content and exactly one bundled style into the cover blueprint.

## Resources

- Style selection: `references/style-catalog.md`
- Prompt structure: `references/cover-prompt-blueprint.md`
- Selected style only: `styles/{style-id}/META.md` and `styles/{style-id}/STYLE.md`
- A style is eligible only when `META.md` lists `cover` or `poster` in `outputs`.

## Workflow

1. **Derive content.** Preserve the complete user title or topic as semantic context. From long input, derive only a short visual title, 1–3 sentence summary, visual subject, audience, mood, one metaphor, and banned elements. The source body is context only: never copy it into the prompt or make it eligible visible text.

2. **Resolve the dimensions.**
   - Use exact dimensions supplied in the request. Otherwise default to Open Graph (OG): `2400 × 1260` (`40:21`).
   - Derive the ratio from exact dimensions; exact dimensions control if a supplied ratio conflicts.
   - Default to one prompt. A multi-size suite requires at least two explicit dimensions and one independently composed prompt per size—never reuse one composition with crop, stretch, padding, grid, or contact-sheet instructions.
   - Do not infer or optimize for social-platform presets.

3. **Resolve one style.**
   - Use a specified catalog style or an unambiguous complete visual direction that matches one.
   - Honor the selected `META.md` required fields. In particular, `brand-collaboration-connection` requires two explicit logo images/references; if either is missing, ask for it and stop.
   - Otherwise recommend exactly three eligible styles from the catalog, with one content-specific sentence each, and ask the user to choose or provide a custom direction.
   - Auto-select only when the user explicitly asks to decide automatically.

4. **Gate.** When the style is unresolved, stop after recommending three styles and asking the user to choose. Missing dimensions do not block compilation; use the OG default. Do not create files or compile a prompt until the style is resolved.

5. **Compile.** Read the blueprint and exactly one selected `META.md` and `STYLE.md`. Fuse the task fields with the style’s materials, spatial logic, title treatment, typography, texture, palette, `style_anchors`, `cover_shape_adaptation`, `must_preserve`, and `avoid_when_applying_to_cover`.
   - Produce one integrated cover brief; do not append the raw style atom, mix styles, or add a second style section.
   - Inline the selected style’s concrete visual rules so the prompt is self-contained. Never include its name, Style ID, resource path, or a reference to a “selected style” in the saved prompt or final response.
   - Resolve every `{{...}}` placeholder. Merge unmatched details into the nearest section.
   - Build an exact visible-text whitelist. Default to the short visual title and, when it adds useful context, one concise subtitle accurately derived from the source. Add any other copy only when the user explicitly requests it or the selected style requires it. Treat the complete title/topic, summary, audience, and other context as never-render text. If the selected style/user explicitly requests no text, use all text fields only for semantic derivation and leave the whitelist empty.
   - Do not include analysis or style-selection rationale.
   - For each requested size, preserve content, metaphor, style, material, and palette while recomposing scale, typography, whitespace, reading direction, and spatial behavior.

6. **Save and return prompt text.**
   - Single prompt: `.context/{slug}/{style-id}.md`
   - Write prompt text only, then return the full prompt and saved path for each requested size.
   - Never call image-generation tools or generate, download, or save image files.
