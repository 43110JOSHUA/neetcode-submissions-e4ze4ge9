class Solution {
    public int getSum(int a, int b) {
        while (b != 0) {
            int carry_over = (a & b) << 1;
            a = a ^ b;
            b = carry_over;
        }
        return a;
    }
}
