class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const visited = new Set();

        function dfs(row, col, str) {
            if (!str) return true;

            // Get all neighbors that are the next needed letter
            const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
            for (const [dx, dy] of directions) {
                const new_row = row + dx;
                const new_col = col + dy;
                const key = `${new_row},${new_col}`;
                if (0 <= new_row && new_row < board.length &&
                    0 <= new_col && new_col < board[0].length &&
                    board[new_row][new_col] === str[0] &&
                    !visited.has(key)) {
                        visited.add(key);
                        if (dfs(new_row, new_col, str.slice(1))) return true;
                        visited.delete(key); // backtrack
                }
            }
            return false;
        }

        // run dfs on every tile
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === word[0]) {
                    visited.add(`${i},${j}`);
                    if (dfs(i, j, word.slice(1))) return true;
                    visited.delete(`${i},${j}`);
                }
            }
        }

        // Not found
        return false;
    }
}
