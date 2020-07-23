public class MinStack
{
  private Node _head = null;

  /** initialize your data structure here. */
  public MinStack() { }

  public void Push(int x)
  {
    if (_head == null)
      _head = new Node(x, x, null);
    else
      _head = new Node(x, Math.Min(x, _head.Min), _head);
  }

  public void Pop()
  {
    _head = _head.Next;
  }

  public int Top()
  {
    return _head.Val;
  }

  public int GetMin()
  {
    return _head.Min;
  }

  private class Node
  {
    public int Val;
    public int Min;
    public Node Next;

    public Node(int val, int min, Node next)
    {
      Val = val;
      Min = min;
      Next = next;
    }
  }
}