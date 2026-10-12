# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        # Index all but first nodes
        nodes = []

        p1 = head.next
        while (p1):
            nodes.append(p1)
            p1 = p1.next
        
        # Create pattern
        p1 = 0
        p2 = len(nodes) - 1
        cur_node = head

        while (p2 >= p1):
            # Edge case: odd number of nodes
            if p2 == p1:
                cur_node.next = nodes[p1]
                p1 += 1
                cur_node = cur_node.next

            else:
                cur_node.next = nodes[p2]
                p2 -= 1
                cur_node = cur_node.next

                cur_node.next = nodes[p1]
                p1 += 1
                cur_node = cur_node.next
        
        cur_node.next = None




