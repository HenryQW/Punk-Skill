# Punk Cover Prompt Blueprint

Compile this shape with derived content plus one selected style’s `META.md` anchors and `STYLE.md` visual language. Rewrite it as a natural, complete prompt; never leave placeholders, append the raw style atom, or expose the style name, Style ID, or resource path.

```text
# Cover image prompt

Create one editorial cover at {output_dimensions} ({ratio}). Organize every visual decision through the concrete direction below, not as a decorative filter.

## Visible Text Whitelist

Render only the exact quoted strings listed here:
- Main title: "{short_high_impact_title}"
- Optional concise subtitle: {quoted_derived_subtitle_or_none}
- Other visible text: {explicitly_requested_copy_or_none}

Do not invent, paraphrase, or render any other words, letters, numbers, labels, captions, mastheads, issue data, or filler text.

## Semantic Context — Never Render as Text

- Complete title or topic: {complete_title_or_topic}
- Summary: {summary}
- Visual subject: {visual_subject}
- Audience and use: {audience}; {use_case}
- Mood: {mood}
- One visual metaphor: {metaphor}
- Language: {language}
- Avoid: {banned_elements}

Use these fields only to decide the imagery and composition. Do not copy the source article body, render any semantic-context field, or expose analysis. At first glance the topic must be clear; at second glance the metaphor should emerge.

## Visual Direction

Render these rules visibly:
- Key visual traits: {style_anchors}
- Shape adaptation: {cover_shape_adaptation}
- Preserve: {must_preserve}
- Avoid: {avoid_when_applying_to_cover}
- Color, material, and texture: {color_material_texture_rules}

Unify title, subject, background, supporting text, texture, palette, and metaphor through these rules. Do not mention traits that are not visible.

## Composition

- Primary visual center: {primary_visual_center}
- Secondary elements: {secondary_visual_elements}
- Background/space: {background_space_system}
- Foreground/background layering: {layering_strategy}
- Reading path: {reading_path}

Compose specifically for {ratio} and the exact output dimensions. Keep the topic immediately legible. Fuse whitelisted text and image instead of placing a caption over an unrelated illustration. The visual direction determines where allowed text lives and how it interacts with objects, textures, geometry, and depth.

## Typography

Render only the visible-text whitelist, exactly and readably; do not misspell, crop, excessively distort, duplicate, or expand it. The whitelist contains one short title and may contain one concise, accurately derived subtitle. Include other supporting copy only when explicitly listed. When the whitelist is empty, render no typography. Never turn semantic context into visible text.

## Constraints

Avoid generic illustration, PPT/course-cover layouts, information cards, e-commerce ads, unrelated decoration, unreadable or missing whitelisted text, copied article text, invented copy, and {avoid_when_applying_to_cover}.

Generate one final image only—no explanations, alternatives, grids, contact sheets, mockups, or multi-option compositions.
```

For a multi-size suite, compile this blueprint separately for every requested size. Preserve content, metaphor, style, material, and palette, but independently recompose scale, typography, whitespace, reading direction, layering, and space. Each prompt requests one image and names its exact dimensions and derived ratio.
