class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        rows, cols = len(grid), len(grid[0])
        visited = set()
        count = 0
        
        def dfs(x, y):
            # Base case
            if x not in range(cols) or y not in range(rows) or (x, y) in visited or grid[y][x] == "0":
                return

            else:
                visited.add((x, y))

                directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
                for dx, dy in directions:
                    dfs(x + dx, y + dy)
        
        for y in range(rows):
            for x in range(cols):
                if (x, y) not in visited and grid[y][x] == "1":
                    count += 1
                    dfs(x, y)
        
        return count