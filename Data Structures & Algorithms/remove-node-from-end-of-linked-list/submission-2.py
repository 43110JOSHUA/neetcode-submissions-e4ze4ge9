# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        nodes = dict()

        # Add all nodes to dictionary
        cur = head
        i = 0
        while cur != None:
            nodes[i] = cur
            cur = cur.next
            i += 1

        # Remove node
        target = len(nodes) - n
        if target == 0:
            head = head.next
        else:
            nodes[target - 1].next = nodes.get(target + 1, None)
        

        return head