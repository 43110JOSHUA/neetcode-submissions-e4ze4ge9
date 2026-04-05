class Solution:
    def isPalindrome(self, s: str) -> bool:
        p1, p2 = 0, len(s) - 1

        while p1 < p2:
            l1 = s[p1]
            l2 = s[p2]
            
            if not l1.isalnum() or not l1:
                p1 += 1
            elif not l2.isalnum() or not l2:
                p2 -= 1
            else: # both valid so compare
                print("l1: " + l1,"l2: " + l2)
                if l1.lower() != l2.lower():
                    return False
                p1 += 1
                p2 -= 1
        
        return True