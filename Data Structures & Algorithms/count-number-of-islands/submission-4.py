class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        visited = set()
        count = 0
        
        def dfs(x, y):
            # Base case
            if x not in range(len(grid[0])) or y not in range(len(grid)) or (x, y) in visited or grid[y][x] == "0":
                return

            else:
                visited.add((x, y))

                directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
                for dx, dy in directions:
                    dfs(x + dx, y + dy)
        
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if (j, i) not in visited and grid[i][j] == "1":
                    count += 1
                    dfs(j, i)
        
        return count