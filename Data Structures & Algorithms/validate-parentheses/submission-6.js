class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for (const p1 of s) {
            if ("({[".includes(p1)) {
                stack.push(p1);
            }
            else {
                const p2 = stack.pop();
                if (p1 == ")") {
                    if (p2 != "(") {
                        return false;
                    }
                }
                else if (p1 == "}") {
                    if (p2 != "{") {
                        return false;
                    }
                }
                else if (p1 == "]") {
                    if (p2 != "[") {
                        return false;
                    }
                }
            }
        }
        return stack.length == 0;
    }
}
