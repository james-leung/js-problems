var isMatch = (str, pattern) => {
  if (!pattern) return !str;

  // See if the first character matches
  let first = !!str && (pattern[0] === str[0] || pattern[0] === ".");

  if (pattern.length >= 2 && pattern[1] === "*") {
    // If second character is a star...
    return (
      // It is possible that this character is not used at all
      isMatch(str, pattern.slice(2)) ||
      // Or if the first character matches, then we can move on to the next character
      (first && isMatch(str.slice(1), pattern))
    );
  } else {
    // If the second character isn't a star 
    // then we only need to check the first character and move on
    return first && isMatch(str.slice(1), pattern.slice(1));
  }
};
