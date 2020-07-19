var copyRandomList = function (head) {
  let dic = new Map();
  let m = head;
  let n = head;

  while (m) {
    dic.set(m, new Node(m.val));
    m = m.next;
  }
  while (n) {
    dic.get(n).next = n.next ? dic.get(n.next) : null;
    dic.get(n).random = dic.get(n.random);
    n = n.next;
  }
  return dic.get(head);
};
