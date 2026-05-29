class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const parent = new Array(...Array(n).keys());

        function find(node) {
            let cur = node;

            while (cur != parent[cur]) {
                cur = parent[cur];
            }

            return cur;
        }

        let res = n;
        function union(n1, n2) {
            const p1 = find(n1);
            const p2 = find(n2);

            if (p1 != p2) {
                --res;
                parent[p2] = p1;
            }
        }
        
        // Run union find on all edges
        for (const [n1, n2] of edges) {
            union(n1, n2);
        }

        return res;
    }
}
