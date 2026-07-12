class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = nums;
        this.k = k;

        // Keep k largest elements
        this.minHeap.sort((a, b) => b - a);
        while(this.minHeap.length > k) {
            this.minHeap.pop();
        }
;    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.push(val);
        this.minHeap.sort((a, b) => b - a);

        if (this.minHeap.length > this.k) {
            this.minHeap.pop();
        }

        return this.minHeap[this.minHeap.length - 1];
    }
}
