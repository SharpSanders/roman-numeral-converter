# Roman Numeral Converter

A beautifully designed Roman numeral converter that transforms any integer from **1 to 3999** into its Roman numeral equivalent.  
Includes clean validation, accessibility features, and a warm desert-inspired UI.

Built to practice algorithms, form validation, semantic HTML, and polished UI/UX.

---

## Demo

The interface includes:

- A large title and tagline:  
  **“Turn numbers into classics — from 1 to 3999.”**
- An input section with:
  - A numeric text field  
  - A **Convert** button  
  - Helpful examples (e.g., 9 → IX, 16 → XVI)
- A styled output area that updates instantly with the conversion result.
- A footer with the current year and a playful programming joke.
- A “Skip to main content” accessibility link.

---

## Tech Stack

- **HTML** – semantic, accessible markup structure  
- **CSS** – custom theme with gradients, clay/sand color palette, shadows, and responsive text scaling  
- **JavaScript** – conversion algorithm + input validation + dynamic output  

---

## Features

- Converts numbers **1 to 3999** into proper Roman numerals.
- Full validation:
  - Empty input
  - Non-numeric input
  - Decimals
  - Too small (<1)
  - Too large (>3999)
- Uses an efficient **descending-value Roman numeral algorithm**.
- Press **Enter** to convert (keyboard support).
- Footer year auto-updates based on system time.
- Works with light & dark mode (CSS `prefers-color-scheme`).

---

## How It Works (Algorithm)

### 1. Roman Numeral Table

```js
const pairs = [
  { val: 1000, sym: "M" },
  { val: 900,  sym: "CM" },
  { val: 500,  sym: "D" },
  { val: 400,  sym: "CD" },
  { val: 100,  sym: "C" },
  { val: 90,   sym: "XC" },
  { val: 50,   sym: "L" },
  { val: 40,   sym: "XL" },
  { val: 10,   sym: "X" },
  { val: 9,    sym: "IX" },
  { val: 5,    sym: "V" },
  { val: 4,    sym: "IV" },
  { val: 1,    sym: "I" },
];
2. Conversion Logic
js
Copy code
let res = "";
let n = num;

for (const { val, sym } of pairs) {
  while (n >= val) {
    res += sym;
    n -= val;
  }
  if (n === 0) break;
}
return res;
The algorithm subtracts the largest Roman numeral values first and appends symbols until the number is reduced to zero — ensuring correct Roman numeral formation.

3. Validation
The script checks:

Empty input

Non-numbers

Decimals

Out-of-range numbers

And provides meaningful error messages accordingly.

4. Accessibility & UX
aria-live="polite" ensures screen readers announce results.

Focusable Skip to main content link.

Input uses inputmode="numeric" to bring up numeric keyboards on mobile.

How to Use
Type a number between 1 and 3999.

Click Convert or press Enter.

The Roman numeral result displays below the form.

If the input is invalid, an error message appears instead.

Examples:

9 → IX

16 → XVI

649 → DCXLIX

Project Structure
text
Copy code
roman-numeral-converter/
├── index.html     # Structure, form, semantics, ARIA roles
├── styles.css     # Theme, layout, responsiveness, dark mode
└── script.js      # Validation, converter algorithm, dynamic rendering
What I Practiced
Writing clean validation logic

Implementing an efficient Roman numeral conversion algorithm

Creating responsive, accessible UI

Using aria-live, aria-atomic, and “Skip to content” practices

CSS design with gradients, shadows, and fluid text scaling

Future Improvements
Add history of previous conversions

Add copy-to-clipboard button for results

Add animations when the conversion result updates

Convert Roman numerals back to numbers (bi-directional converter)

Author
Created by Trevyn Sanders.