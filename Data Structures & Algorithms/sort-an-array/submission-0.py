class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:

        # merge: combines two already-sorted halves of arr into one sorted section.
        # The result is written back into arr[L..R].
        def merge(arr, L, M, R):
            # Copy each half into a temporary list. We need copies because
            # we're about to overwrite arr[L..R] while still reading from them.
            left, right = arr[L:M+1], arr[M+1:R+1]

            # i = next spot to write in arr (starts at the beginning of this section)
            # j = current index in `left`
            # k = current index in `right`
            i, j, k = L, 0, 0

            while j < len(left) and k < len(right):
                if left[j] <= right[k]:
                    arr[i] = left[j]
                    j += 1
                else:
                    arr[i] = right[k]
                    k += 1
                i += 1  # move to the next write position either way

            while j < len(left):
                arr[i] = left[j]
                j += 1
                i += 1

            while k < len(right):
                arr[i] = right[k]
                k += 1
                i += 1

        def mergeSort(arr, l, r):
            if l >= r:
                return
            m = (l + r) // 2

            mergeSort(arr, l, m)
            mergeSort(arr, m + 1, r)

            # Both halves are now sorted; merge them into one sorted section.
            merge(arr, l, m, r)

        mergeSort(nums, 0, len(nums) - 1)
        return nums