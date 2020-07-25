using System.Collections.Generic;
using System;

public class Trie {
    private  List<string> _words = new List<string>();

    /** Initialize your data structure here. */
    public Trie() {}
    
    /** Inserts a word into the trie. */
    public void Insert(string word) {
        _words.Add(word);
    }
    
    /** Returns if the word is in the trie. */
    public bool Search(string word) {
        if (_words.Find(w => w == word) != null)
			return true;
		return false;
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    public bool StartsWith(string prefix) {
        if (_words.Find(w => w.Substring(0, prefix.Length) == prefix) != null)
			return true;
		return false;
    }
	
	public void Main() {
		var a = new List<int>{1, 2, 3, -1};
		a.Sort();
		Console.WriteLine($"Hello, {a}!");
	}
}