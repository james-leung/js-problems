var isMatch = (str, pattern) => {
  if (!pattern) return !str;
  let first = !!str && (pattern[0] === str[0] || pattern[0] === ".");

  if (pattern.length >= 2 && pattern[1] === "*") {
    return (
      isMatch(str, pattern.slice(2)) ||
      (first && isMatch(str.slice(1), pattern))
    );
  } else {
    return first && isMatch(str.slice(1), pattern.slice(1));
  }
};
