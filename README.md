# Tailwind CSS Custom Color Bug

This repository demonstrates a common issue encountered when using custom colors in Tailwind CSS.  The problem involves correctly configuring Tailwind to recognize and apply custom colors defined within `tailwind.config.js`.

The `bug.js` file shows the initial incorrect setup, while `bugSolution.js` provides the corrected configuration and a brief explanation of the problem and its solution.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` (or equivalent) to install dependencies (if any).
3. Attempt to use the `bg-custom-blue` class in your HTML; it should not apply the color correctly.
4. Review the `bugSolution.js` to see the corrected setup.

## Solution

The solution often involves ensuring that your Tailwind configuration file correctly points to the files where you are using Tailwind classes and that the CSS is being built correctly.

Feel free to use this as a reference or learning tool for troubleshooting similar issues in your Tailwind CSS projects.