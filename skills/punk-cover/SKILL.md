---
name: punk-cover
description: Create reusable cover-image prompts for articles, Xiaohongshu, WeChat, X, posters, and long-form text with bundled Punk styles. Confirms the target and style, summarizes source content, then saves and returns prompt text only.
---

# Punk Cover

Create one editorial cover prompt per target by compiling derived content and exactly one bundled style into the cover blueprint.

## Resources

- Style selection: `references/style-catalog.md`
- Prompt structure: `references/cover-prompt-blueprint.md`
- Selected style only: `styles/{style-id}/META.md` and `styles/{style-id}/STYLE.md`
- A style is eligible only when `META.md` lists `cover` or `poster` in `outputs`.

## Workflow

1. **Derive content.** Preserve the complete user title or topic. From long input, derive only a concise title hierarchy, 1–3 sentence summary, visual subject, audience, mood, one metaphor, and banned elements. Never copy the source body into the prompt or image.

2. **Resolve the target.**
   - Xiaohongshu: `3:4`; WeChat public account: `2.35:1`; X: `5:2`; Open Graph (OG): `2400 × 1260` (`40:21`).
   - Preserve a custom ratio. Derive it from exact dimensions when no ratio is given; ask which controls if dimensions and ratio conflict.
   - Default to one prompt. A multi-size suite requires at least two explicit targets and one independently composed prompt per target—never reuse one composition with crop, stretch, padding, grid, or contact-sheet instructions.
   - Ask for the platform/ratio only when none is provided and the user has not said `auto`. Under `auto`, infer the platform from stated use; with no publication context, use `3:4`.

3. **Resolve one style.**
   - Use a specified catalog style or an unambiguous complete visual direction that matches one.
   - Honor the selected `META.md` required fields. In particular, `brand-collaboration-connection` requires two explicit logo images/references; if either is missing, ask for it and stop.
   - Otherwise recommend exactly three eligible styles from the catalog, with one content-specific sentence each, and ask the user to choose or provide a custom direction.
   - Auto-select only when the user explicitly asks to decide automatically.

4. **Gate.** When either target or style is unresolved, stop after asking. For article-only input, ask for the platform/ratio and include three style recommendations in the same response. Do not create files or compile a prompt yet.

5. **Compile.** Read the blueprint and exactly one selected `META.md` and `STYLE.md`. Fuse the task fields with the style’s materials, spatial logic, title treatment, typography, texture, palette, `style_anchors`, `cover_shape_adaptation`, `must_preserve`, and `avoid_when_applying_to_cover`.
   - Produce one integrated cover brief; do not append the raw style atom, mix styles, or add a second style section.
   - Inline the selected style’s concrete visual rules so the prompt is self-contained. Never include its name, Style ID, resource path, or a reference to a “selected style” in the saved prompt or final response.
   - Resolve every `{{...}}` placeholder. Merge unmatched details into the nearest section.
   - Keep the complete title readable; a long title may use a short visual A-layer plus complete B-layer and optional C-layer. If the selected style/user explicitly requests no text, retain the title only for semantic derivation and omit visible typography.
   - Do not include analysis or style-selection rationale.
   - For each suite target, preserve content, metaphor, style, material, and palette while recomposing scale, typography, whitespace, reading direction, and spatial behavior.

6. **Save and return prompt text.**
   - Single prompt: `.context/{slug}/{style-id}.md`
   - Write prompt text only, then return the full prompt and saved path for each target.
   - Never call image-generation tools or generate, download, or save image files.
