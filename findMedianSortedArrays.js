function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let lo = 0;
  let hi = nums1.length;
  let combinedLength = nums1.length + nums2.length;

  while (lo <= hi) {
    let partX = Math.floor((lo + hi) / 2);
    let partY = Math.floor((combinedLength + 1) / 2 - partX);

    let leftX = getMax(nums1, partX);
    let rightX = getMin(nums1, partX);

    let leftY = getMax(nums2, partY);
    let rightY = getMin(nums2, partY);

    // console.log(lo, hi, partX, partY, leftX, rightX, leftY, rightY);

    if (leftX <= rightY && leftY <= rightX) {
      if (combinedLength % 2 === 0) {
        return (Math.max(leftX, leftY) + Math.min(rightX, rightY)) / 2;
      }
      return Math.max(leftX, leftY);
    }

    if (leftX > rightY) {
      hi = partX - 1;
    } else {
      lo = partX + 1;
    }
  }
  return -1;
}

function getMax(nums, partition) {
  if (partition === 0) {
    return -Infinity;
  } else return nums[partition - 1];
}

function getMin(nums, partition) {
  if (partition === nums.length) {
    return Infinity;
  } else return nums[partition];
}

let nums1 = [1, 2, 3];
let nums2 = [2, 3, 4];
console.log(findMedianSortedArrays(nums1, nums2));
