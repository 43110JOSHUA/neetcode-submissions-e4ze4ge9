class Solution:
    def isValid(self, s: str) -> bool:
        # The last open bracket seen must be the first open bracket closed

        opened = []
        for c in s:
            # Add to stack
            if c in "({[":
                opened.append(c)
            
            # Pop from stack
            else:
                if not opened:
                    return False
                elif c == ")":
                    if opened[-1] != "(":
                        return False
                elif c == "]":
                    if opened[-1] != "[":
                        return False
                elif c == "}":
                    if opened[-1] != "{":
                        return False

                opened.pop()
        
        return not opened
       
