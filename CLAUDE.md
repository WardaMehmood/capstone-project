# Project Rules & Conventions

## Tech Stack
- React with Vite
- Tailwind CSS

## Code Style & Development Guidelines
- Write semantic, highly accessible HTML (WCAG compliant).
- Style components with responsive, utility-first CSS using Tailwind CSS.
- Keep components small, modular, and focused on single responsibilities.

## Strict Verification Rules (Learned from Phase 2)
1. **Uncontrolled Inputs Policy:** All form components must utilize controlled state handlers. Direct DOM manipulations or native browser required-only fallbacks are not allowed.
2. **Dynamic Validation:** Dynamic UI errors must have a custom Javascript checker/schema to prevent bad state submissions.
3. **Screen-Reader Guidelines:** All inputs must contain explicit label element associations via matching IDs, using `aria-describedby` to output alert error states dynamically.