---
name: punk-avatar
description: Create avatars, pet portraits, keepsake cards, surreal paper portraits, or reusable prompts from images or text with bundled Punk styles. Resolves style and mode, preserves recognizable traits, saves the prompt, and generates an image when available.
---

# Punk Avatar

Create one avatar or avatar-derived artwork by compiling subject data and exactly one bundled style into the avatar blueprint.

## Resources

- Style selection: `references/style-catalog.md`
- Prompt structure: `references/avatar-prompt-blueprint.md`
- Selected style only: `styles/{style-id}/META.md` and `styles/{style-id}/STYLE.md`
- For `surreal-pop-up-paper-landscape`, also read exactly one selected mode reference:
  - `styles/surreal-pop-up-paper-landscape/references/before-after.md`
  - `styles/surreal-pop-up-paper-landscape/references/final-artwork.md`
- Never read cover resources during an avatar run.

## Workflow

1. **Derive the subject.** Treat images as primary. Classify the subject as person, pet, object, or unclear; extract only recognizable shape, face/head, hair/fur, eyes, expression, posture, signature colors, clothing, accessories, and marks. Use text for name, temperament, intended use, background, preserve, and avoid fields. Text-only input creates a fictional avatar and must not claim photo likeness.

2. **Resolve the ratio.** Default to `1:1` without asking and preserve any user ratio. For `surreal-pop-up-paper-landscape`, default to `3:2` in `before-after` mode and `3:4` in `final-artwork` mode. `polaroid-keepsake` remains `1:1` unless the user requests a vertical card.

3. **Resolve one style and any mode.**
   - Use a specified catalog style or an unambiguous complete visual direction that matches one only when the catalog subject and `META.md` input mode fit. On mismatch, ask for a compatible style or input; `pixel-avatar` supports image or text.
   - Otherwise recommend 2–3 styles compatible with both the subject and available input mode, then ask the user to choose. Auto-select only when explicitly requested.
   - For `surreal-pop-up-paper-landscape`, map comparison requests to `before-after` and single-result requests to `final-artwork`. If no mode is clear, ask which one and stop; never generate both by default.

4. **Gate.** Stop without creating files or generating when style or required mode is unresolved. Missing ratio is not a blocker.

5. **Compile.** Read the blueprint and exactly one selected `META.md` and `STYLE.md`, plus the selected surreal mode reference when applicable.
   - Fuse subject fields with the style’s subject treatment, composition, background, line/texture, color, typography, likeness, and negative constraints.
   - Produce one integrated avatar brief; do not append the raw style atom, mix styles, add a second style section, or import cover title/platform/article rules.
   - Resolve every style placeholder. Preserve recognizable traits for image input without promising biometric or photorealistic duplication unless the style requires realistic structure.
   - Keep the silhouette and identifying features readable at profile size and safely inside the crop. Do not include analysis or style-selection rationale.

6. **Save, then generate.**
   - Prompt: `punk-assets/punk-avatar/{slug}/prompts/avatar.md`
   - Generate one image by default when an image tool such as `image_gen` is available, unless the user requests prompt-only output.
   - Save only an explicit current-run path, URL, or bytes as `punk-assets/punk-avatar/{slug}/avatar.png`. Never infer artifacts by scanning shared output directories or create a fake file from an inline-only preview.
   - If generation is unavailable, return the prompt path and full prompt.
