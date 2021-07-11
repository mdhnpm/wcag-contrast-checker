import { wcagContrastChecker, CheckerResults } from './wcagContrastChecker';

type testData = {
  foregroundColor: string,
  backgroundColor: string,
  expectedOutput: CheckerResults
}
const testData: testData[] = [
  {
    // compute ratio 8.59
    foregroundColor: '#0000FF',
    backgroundColor: '#FFFFFF',
    expectedOutput: {
      regularText: {
        aa: true,
        aaa: true,
      },
      largeText: {
        aa: true,
        aaa: true,
      },
      uiComponent: {
        aa: true
      }
    }
  },
  {
    // compute ratio to 6.5
    foregroundColor: '#0000FF',
    backgroundColor: '#E0E0E0',
    expectedOutput: {
      regularText: {
        aa: true,
        aaa: false,
      },
      largeText: {
        aa: true,
        aaa: true,
      },
      uiComponent: {
        aa: true
      }
    }
  },
  {
    // compute ratio to 3.95
    foregroundColor: '#0000FF',
    backgroundColor: '#B0B0B0',
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
  },
  {
    // compute ratio to 1.68
    foregroundColor: '#0000FF',
    backgroundColor: '#6E6E6E',
    expectedOutput: {
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
    }
  },
];

describe('wcagContrastChecker', () => {
  it('should return correct results', () => {
    testData.map(data => {
      expect(wcagContrastChecker(data.foregroundColor, data.backgroundColor))
        .toStrictEqual(data.expectedOutput);
    });
  });
});
