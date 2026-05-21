/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const newToOld = new Map();

        function dfs_clone(node) {
            if (newToOld.has(node)) { // we already cloned this node
                return newToOld.get(node);
            }

            const clone = new Node(node.val);
            newToOld.set(node, clone);
            for (const nei of node.neighbors) { // we need to clone neighbors
                clone.neighbors.push(dfs_clone(nei));
            }

            return clone;
        }

        if (!node) {
            return null;
        }
        return dfs_clone(node);
    }
}
