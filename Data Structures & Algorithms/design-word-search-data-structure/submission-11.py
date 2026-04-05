class TrieNode:
    def __init__(self):
        self.children = dict() # letter -> TrieNode
        self.word = False

class WordDictionary:

    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        cur_node = self.root
        for c in word:
            if c not in cur_node.children:
                cur_node.children[c] = TrieNode()
            cur_node = cur_node.children[c]
        cur_node.word = True

    def search(self, word: str) -> bool:
        def dfs(i, root):
            cur_node = root

            for j in range(i, len(word)):
                c = word[j]

                if c == ".":
                    for child in cur_node.children.values():
                        if dfs(j + 1, child):
                            return True
                    return False
                else:
                    if c not in cur_node.children:
                        return False
                    cur_node = cur_node.children[c]
            
            return cur_node.word

        return dfs(0, self.root)

    