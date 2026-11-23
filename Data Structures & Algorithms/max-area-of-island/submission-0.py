from collections import deque

class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        visited = set()

        def bfs(i, j):
            if grid[i][j] == 0 or (i, j) in visited:
                return 0

            q = deque([(i, j)])
            visited.add((i, j))
            area = 0

            while q:
                y, x = q.popleft()
                area += 1
                for dy, dx in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
                    ny, nx = y + dy, x + dx
                    if (0 <= ny < rows and 0 <= nx < cols
                            and (ny, nx) not in visited and grid[ny][nx] == 1):
                        visited.add((ny, nx))
                        q.append((ny, nx))
            return area

        max_area = 0
        for i in range(rows):
            for j in range(cols):
                max_area = max(max_area, bfs(i, j))
        return max_area