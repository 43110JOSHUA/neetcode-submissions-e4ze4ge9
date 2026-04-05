"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        start = [x.start for x in intervals]
        end = [x.end for x in intervals]
        start.sort()
        end.sort()

        ongoing = 0
        max_concurrent = 0

        start_p = 0
        end_p = 0

        while start_p < len(start):
            if end[end_p] <= start[start_p]:
                ongoing -= 1
                end_p += 1
            if start[start_p] <= end[end_p]:
                ongoing += 1
                start_p += 1

            # Update max
            max_concurrent = max(max_concurrent, ongoing)

    
        return max_concurrent