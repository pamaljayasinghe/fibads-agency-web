# Animation CSS Fix Documentation

## Issue

The project was experiencing CSS animation conflicts due to global keyframe names being reused across multiple components:

- The same animation names (`float`, `pulse`, `rotate`, etc.) were used in different components (CTA, Benefits, Services)
- This caused unwanted animations to be applied to elements across the entire site
- The issue was with the global scope of CSS `@keyframes` animations

## Solution

The solution was to namespace/scope the animations by component:

1. In `CTA.css`:

   - Renamed keyframes with a `cta-` prefix: `cta-float`, `cta-rotate`, `cta-pulse`
   - Updated all animation references in the component to use these scoped names

2. In `Services.css`:

   - Renamed keyframes with a `services-` prefix: `services-float`, `services-pulse`
   - Updated all animation references accordingly

3. In `Benefits.css`:

   - Renamed keyframes with a `benefits-` prefix: `benefits-float`
   - Updated all animation references accordingly

4. In global `animations.css`:
   - Renamed the global `pulse` animation to `global-pulse` for clarity

## Best Practices for Future Development

1. **Always namespace/scope your animations**: Use a component prefix for all keyframe names to avoid conflicts
2. Use naming patterns like: `[component]-[animation]` (e.g., `cta-float`, `benefits-pulse`)
3. For truly global animations that should be available everywhere, use a clear `global-` prefix
4. Consider using CSS Modules or styled-components in future development to automatically scope styles

This pattern helps avoid CSS conflicts in a large project with multiple components.
