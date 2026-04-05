class Solution:
    def minWindow(self, s: str, t: str) -> str:
        smallest = ""

        p1 = 0
        p2 = 0
        cur = ""
        remaining = t
        
        while p2 < len(s):
            c = s[p2]
            cur += c
            remaining = remaining.replace(c, "", 1)
           
            if remaining == "": # If all chars are found
                if smallest == "":
                    smallest = cur
                else:
                    smallest = cur if len(cur) < len(smallest) else smallest
                p1 += 1
                p2 = p1
                cur = ""
                remaining = t

            else:
                p2 += 1

        return smallest
