function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const sortList = (head) => {
  let dummy = new ListNode(0);
  dummy.next = head;
  let list = new Array(2);
  let done = !head;
  // Keep partitioning our list into bigger sublists length. Starting with a size of 1 and doubling each time
  for (let step = 1; !done; step *= 2) {
    done = true;
    let prev = dummy;
    let remaining = prev.next;
    do {
      // Split off two sublists of size step
      for (let i = 0; i < 2; ++i) {
        list[i] = remaining;
        let tail = null;
        for (
          let j = 0;
          j < step && remaining;
          ++j, remaining = remaining.next
        ) {
          tail = remaining;
        }
        // Terminate our sublist
        if (tail) {
          tail.next = null;
        }
      }

      // We're done if these are the first two sublists in this pass and they
      // encompass the entire primary list
      done &= !remaining;

      // If we have two sublists, merge them into one
      if (list[1]) {
        while (list[0] || list[1]) {
          let idx = !list[1] || (list[0] && list[0].val <= list[1].val) ? 0 : 1;
          prev.next = list[idx];
          list[idx] = list[idx].next;
          prev = prev.next;
        }

        // Terminate our new sublist
        prev.next = null;
      } else {
        // Only a single sublist, no need to merge, just attach to the end
        prev.next = list[0];
      }
    } while (remaining);
  }
  return dummy.next;
};

let arr = [3, 2, 4, 5, 1];
let head = new ListNode();
let node = head;
head.val = arr.splice(0, 1)[0];
for (let x of arr) {
  node.next = new ListNode();
  node = node.next;
  node.val = x;
}
console.log(sortList(head));
