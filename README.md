# wcag-contrast-checker

A module to access the color contrast between background and foreground based on Web Contenet Accessibility Guideline (WCAG).

This tool takes two inputs (foreground and background color) and return the results according to the documentation [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)

WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. WCAG 2.1 requires a contrast ratio of at least 3:1 for graphics and user interface components (such as form input borders). WCAG Level AAA requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.

Large text is defined as 14 point (typically 18.66px) and bold or larger, or 18 point (typically 24px) or larger.

**Usage**

`wcagContrastChecker` takes two arguments:
- foregroundColor: a hexadecimal string (with or without #) or an array of RBG.
- backgroundColor: a hexadecimal string (with or without #) or an array of RBG.

```js
import { wcagContrastChecker } from '@mdhnpm/wcag-contrast-checker';

wcagContrastChecker('11AA55', 'AA8811');

wcagContrastChecker('#E9FAF5', '#FFFFFF');

wcagContrastChecker([0, 0, 0], [255, 255, 255]);
```

**Output**

It will return the result object to inform if the test passed for each criteria as below. The below example is when the ratio is 3.95.

```
expectedOutput: {
  regularText: {
    aa: false,
    aaa: false,
  },
  largeText: {
    aa: true,
    aaa: false,
  },
  uiComponent: {
    aa: true
  }
}
```
