class TrieNode:
    def __init__(self):
        self.children = dict() # letter : TrieNode()
        self.word = False

class WordDictionary:

    def __init__(self):
        self.root  = TrieNode()

    def addWord(self, word: str) -> None:
        cur_node = self.root
        for l in word:
            if l not in cur_node.children:
                cur_node.children[l] = TrieNode()
            cur_node = cur_node.children[l]
        cur_node.word = True
                

    def search(self, word: str) -> bool:
        def dfs(root, j):
            cur_node = root
            
            for i in range(j, len(word)):
                c = word[i]

                if c == ".":
                    for child in cur_node.children.values():
                        if dfs(child, i + 1):
                            return True
                    return False
                else:
                    if c not in cur_node.children:
                        return False
                    cur_node = cur_node.children[c]
                    dfs(cur_node, i + 1)
            
            return cur_node.word

        return dfs(self.root, 0)
