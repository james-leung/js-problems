var decodeString = function (s) {
  let pos = 0;
  return decodeSubstring(s);

  function decodeSubstring(s) {
    let num = 0;
    let word = "";
    for (; pos < s.length; pos++) {
      let cur = s[pos];
      if (cur === "[") {
        pos++;
        let curStr = decodeSubstring(s);
        for (; num > 0; num--) word += curStr;
      } else if (cur >= "0" && cur <= "9") {
        num = num * 10 + parseInt(cur);
      } else if (cur === "]") {
        return word;
      } else {
        // Normal characters
        word += cur;
      }
    }
    return word;
  }
};

// function decodeSubstring(s, index, end) {
//   // console.log(index, end);
//   // Iterate over blocks of letters (may be wrapped by brackets)
//   let output = "";
//   while (index < end) {
//     // Check whether the beginning char is a letter
//     if (s[index].match(/[a-z]/i)) {
//       let j = index + 1;
//       // Find cluster of characters
//       while (j < s.length && s[j].match(/[a-z]/i)) j++;
//       output += s.slice(index, j);
//       index = j;
//     }

//     // If not, check whether the beginning char is a number
//     else if (s[index] >= "0" && s[index] <= "9") {
//       let j = index + 1;
//       // Find all digits of the number "num"
//       while (s[j] >= "0" && s[j] <= "9") j++;
//       let num = parseInt(s.slice(index, j));
//       index = j;
//       // The number should be followed by an open square bracket
//       if (s[index] === "[") {
//         // Keep track of # of open brackets minus closing brackets
//         let counter = 1;
//         index++;
//         j = index;
//         while (counter > 0) {
//           // console.log(counter);
//           if (s[j] === "[") counter++;
//           if (s[j] === "]") counter--;
//           j++;
//         }
//         // Recursion: repeat the same process inside matching brackets
//         let substr = decodeSubstring(s, index, j - 1);
//         // Add the encoded string to the output "num" times
//         for (let m = 0; m < num; m++) output += substr;
//         index = j;

//         console.log(output, j);
//       }
//     }
//   }
//   return output;
// }

console.log(decodeString("d3[a2[bc]s]"));
console.log(decodeString("3[bc]2[ad]"));
console.log(decodeString("3[ab]"));
console.log(decodeString("10[leetcode]"));
