// See https://www.youtube.com/watch?v=zx5Sw9130L0&feature=emb_title

var largestRectangleArea = function(heights) {
<<<<<<< HEAD
  
=======

>>>>>>> 31e6fc6b635b03adfcfc775eb9a3833e3ccb0ce2
  heights.push(0)
  // Stack of indices
  let stack = [];
  let maxArea = 0, curr, currH, top, topH, area;
  
  // Loop over heights array
  for(let i = 0; i < heights.length; i++) {
      // Index of top height of array
      top = stack[stack.length-1];
      // Top height of array
      topH = heights[top];

      // pop from stack as long as the top of the stack
      // is greater than the current height and
      // the stack has at least 2 items
      while(stack.length > 1 && topH > heights[i]) {
          curr = stack.pop();
          currH = heights[curr];
          top = stack[stack.length-1];
          topH = heights[top];
          area = currH * (i - 1 - top);
          maxArea = Math.max(area, maxArea);
      }
      
      // when only 1 item left in the stack
      if(stack.length && topH > heights[i]) {
          curr = stack.pop();
          currH = heights[curr];
          area = currH * i;
          maxArea = Math.max(area, maxArea);
      }
      stack.push(i);
  }
  return maxArea;
};

console.log([2,1,5,6,2,3])          // = 10

