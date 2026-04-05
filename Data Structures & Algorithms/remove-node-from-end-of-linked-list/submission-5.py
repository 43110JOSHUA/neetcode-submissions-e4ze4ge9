# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        p1 = dummy
        p2 = head

        # setup gap
        while n > 0:
            p2 = p2.next
            n -= 1
        
        # iterate to nth element
        while p2:
            p2 = p2.next
            p1 = p1.next
        
        # remove
        p1.next = p1.next.next

        return dummy.next