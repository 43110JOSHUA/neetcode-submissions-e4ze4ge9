class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map(); // freq -> string[]

        for (const s of strs) {
            let freq = new Array(26).fill(0);
            for (const c of s) {
                freq[c.charCodeAt(0) - 97] += 1;
            }
            freq = freq.join();

            const group = groups.get(freq) ?? [];
            group.push(s);
            groups.set(freq, group);
        }

        const res = [];
        for (const ls of groups.values()) {
            res.push(ls);
        }
        return res;
    }
}
