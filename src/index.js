import React from "react";
import removeMatchingPlugins from "./removeMatchingPlugins";

export const overloadTailwind = (initialClasses, overloadClasses) => {
  if (!overloadClasses) {
    return initialClasses;
  }

  const removed = removeMatchingPlugins(initialClasses, overloadClasses);

  return `${removed} ${overloadClasses}`.trim();
};

export const withTailwindOverload = PassedComponent => {
  return ({ className, ...rest }) => {
    if (!PassedComponent.defaultClassName) {
      throw new Error(
        "No defaultClassName found. Components wrapped withTailwindOverload() require defaultClassName property 'MyComponent.defaultClassname = \"text-gray-500\"'"
      );
    }
    const overloadedClasses = overloadTailwind(
      PassedComponent.defaultClassName,
      className
    );
    return <PassedComponent {...rest} className={overloadedClasses} />;
  };
};
