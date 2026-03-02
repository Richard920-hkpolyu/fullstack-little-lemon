# Copilot Instructions for fullstack-little-lemon

## Project Overview
- This is a React single-page application (SPA) bootstrapped with Vite.
- The codebase is organized under `src/` with clear separation for components, pages, context, hooks, routes, and utilities.
- State management uses Redux Toolkit patterns (see `CartSlice.jsx` and `store.js`).
- The app appears to be a restaurant ordering/reservation system ("Little Lemon").

## Key Architectural Patterns
- **Component Structure:**
  - UI components are in `src/components/` (e.g., `Cart.jsx`, `MenuSection.jsx`, `Reservation.jsx`).
  - Page-level components are in `src/pages/` (e.g., `Homepage.jsx`, `OrderPage.jsx`).
  - Routing is handled in `src/routes/AppRoutes.jsx`.
- **State Management:**
  - Centralized store in `src/store.js`.
  - Slices (e.g., `CartSlice.jsx`) define reducers and actions.
- **Context Usage:**
  - Custom React contexts in `src/context/` (e.g., `alertContext.jsx`, `ScreenSizeContext.jsx`).
- **Hooks:**
  - Custom hooks in `src/hooks/` (e.g., `useSubmit.jsx`).
- **Assets:**
  - Images and static assets are in `src/images/` and `src/assets/`.

## Developer Workflows
- **Development:**
  - Start dev server: `npm run dev`
  - Build for production: `npm run build`
  - Preview production build: `npm run preview`
- **Linting:**
  - Run ESLint: `npm run lint` (config in `eslint.config.js`)
- **No explicit test setup** detected; add tests in `src/` if needed.

## Project-Specific Conventions
- Use functional React components and hooks throughout.
- Prefer colocating styles (e.g., `Footer.css` next to `Footer.jsx`).
- Data and utility functions are in `src/utils/`.
- Use context for cross-cutting concerns (alerts, screen size).
- Use Redux Toolkit patterns for state that spans multiple components.

## Integration Points
- No backend API integration code is present in this frontend repo.
- All data appears to be local or mocked (see `src/utils/data.jsx`).

## Examples
- To add a new page: create a component in `src/pages/`, add a route in `src/routes/AppRoutes.jsx`.
- To add a new global state: define a slice in `src/components/`, add to `src/store.js`.

## References
- Main entry: `src/main.jsx`
- App root: `src/App.jsx`
- Routing: `src/routes/AppRoutes.jsx`
- State: `src/store.js`, `src/components/CartSlice.jsx`
- Context: `src/context/`

---

If you are an AI agent, follow these conventions and reference the above files for examples of project patterns. Ask for clarification if a workflow or pattern is unclear.