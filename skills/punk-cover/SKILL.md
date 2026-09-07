---
name: punk-cover
description: Create cover images or reusable prompts for articles, Xiaohongshu, WeChat, X, posters, and long-form text with bundled Punk styles. Confirms the target and style, summarizes source content, saves the prompt, and generates an image when available.
---

# Punk Cover

Create one editorial cover per target by compiling derived content and exactly one bundled style into the cover blueprint.

## Resources

- Style selection: `references/style-catalog.md`
- Prompt structure: `references/cover-prompt-blueprint.md`
- Selected style only: `styles/{style-id}/META.md` and `styles/{style-id}/STYLE.md`
- A style is eligible only when `META.md` lists `cover` or `poster` in `outputs`.

## Workflow

1. **Derive content.** Preserve the complete user title or topic. From long input, derive only a concise title hierarchy, 1–3 sentence summary, visual subject, audience, mood, one metaphor, and banned elements. Never copy the source body into the prompt or image.

2. **Resolve the target.**
   - Xiaohongshu: `3:4`; WeChat public account: `2.35:1`; X: `5:2`.
   - Preserve a custom ratio. Derive it from exact dimensions when no ratio is given; ask which controls if dimensions and ratio conflict.
   - Default to one image. A multi-size suite requires at least two explicit targets and one independently composed prompt/image per target—never crop, stretch, pad, grid, or contact-sheet one composition.
   - Ask for the platform/ratio only when none is provided and the user has not said `auto`. Under `auto`, infer the platform from stated use; with no publication context, use `3:4`.

3. **Resolve one style.**
   - Use a specified catalog style or an unambiguous complete visual direction that matches one.
   - Honor the selected `META.md` required fields. In particular, `brand-collaboration-connection` requires two explicit logo images/references; if either is missing, ask for it and stop.
   - Otherwise recommend exactly three eligible styles from the catalog, with one content-specific sentence each, and ask the user to choose or provide a custom direction.
   - Auto-select only when the user explicitly asks to decide automatically.

4. **Gate.** When either target or style is unresolved, stop after asking. For article-only input, ask for the platform/ratio and include three style recommendations in the same response. Do not create files or generate an image yet.

5. **Compile.** Read the blueprint and exactly one selected `META.md` and `STYLE.md`. Fuse the task fields with the style’s materials, spatial logic, title treatment, typography, texture, palette, `style_anchors`, `cover_shape_adaptation`, `must_preserve`, and `avoid_when_applying_to_cover`.
   - Produce one integrated cover brief; do not append the raw style atom, mix styles, or add a second style section.
   - Resolve every `{{...}}` placeholder. Merge unmatched details into the nearest section.
   - Keep the complete title readable; a long title may use a short visual A-layer plus complete B-layer and optional C-layer. If the selected style/user explicitly requests no text, retain the title only for semantic derivation and omit visible typography.
   - Do not include analysis or style-selection rationale.
   - For each suite target, preserve content, metaphor, style, material, and palette while recomposing scale, typography, whitespace, reading direction, and spatial behavior.

6. **Save, then generate.**
   - Single prompt: `punk-assets/punk-cover/{slug}/prompts/cover.md`
   - Suite prompts: `punk-assets/punk-cover/{slug}/prompts/cover-{ratio-or-size}.md`
   - Generate one image per prompt by default when an image tool such as `image_gen` is available, unless the user requests prompt-only output.
   - Save only an explicit current-run path, URL, or bytes as `punk-assets/punk-cover/{slug}/cover.png` or `punk-assets/punk-cover/{slug}/cover-{ratio-or-size}.png`. Never infer artifacts by scanning shared output directories or create a fake file from an inline-only preview.
   - If generation is unavailable, return the prompt path and full prompt.
