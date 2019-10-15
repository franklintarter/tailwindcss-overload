// eslint-disable-next-line import/no-extraneous-dependencies
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import { withTailwindOverload } from "../src";

describe("withTailwindOverload", () => {
  let node;

  beforeEach(() => {
    // eslint-disable-next-line no-undef
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("merges Tailwind classes onto the component", () => {
    const TestComponent = ({ children, ...rest }) => {
      return <p {...rest}>{children}</p>;
    };

    TestComponent.defaultClassName =
      "font-light text-lg tracking-wide mb-6 text-body";

    const Overloaded = withTailwindOverload(TestComponent);

    render(
      <Overloaded className="text-gray-500 text-md mb-2 font-hairline" />,
      node,
      () => {
        expect(node.innerHTML).toContain(
          `class="tracking-wide text-gray-500 text-md mb-2 font-hairline"`
        );
      }
    );
  });
});
