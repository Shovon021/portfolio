# About Raiyan Gani

## Mission
Create implementation-ready, token-driven UI guidance for About Raiyan Gani that is optimized for consistency, accessibility, and fast delivery across documentation site.

## Brand
- Product/brand: About Raiyan Gani
- URL: https://sites.google.com/view/raiyan-gani/home?authuser=0
- Audience: developers and technical teams
- Product surface: documentation site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Open Sans`, `font.family.stack=Open Sans`, `font.size.base=17.3333px`, `font.weight.base=400`, `font.lineHeight.base=27.7333px`
- Typography scale: `font.size.xs=0px`, `font.size.sm=13px`, `font.size.md=14px`, `font.size.lg=16px`, `font.size.xl=17.33px`, `font.size.2xl=21.33px`, `font.size.3xl=50.67px`
- Color palette: `color.text.primary=#212121`, `color.surface.base=#000000`, `color.text.tertiary=#1f1f1f`, `color.text.inverse=#0000ee`, `color.surface.raised=#ffffff`, `color.surface.strong=#202124`
- Spacing scale: `space.1=4px`, `space.2=5px`, `space.3=6px`, `space.4=8px`, `space.5=10px`, `space.6=10.67px`, `space.7=14px`, `space.8=15px`
- Radius/shadow/motion tokens: `radius.xs=10px`, `radius.sm=24px`, `radius.md=32px`, `radius.lg=50px` | `motion.duration.instant=300ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (23), buttons (13), lists (11), navigation (3), inputs (1).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
