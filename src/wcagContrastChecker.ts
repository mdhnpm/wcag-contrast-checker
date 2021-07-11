import { colorContrastRatioCalculator } from '@mdhnpm/color-contrast-ratio-calculator';

export type ColorContrastRatioCalculatorInput = string | Array<number>;

export type CheckerResults = {
  regularText: {
    aa: boolean,
    aaa: boolean
  },
  largeText: {
    aa: boolean,
    aaa: boolean
  },
  uiComponent: {
    aa: boolean
  }
}

export const wcagContrastChecker = (
  foregrounColor: ColorContrastRatioCalculatorInput,
  backgroundColor: ColorContrastRatioCalculatorInput
): CheckerResults => {
  const ratio = colorContrastRatioCalculator(foregrounColor, backgroundColor);
  return resultsGenerator(ratio);
};

const resultsGenerator = (contrastRatio: number): CheckerResults => {

  const results: CheckerResults = {
    regularText: {
      aa: false,
      aaa: false,
    },
    largeText: {
      aa: false,
      aaa: false,
    },
    uiComponent: {
      aa: false
    }
  };

  if (contrastRatio >= 7.5) {
    results.regularText.aa = true;
    results.regularText.aaa = true;
    results.largeText.aa = true;
    results.largeText.aaa = true;
    results.uiComponent.aa = true;
  } else if (contrastRatio >= 4.5) {
    results.regularText.aa = true;
    results.regularText.aaa = false;
    results.largeText.aa = true;
    results.largeText.aaa = true;
    results.uiComponent.aa = true;
  } else if (contrastRatio >= 3) {
    results.regularText.aa = false;
    results.regularText.aaa = false;
    results.largeText.aa = true;
    results.largeText.aaa = false;
    results.uiComponent.aa = true;
  }

  return results;
};
