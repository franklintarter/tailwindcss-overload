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
    const overloadedClasses = overloadTailwind(
      PassedComponent.defaultClassNames,
      className
    );
    return <PassedComponent {...rest} className={overloadedClasses} />;
  };
};
