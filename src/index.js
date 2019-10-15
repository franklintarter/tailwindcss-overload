import React from "react";
import removeMatchingPlugins from "./removeMatchingPlugins";

export const withTailwindOverload = () => {
  return (
    <div>
      <h2>Welcome to React components</h2>
    </div>
  );
};

export const overloadTailwind = (initialClasses, overloadClasses) => {
  if (!overloadClasses) {
    return initialClasses;
  }

  const removed = removeMatchingPlugins(initialClasses, overloadClasses);

  return `${removed} ${overloadClasses}`.trim();
};
