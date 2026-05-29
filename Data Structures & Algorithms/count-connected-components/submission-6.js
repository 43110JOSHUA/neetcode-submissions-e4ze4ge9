class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // DFS with Adjacency List

        const adj = new Array(n).fill(null).map(() => new Array());
        const visited = new Array(n).fill(false);
        for (const [n1, n2] of edges) {
            adj[n1].push(n2);
            adj[n2].push(n1);
        }

        function dfs(node) {
            for (const nei of adj[node]) {
                if (!visited[nei]) {
                    visited[nei] = true;
                    dfs(nei);
                }
            }
        }

        // Run dfs on each node
        let res = 0;
        for (let node = 0; node < n; ++node) {
            if (!visited[node]) {
                visited[node] = true;
                dfs(node);
                ++res;
            }
        }

        return res;
    }
}
