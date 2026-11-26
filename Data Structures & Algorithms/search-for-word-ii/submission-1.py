class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        # run dfs through every cell. if a word is made mark it and done
        height = len(board)
        width = len(board[0])
        words = set(words)
        max_len = max(len(w) for w in words)
        res = set()
        seen = set()

        def dfs(cur, i, j):
            if not (0 <= i < height and 0 <= j < width and (i, j) not in seen):
                return

            cur += board[i][j]
            if len(cur) > max_len:
                return
            if cur in words:
                res.add(cur)

            seen.add((i, j))
            directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
            for dx, dy in directions:
                dfs(cur, i + dy, j + dx)
            seen.remove((i, j))

        for i in range(height):
            for j in range(width):
                dfs("", i, j)

        return list(res)