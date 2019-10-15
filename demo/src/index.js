import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from "react-dom";

import { withTailwindOverload } from "../../src";

const Paragraph = ({ children, ...rest }) => {
  return <p {...rest}>{children}</p>;
};

Paragraph.defaultClassName = "font-light text-lg tracking-wide mb-6 text-body";

const Overload = withTailwindOverload(Paragraph);

const Demo = () => {
  return (
    <div>
      <h1>tailwindcss-overload Demo</h1>
      <Overload className="text-gray-500 mb-2 text-md font-hairline">
        Inspect me and check out my classes!
      </Overload>
    </div>
  );
};

// eslint-disable-next-line no-undef
render(<Demo />, document.querySelector("#demo"));
