export default (initialClasses, overloadClasses) => {
  const overloadedPlugins = overloadClasses
    .split(" ")
    .map(c => c.split("-")[0]);

  const filtered = initialClasses
    .split(" ")
    .filter(c => !overloadedPlugins.some(o => c.startsWith(o)));

  return filtered.join(" ");
};
