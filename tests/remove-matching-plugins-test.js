// eslint-disable-next-line import/no-extraneous-dependencies
import expect from "expect";

import removeMatchingPlugins from "../src/removeMatchingPlugins";

describe("removeMatchingPlugins", () => {
  it("removes tailwind plugins when a matching tailwind plugin is added", () => {
    const testCases = [
      { initial: "text-gray-900", overload: "text-blue-500", expected: "" },
      {
        initial: "sm:text-gray-900",
        overload: "text-blue",
        expected: "sm:text-gray-900"
      },
      {
        initial: "text-gray-900",
        overload: "font-bold mb-4",
        expected: "text-gray-900"
      },
      { initial: "font-bold mb-4", overload: "font-bold mb-4", expected: "" },
      {
        initial: "font-bold mb-4 mt-2",
        overload: "font-bold mb-4",
        expected: "mt-2"
      }
    ];

    testCases.forEach(t => {
      const result = removeMatchingPlugins(t.initial, t.overload);
      expect(result).toBe(t.expected);
    });

    // const result = overloadTailwind();

    // render(<Component />, node, () => {
    //   expect(node.innerHTML).toContain("Welcome to React components");
    // });
  });
});
