interface classMap {
  [prefix: string]: string;
}

export const twPrefix = (prefix: string, className: string) =>
  `${prefix}:${className}`;

export const tw = (classMap: classMap, defaultClasses?: string) => {
  const classesWithPrefix = Object.entries(classMap).reduce(
    (acc, [prefix, className]) => `${acc} ${twPrefix(prefix, className)}`,
    ''
  );
  return `${defaultClasses && defaultClasses} ${classesWithPrefix}`;
};
