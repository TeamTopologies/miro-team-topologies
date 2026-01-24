# CLAUDE.md - AI Coding Instructions for Claude

## Project Overview
Miro Web SDK v2 plugin providing drag-and-drop Team Topologies shapes. Built with React 18, TypeScript, and Vite.

## Quick Start
```bash
npm install    # Install dependencies
npm start      # Dev server at localhost:3000
npm run build  # Production build
```

## Architecture

### Entry Points
- `index.html` → `src/index.ts`: SDK init, registers panel opener on icon click
- `app.html` → `src/app.tsx`: React panel with draggable team elements

### Core Pattern: Factory + Interface
`TeamFactory` (src/team-logic/team-factory.ts) instantiates all team elements. Each implements `TeamElementInterface`:

```typescript
// src/team-logic/team-static.ts
interface TeamElementInterface {
  getClassName(): string;   // CSS class for drag (e.g., 'stream-aligned-btn')
  getIcon(): string;        // SVG import path
  getName(): string;        // Label on Miro shape
  getRotation(): number;    // Shape rotation in degrees (0, 90, 180, 270)
  getShape(): ShapeType;    // From helpers/ShapeTypes.ts
  getShapeSize(): { height: number; width: number };
  getStyle(): TeamElementStyleInterface;
  getTeamEnum(): TEAM_ENUM;
}
```

### Team Element Classes
| File | Teams |
|------|-------|
| `team-type.ts` | StreamAligned, Platform, Enabling, ComplicatedSubsystem |
| `team-supplementary.ts` | UndefinedTeam |
| `team-interaction.ts` | Collaboration, Facilitating, Xaas, UndefinedInteraction, TemporalCoupling, Handover |
| `team-other.ts` | FlowOfChange |

## Adding a New Team Element

1. Add to `TEAM_ENUM` in `src/team-logic/team-static.ts`
2. Add SVG icon to `src/assets/images/tt/` or `src/assets/images/ti/`
3. In the appropriate class file:
   - Add enum to static `TeamEnums` array
   - Add cases to: `getShape()`, `getStyle()`, `getName()`, `getRotation()`, `getShapeSize()`, `getIcon()`, `getClassName()`
4. Add drag mapping in `TeamFactory.getTeamElementFromClassList()`
5. Add description in `src/team-text/team-info.ts`

## Conventions

### Styling Rules
- **Team types**: solid borders (`borderStyle: 'normal'`)
- **Interactions**: dashed borders (`borderStyle: 'dashed'`)
- Colors defined per-team in `getStyle()` methods
- Use `fillOpacity` (0-1) for transparency, NOT `opacity` (unsupported by Miro SDK)

### File Structure
```
src/
  components/{Name}/index.tsx   # React components
  team-logic/team-*.ts          # Team element classes
  team-text/                    # Display text content
  assets/images/tt/             # Team type icons
  assets/images/ti/             # Interaction icons
  helpers/ShapeTypes.ts         # Miro shape enum
```

### Miro SDK
- Global `miro` object from CDN (loaded in HTML)
- Types: `@mirohq/websdk-types` (update to latest for full API support)
- Create shapes: `miro.board.createShape({ shape, style, x, y, width, height, rotation, content })`
- Create text: `miro.board.createText({ x, y, width, content, style })`
- Group items: `miro.board.group({ items: [shape, text] })` (requires SDK 2.9+)
- Events: `miro.board.ui.on('drop', handler)`, `miro.board.ui.on('icon:click', handler)`

### Rotated Shapes with Text

When a shape has rotation, text inside rotates too. For upright text on rotated shapes:

1. Create shape with empty `content`
2. Create separate text element at same position
3. Group them with `board.group({ items: [shape, text] })`

See `createTeamShape()` in `src/app.tsx` for implementation.

## Key Files to Understand
- `src/team-logic/team-static.ts` - TEAM_ENUM and interfaces
- `src/team-logic/team-factory.ts` - Factory pattern implementation
- `src/team-logic/team-type.ts` - Example of team element class pattern
- `src/app.tsx` - Main React app with drop handling
