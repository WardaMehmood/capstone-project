# AI-Assisted Development Workflow Comparison

## 1. Code Quality and Robustness
* **Round One (Lazy Prompt):** The output file `ProfileSettingsSimple.jsx` generated a basic form but used default HTML5 `required` fields. It completely lacked proper validation logic, meaning inputs like invalid email formats or too-short passwords could bypass checks depending on the browser. Styling was handled through inline CSS which is not scalable.
* **Round Two (Precise Prompt):** The output file `ProfileSettingsRobust.jsx` implemented explicit, custom Javascript regex validations. It handles password rules (including special characters and digits) and email syntax perfectly before even attempting form submission.

## 2. Accessibility & Edge Cases
* **Round One:** Accessibility features were non-existent. Labels did not have proper HTML bindings, and error states were not exposed to screen readers.
* **Round Two:** Form components use proper `htmlFor` and `id` bindings. Active validation errors are dynamically linked via `aria-describedby` and `aria-invalid` to ensure full compliance with screen-readers. Edge cases like excessive empty spaces are automatically trimmed.

## 3. Review and Prompt Engineering Tradeoffs
* While formulating the detailed prompt in Round Two took about 5 minutes longer upfront, the actual time spent reviewing, debugging, and styling the component was virtually zero because the code compiled perfectly on the first run. The lazy prompt in Round One took only seconds to write but required several manual adjustments afterwards. I caught an AI mistake in Round One where it initially forgot to add the `e.preventDefault()` inside the submission handler, which would have refreshed the page unexpectedly.