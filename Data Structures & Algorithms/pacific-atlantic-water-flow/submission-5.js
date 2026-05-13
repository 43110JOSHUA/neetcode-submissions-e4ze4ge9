class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length;
        let COLS = heights[0].length;
        let pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        let atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

        const dfs = (r, c, ocean) => {
            ocean[r][c] = true;
            let directions = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
            ];
            for (let [dr, dc] of directions) {
                let new_row = r + dr
                let new_col = c + dc;
                if (
                    new_row >= 0 &&
                    new_row < ROWS &&
                    new_col >= 0 &&
                    new_col < COLS &&
                    !ocean[new_row][new_col] &&
                    heights[new_row][new_col] >= heights[r][c]
                ) {
                    dfs(new_row, new_col, ocean);
                }
            }
        };

        // Get cells that can reach Pacfic
        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pac);
            dfs(ROWS - 1, c, atl);
        }
        
        // Get cells that can reach Atlantic
        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pac);
            dfs(r, COLS - 1, atl);
        }

        // Get cells that can reach both
        let res = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pac[r][c] && atl[r][c]) {
                    res.push([r, c]);
                }
            }
        }
        return res;
    }
}