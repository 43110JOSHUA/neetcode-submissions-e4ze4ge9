class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /^[a-zA-Z0-9]+$/;
        let p1 = 0;
        let p2 = s.length - 1;

        while (p1 < p2) {
            if (!regex.test(s[p1])) {
                ++p1;
            }
            else if (!regex.test(s[p2])) {
                --p2;
            }
            else {
                if (s[p1].toLowerCase() != s[p2].toLowerCase()) {
                    return false;
                }
                ++p1;
                --p2;
            }
        }
        return true;
    }
}
