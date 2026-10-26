class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # setup
        starts = []
        ends = []

        for i in intervals:
            starts.append(i[0])
            ends.append(i[1])
        starts.sort()
        ends.sort()

        # order
        res = []

        i= 1
        cur_interval = [starts[0], ends[0]]

        while (i < len(intervals)):
            if (starts[i] <= cur_interval[1]):
                cur_interval[1] = ends[i]
            else: 
                res.append(cur_interval)
                cur_interval = [starts[i], ends[i]]
            i += 1

        res.append(cur_interval)

        return res