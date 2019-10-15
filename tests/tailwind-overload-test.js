// eslint-disable-next-line import/no-extraneous-dependencies
import expect from "expect";

import { overloadTailwind } from "../src";

describe("overloadTailwind", () => {
  it("merges new tailwind classes over the old", () => {
    const testCases = [
      {
        initial: "text-gray-900",
        overload: "text-blue-500",
        expected: "text-blue-500"
      },
      {
        initial: "text-gray-900 mb-6",
        overload: "text-blue-500",
        expected: "mb-6 text-blue-500"
      },
      {
        initial: "sm:text-gray-900 mb-6",
        overload: "text-blue-500",
        expected: "sm:text-gray-900 mb-6 text-blue-500"
      },
      {
        initial: "sm:text-gray-900 mb-6",
        overload: "sm:text-blue-500",
        expected: "mb-6 sm:text-blue-500"
      },
      {
        initial: "flex text-gray-900 mb-6",
        overload: "text-blue-500",
        expected: "flex mb-6 text-blue-500"
      },
      {
        initial: "flex text-gray-900 mb-6",
        overload: "",
        expected: "flex text-gray-900 mb-6"
      }
    ];

    testCases.forEach(t => {
      const result = overloadTailwind(t.initial, t.overload);
      expect(result).toBe(t.expected);
    });
  });
});
