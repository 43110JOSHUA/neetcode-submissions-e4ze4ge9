class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (let s of strs) {
            res += s.length + '#' + s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str);
        // Edge case
        if (!str) {
            return [];
        }

        let res = new Array();
        let i = 0;
        let word_length = '';

        while(i < str.length) {
            if (str[i] != "#") {
                word_length += str[i];
                ++i;
            }
            else { // # so collect word
                ++i;
                word_length = Number(word_length);

                let word = "";
                while (word_length > 0) {
                    word += str[i];
                    ++i;
                    --word_length;
                }
                res.push(word);
            }
        }
        return res;
    }
}
