---
name: Shunjid Rahman Showrov
description: A one-page résumé where a four-step promotion staircase carries the eye.
colors:
  ground: "#fafaf9"
  ink: "#0b0f0d"
  muted: "#555d59"
  accent: "#047857"
  step-1: "#a7dcc6"
  step-1-ink: "#05402d"
  step-2: "#5fbf98"
  step-3: "#047857"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Google Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  statement:
    fontFamily: "Google Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem (4.5rem from 640px)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Google Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem (2.25rem from 640px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  lead:
    fontFamily: "Google Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem (1.875rem to 2rem from 640px)"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "-0.02em"
  step-label:
    fontFamily: "Google Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem / 1.5rem / 1.875rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Google Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.556
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Google Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Google Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label-mono:
    fontFamily: "Google Sans Code, ui-monospace, SF Mono, monospace"
    fontSize: "0.7rem"
    fontWeight: 400
    letterSpacing: "0.025em"
    fontFeature: "tnum"
  figure-mono:
    fontFamily: "Google Sans Code, ui-monospace, SF Mono, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    fontFeature: "tnum"
rounded:
  none: "0px"
  full: "9999px"
spacing:
  gutter-mobile: "24px"
  gutter-sm: "40px"
  gutter-lg: "64px"
  gutter-xl: "80px"
  row: "24px"
  section-mobile: "64px"
  section-sm: "96px"
  date-column: "9rem"
  title-column: "16rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "8px"
    padding: "0 20px"
    height: "44px"
  button-primary-inverted:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "8px"
    padding: "0 20px"
    height: "44px"
  button-primary-inverted-hover:
    backgroundColor: "{colors.step-1}"
    textColor: "{colors.ink}"
  button-icon:
    textColor: "{colors.muted}"
    rounded: "{rounded.full}"
    size: "44px"
  button-icon-hover:
    textColor: "{colors.ink}"
  stair-step-1:
    backgroundColor: "{colors.step-1}"
    textColor: "{colors.step-1-ink}"
    rounded: "{rounded.none}"
    typography: "{typography.step-label}"
  stair-step-2:
    backgroundColor: "{colors.step-2}"
    textColor: "{colors.step-1-ink}"
    rounded: "{rounded.none}"
    typography: "{typography.step-label}"
  stair-step-3:
    backgroundColor: "{colors.step-3}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    typography: "{typography.step-label}"
  stair-step-top:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    typography: "{typography.step-label}"
  step-swatch:
    rounded: "{rounded.none}"
    size: "12px"
---

# Design System: Shunjid Rahman Showrov

## Overview

**Creative North Star: "The Promotion Staircase"**

The climb is the system. Four flat, square-cornered blocks rise from the bottom edge in a ramp from pale mint through emerald to near-black, and every other surface stays quiet so the staircase carries the eye. The page is a warm off-white sheet with near-black type, set in Google Sans at heavy display weights and Google Sans Code for dates and figures. There are no cards, no gradients, no shadows, and no scattered motion.

Density is editorial and generous: a narrow title column beside a wide content column, hairline rules between rows, and large type for the few lines that matter. The step colors are a structural code, not decoration. They mark the four rungs, the small swatch beside each matching role, and nothing else. The page ends where the staircase ends: a crisp stepped silhouette that rises into a full-bleed black block, the top step, which holds the closing action.

Motion is a single authored moment. The steps rise once on load, in order, and on fine pointers a step lifts when hovered. Nothing else animates on scroll.

**Key Characteristics:**
- Flat solid color blocks with square corners; depth comes from height and tone, never shadow.
- A four-tone step ramp (mint, green, emerald, ink) reserved for the staircase, its role swatches, and the black closing block.
- Google Sans 700 with tight negative tracking for display; Google Sans Code in small uppercase for dates and tabular figures.
- Two-column section grid with hairline top rules (ink at 10%).
- Contact actions use an 8px radius; only the avatar and the LinkedIn mark are fully round.
- One load animation and one hover lift; reduced motion turns both off.

## Colors

A warm-neutral sheet and near-black ink, with one emerald accent and a mint-to-ink step ramp that only the staircase may use.

### Primary
- **Optimizely Emerald** (accent): focus outlines, link underlines (at 40%) and their hover text, and the "Now" marker beside the current role. It is the same value as the third step.

### Tertiary
- **Pale Mint Step** (step-1): the first rung, its role swatch and the text selection background.
- **Fresh Green Step** (step-2): the second rung and its swatch.
- **Emerald Step** (step-3): the third rung and its swatch, with white text.
- **Deep Pine** (step-1-ink): text on the two light rungs.

### Neutral
- **Warm Paper** (ground): page background, browser theme color, scrollbar track.
- **Near-Black Ink** (ink): all headings and primary text, the top rung, the closing stepped silhouette and footer block, the primary LinkedIn button, and the scrollbar thumb. At 10% it draws row and section rules; at 15% it draws icon-button borders and neutral role swatches.
- **Slate Muted** (muted): body copy, summaries, dates, captions, and resting icon buttons.
- **White** (white): text on emerald and ink surfaces. On the black footer it steps down to 70% for body text, 50% for the colophon, and 25% for icon-button borders.

### Named Rules
**The Step Code Rule.** The step colors mean "a rung of the climb". Use them only on stair blocks, the 12px swatch beside the matching role, and the black top-step block. Roles outside the climb get a neutral swatch (ink at 15%).

**The Top Step Rule.** Ink as a filled surface means "the top". It is the current-role rung and the closing block that holds the final call to action.

## Typography

**Display Font:** Google Sans (with ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Google Sans (same stack)
**Label/Mono Font:** Google Sans Code (with ui-monospace, SF Mono, monospace)

**Character:** One humanist sans does everything from 6rem display to 14px body, carried by weight and tight tracking rather than a second family. The code face is a quiet instrument for dates, year ranges, and grades.

### Hierarchy
- **Display** (700, clamp(3rem, 7vw, 6rem), line-height 0.9, -0.04em, balanced): the name in the first viewport only.
- **Statement** (700, 3rem to 4.5rem, line-height 0.95, -0.04em): the closing line on the black block.
- **Headline** (700, 1.875rem to 2.25rem, line-height 1, -0.04em): section titles in the left column.
- **Step label** (700, 1rem to 1.875rem, line-height 1, -0.03em): short role names inside stair blocks.
- **Title** (600, 1.125rem, -0.025em): role, degree, and award names. Company names step up to 1.25rem at 700.
- **Body** (400, 1rem, line-height 1.625, muted): contributions and paragraphs, about 28rem to 48rem wide.
- **Body small** (400, 0.875rem, line-height 1.625): award descriptions, captions, detail lists, and inline quotes (italic, ink at 85%).
- **Label mono** (Google Sans Code 400, 0.7rem to 0.75rem, +0.025em, uppercase, tabular figures): dates, year ranges, role counts, and the step year.
- **Figure mono** (Google Sans Code 400, 0.8rem, tabular figures): grades and credit counts, right-aligned against their label.

### Named Rules
**The Mono Means Measured Rule.** Google Sans Code appears only on things you could count or date. Never use it for headings or prose.

**The Weight Carries It Rule.** Hierarchy comes from weight (400, 600, 700) and negative tracking, not from color or extra families.

## Layout

The first viewport splits at large widths: the identity column sits top left (up to 48% wide, 80px top padding, 40px on screens 820px tall or less, 64px to 80px left gutter), and the header is exactly as tall as that column. The staircase fills the right half from 12% below the header top down to the header bottom, so its base sits on the same line as the bottom of the LinkedIn button, and the opening of The climb shows in the first viewport. There is no separate About section; the one-line summary under the title carries it. The first section after the header drops its hairline rule and uses 56px (64px from 640px) top padding. Below 1024px the staircase stacks under the actions at 26svh (minimum 13rem) as a four-column rise, flush to the bottom of a full-height header.

The four rungs are equal-width grid columns. Each block's height is 20% plus an equal share of the remaining 80% per step, so the top rung is full height.

Below the header, every section is a two-column grid at 1024px and up: a 16rem title column and a fluid content column, 48px apart, with a hairline top rule and 64px (96px from 640px) vertical padding. Rows inside a section use a 9rem date column beside the content, with 24px vertical padding and a hairline rule above each row. Page gutters are 24px, 40px (640px), 64px (1024px), and 80px (1280px).

The page closes with a full-width stepped SVG silhouette (64px to 96px tall) in ink that butts into the black footer, so the staircase motif bookends the page.

Print hides the staircase, the contact actions, and the footer, and tightens section padding to 24px.

## Elevation & Depth

The system is flat. There are no box shadows anywhere. Depth is said by height and tone: taller rungs are darker, and the top rung is ink. The only movement on the z-axis is the hover lift of a stair block.

### Named Rules
**The Flat Block Rule.** Surfaces never cast shadows. If something must feel raised, make it taller or darker.

## Shapes

Two shapes only. Blocks are square: stair blocks, role swatches, and the stepped silhouette have zero radius and crisp edges (the silhouette renders with crisp-edges). Actions use an 8px radius: the LinkedIn buttons and the icon buttons. The avatar, the skip link, and the LinkedIn mark are fully round. Rules are hairlines; the only vertical line is the 1px left border on inline quotes.

## Components

### Buttons
Calm, square-cornered, and few.
- **Shape:** 8px radius, 44px tall (48px from 640px).
- **Primary:** ink with white semibold text and a LinkedIn mark: a 24px white circle holding an ink "in", 20px (24px) horizontal padding. Label: "Message on LinkedIn".
- **Hover / Focus:** no color change on hover, at the user's request; focus shows the global 2px emerald outline at a 3px offset.
- **Inverted primary:** on the black footer, white with ink text and a 16px ink LinkedIn mark; no hover change.
- **Icon button:** 44px (48px) square with an 8px radius, a 1px border at ink 15% and a muted 17.6px brand mark; hover sets border and icon to ink. On the footer: white 25% border, white 80% icon, both to full white on hover. Each carries an aria-label.

### Lists / Rows
- **Row:** hairline top rule (ink 10%), 24px vertical padding, 9rem mono date column, then title and muted body.
- **Role row:** a 12px square swatch in the role's step color sits above the date (beside it on mobile). The current role adds an emerald "Now" in 700 weight after the title.
- **Detail list:** label in muted on the left, mono figure in ink on the right, max 28rem wide.

### Links
- **Inline link:** ink, medium weight, underlined at 4px offset with emerald at 40%; hover turns text and underline full emerald.
- **External link:** inherits its context's style, adds a 14px arrow-up-right that nudges up and right on hover; hover and focus turn the text emerald.

### Quotes
- **Inline quote:** small italic text at ink 85% with a 1px left rule and 16px indent.

### Promotion Staircase (signature)
An ordered list of four links, bottom rung first. Each block is a flat, square-cornered color fill with the short role name (step label) and the start year or "Now" (label mono) pinned to its top, 12px to 24px padding. Each links to its role row below. On load, blocks reveal bottom-up with a clip-path inset over 420ms on cubic-bezier(0.16, 1, 0.3, 1), staggered 60ms per step. On fine pointers, hover or focus lifts a block 10px over 260ms on the same curve. Reduced motion skips the rise.

### Skip Link
Ink pill with white small text, hidden until focused, then fixed at 16px from the top left.

## Do's and Don'ts

### Do:
- **Do** keep the step ramp in order (step-1, step-2, step-3, ink) from the first role to the current one, and reuse the same tone for that role's 12px swatch.
- **Do** set display and section titles in Google Sans 700 with -0.04em tracking and line-height of 1 or less.
- **Do** put dates, year ranges, and grades in Google Sans Code, small, uppercase, with tabular figures.
- **Do** separate rows and sections with hairline rules at ink 10% and keep the 16rem title column and 9rem date column.
- **Do** keep motion to the one load rise and the fine-pointer hover lift, both on cubic-bezier(0.16, 1, 0.3, 1), and turn them off for reduced motion.
- **Do** keep the 2px emerald focus outline at a 3px offset on every interactive element.

### Don't:
- **Don't** add box shadows; depth is height and tone (The Flat Block Rule).
- **Don't** round stair blocks, swatches, or the stepped silhouette; only the avatar, the skip link, and the LinkedIn mark are round.
- **Don't** use the step colors for backgrounds, badges, or decoration outside the staircase, its swatches, and the black top-step block.
- **Don't** wrap content in cards or chips; use rows and rules.
- **Don't** use gradients.
- **Don't** add scroll-reveal or per-section entrance animation; the user rejected it.
