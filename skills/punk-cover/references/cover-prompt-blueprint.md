# Punk Cover Prompt Blueprint

Compile this shape with derived content plus one selected style’s `META.md` anchors and `STYLE.md` visual language. Rewrite it as a natural, complete prompt; never leave placeholders or append the raw style atom.

```text
# {style_name} cover prompt

Create one {platform} editorial cover at {ratio}{output_dimensions_if_any} using {style_name} ({style_id}). The style must organize every visual decision, not act as a decorative filter.

## Content

- A-layer / short visual title: {short_high_impact_title}
- B-layer / complete title or meaning: {complete_title}
- C-layer / optional subtitle or context: {subtitle}
- Summary: {summary}
- Visual subject: {visual_subject}
- Audience and use: {audience}; {use_case}
- Mood: {mood}
- One visual metaphor: {metaphor}
- Language: {language}
- Avoid: {banned_elements}

Use only these derived fields. Do not copy the source article body or expose analysis. At first glance the topic must be clear; at second glance the metaphor should emerge.

## Style

Apply visibly:
- Anchors: {style_anchors}
- Cover adaptation: {cover_shape_adaptation}
- Preserve: {must_preserve}
- Avoid: {avoid_when_applying_to_cover}
- Color, material, and texture: {color_material_texture_rules}

Express title, subject, background, supporting text, texture, palette, and metaphor through this one style. Do not mention traits that are not visible.

## Composition

- Primary visual center: {primary_visual_center}
- Secondary elements: {secondary_visual_elements}
- Background/space: {background_space_system}
- Foreground/background layering: {layering_strategy}
- Reading path: {reading_path}

Compose specifically for {ratio}; keep the topic legible in a fast social feed. Fuse text and image instead of placing a caption over an unrelated illustration. The style determines where text lives and how it interacts with objects, textures, geometry, and depth.

## Typography

When text is requested, keep the complete title accurate and readable; do not misspell, crop, or excessively distort it. Use little supporting text, with correct Chinese characters where applicable. Only when the user or selected style explicitly requests no text, use title fields solely to derive the visual and render no typography. Supporting text must clarify the concept, never become filler.

## Constraints

Avoid generic illustration, PPT/course-cover layouts, information cards, e-commerce ads, unrelated decoration, unreadable or missing titles, copied article text, and {avoid_when_applying_to_cover}.

Generate one final image only—no explanations, alternatives, grids, contact sheets, mockups, or multi-option compositions.
```

For a multi-size suite, compile this blueprint separately for every target. Preserve content, metaphor, style, material, and palette, but independently recompose scale, typography, whitespace, reading direction, layering, and space. Each prompt requests one image and names its target ratio or dimensions.
