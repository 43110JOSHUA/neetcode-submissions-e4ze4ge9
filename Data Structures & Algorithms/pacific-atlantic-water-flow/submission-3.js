class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let visited = new Set();
        
        // Check if cell can reach pacific
        function dfs_p(r, c) {
            if (r == 0 || c == 0) {
                return true;
            }
            visited.add(`${r},${c}`);  

            let res = false;
            let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
            for (const [dx, dy] of directions) {
                const new_r = r + dx;
                const new_c = c + dy;
                if (new_r >= 0 && new_r < heights.length && new_c >= 0 && new_c < heights[0].length && heights[new_r][new_c] <= heights[r][c] && !visited.has(`${new_r},${new_c}`)) {
                    res = res || dfs_p(new_r, new_c);
                }
            }
            return res;
        }

        // Check if cell can reach atlantic
        function dfs_a(r, c) {
            if (r == heights.length - 1 || c == heights[0].length - 1) {
                return true;
            }
            visited.add(`${r},${c}`);

            let res = false;
            let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
            for (const [dx, dy] of directions) {
                const new_r = r + dx;
                const new_c = c + dy;
                if (new_r >= 0 && new_r < heights.length && new_c >= 0 && new_c < heights[0].length && heights[new_r][new_c] <= heights[r][c] && !visited.has(`${new_r},${new_c}`)) {
                    res = res || dfs_a(new_r, new_c);
                }
            }
            return res;
        }

        // Check each cell
        const res = new Array();
        for (let r = 0; r < heights.length; ++r) {
            for (let c = 0; c < heights[0].length; ++c) {
                visited = new Set();
                const pacific = dfs_p(r, c);
                visited = new Set();
                const atlantic = dfs_a(r, c);
                if (pacific && atlantic) {
                    res.push([r, c]);
                }
            }
        }

        return res;
    }
}
