# tailwindcss-overload

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

[build-badge]: https://img.shields.io/travis/franklintarter/tailwindcss-overload/master.png?style=flat-square
[build]: https://travis-ci.org/franklintarter/tailwindcss-overload
[npm-badge]: https://raster.shields.io/npm/v/tailwindcss-overload.png?style=flat-square
[npm]: https://www.npmjs.com/package/tailwindcss-overload
[coveralls-badge]: https://img.shields.io/coveralls/franklintarter/tailwindcss-overload/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/franklintarter/tailwindcss-overload

## Using

```shell
yarn add tailwindcss-overload
```

You have a component with some baked in TailwindCSS classes:

```javascript
export const Paragraph = ({ children, className = "", ...rest }) => (
  <p {...rest} className={`text-gray-800 font-sans mb-6 ${className}`}>
    {children}
  </p>
);
```

All is good. Until in one scenario you just want the `margin-bottom` to be different than the default `6`:

```javascript
<Paragraph className="mb-2">...</Paragarph>
```

Unfortunately whether or not this works is up to the whims of the "Cascading" in CSS.

No more!

Rewrite the component to use the `withTailwindOverload` higher order component.

```javascript
import { withTailwindOverload } from "tailwindcss-overload";

const Paragraph = ({ children, ...rest }) => {
  return <p {...rest}>{children}</p>;
};

Paragraph.defaultClassNames = "text-gray-800 font-sans mb-6";

export default Paragraph;
```

Now calling `<Paragraph className="mb-2">...</Paragraph>` should result in the removal of the default `mb` utility and allow the overloaded utility to work regardless of "Cascading".

```html
<p class="text-gray-800 font-sans mb-2">...</p>
```

##
