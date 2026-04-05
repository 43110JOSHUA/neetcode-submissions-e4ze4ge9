class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s_hash = new Map();
        const t_hash = new Map();

        for (let c of t) {
            t_hash.set(c, (t_hash.get(c) ?? 0) + 1);
        }
        
        for (let c of s) {
            if (s_hash.has(c)) {
                s_hash.set(c, s_hash.get(c) + 1);
            }
            else {
                s_hash.set(c, 1);
            }
        }

        // Check if equal
        if (s_hash.size !== t_hash.size) {
            return false;
        }

        for (let [key, val] of s_hash) {
            if (!t_hash.has(key) || t_hash.get(key) !== val) {
                return false;
            }
        }
        return true;
    }
}
