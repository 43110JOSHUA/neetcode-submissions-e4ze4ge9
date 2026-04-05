class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s_freq = new Array(26).fill(0);
        const t_freq = new Array(26).fill(0);

        for (const i in s) {
            s_freq[s.charCodeAt(i) - 97] += 1; // 97 is ascii code of "a"
        }
        for (const i in t) {
            t_freq[t.charCodeAt(i) - 97] += 1;
        }

        // Compare
        for (let i = 0; i < 26; ++i) {
            if (s_freq[i] != t_freq[i]) {
                return false;
            }
        }
        return true;
    }
}
