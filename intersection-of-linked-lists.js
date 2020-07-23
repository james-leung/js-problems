// Most popular method: find length difference between 2 linked lists,
// then compare to find intersection.

// Alternative: assign tail of one linked list to head of another.
// They must meet at intersection node if it exists.

var getIntersectionNode = (headA, headB) => {
  //boundary check
  if(headA === null || headB === null) return null;

  let a = headA;
  let b = headB;
  
  //if a & b have different len, then we will stop the loop after second iteration
  while( a != b){
    //for the end of first iteration, we just reset the pointer to the head of another linkedlist
      a = a == null? headB : a.next;
      b = b == null? headA : b.next;    
  }
  
  return a;
}