# Punk Avatar Prompt Blueprint

Compile this shape with derived subject fields plus one selected style’s `META.md` and `STYLE.md`. Rewrite it as a natural, complete prompt; never leave placeholders, append the raw style atom, or expose the style name, Style ID, or resource path.

```text
# Avatar image prompt

Create one avatar or avatar-derived keepsake at {ratio}. Organize every visual decision through the concrete direction below, not as a decorative filter.

## Subject

- Type: {subject_type}
- Generation mode: {image_based_or_description_based}
- Identity: {subject_identity}
- Recognizable traits: {recognizable_traits}
- Optional name/text: {name_or_text}
- Intended use: {use_case}
- Background: {background_preference}
- Mood: {mood}
- Preserve: {preserve}
- Avoid: {avoid}

For image input, use the image as primary and preserve recognizability through selected silhouette, face/head, hair/fur, expression, posture, colors, clothing, accessories, and marks—not photorealistic copying. For text-only input, create the described fictional subject without claiming photo likeness. Omit the original environment unless one meaningful clue is requested and style-compatible.

## Visual Direction

Render these rules visibly:
- Intent and key visual traits: {style_intent}; {style_anchors}
- Subject/composition behavior: {subject_composition_behavior}
- Background behavior: {background_behavior}
- Color, material, and texture: {color_material_texture_rules}
- Preserve: {must_preserve}
- Avoid: {style_avoid}

Unify subject simplification, expression/posture or object silhouette, crop, frame, background, line, texture, color, and optional tiny text through these rules. Do not mention traits that are not visible.

## Composition and Crop

- Primary visual center: {primary_visual_center}
- Crop: {crop_strategy}
- Background/frame: {background_or_frame}
- Optional text behavior: {optional_text_behavior}

Use one primary subject unless requested otherwise. Keep the silhouette clear and identifying features away from the outer edge, readable at profile-picture size, against a simplified background.

For a keepsake card, preserve the recognizable instant-film frame, wide lower white margin, and a small handwritten name when provided, including at `1:1` unless a vertical ratio was requested.

## Constraints

Avoid cover/poster title hierarchy, generic social-cover composition, competing backgrounds, unrelated subjects, cropped identity features, oversized text, photorealistic copying unless requested and style-compatible, {avoid}, and {style_avoid}.

Generate one final image only—no explanations, alternatives, grids, contact sheets, or multi-option compositions.
```
