class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (!n) {
            return true;
        }

        // Populate adjacency table
        const adj = new Map();
        for (let i = 0; i < n; ++i) {
            adj.set(i, new Array());
        }

        for (const[n1, n2] of edges) {
            adj.get(n1).push(n2);
            adj.get(n2).push(n1);
        }

        // Search
        const visited = new Set();
        function dfs(n1, prev) {
            if (visited.has(n1)) {
                return false;
            }

            visited.add(n1);
            for (const n2 of adj.get(n1)) {
                if (n2 == prev) {
                    continue;
                }
                if (!dfs(n2, n1)) {
                    return false;
                }
            }
            return true;
        }

        return dfs(0, -1) && n == visited.size;
    }
}