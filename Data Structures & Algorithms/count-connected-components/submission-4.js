class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const parent = new Array(...Array(n).keys());

        function find(n1) {
            res = n1;

            while (res != parent[res]) {
                res = parent[res];
            }

            return res;
        }

        function union(n1, n2) {
            const p1 = find(n1);
            const p2 = find(n2);

            if (p1 == p2) {
                return 0;
            }
            else {
                parent[p1] = p2;
            }
            return 1;
        }

        let res = n;
        for (const [n1, n2] of edges) {
            res -= union(n1, n2);
        }

        return res;
    }
}
