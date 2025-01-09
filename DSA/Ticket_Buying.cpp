//simple greedy approach
//time complexity: O(n)
//space complexity: O(1)

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int timeRequiredToBuy(vector<int>& a, int k) {
        int ans = 0;
        for(int i=0;i<a.size();i++){
            if(i <= k){
                ans += min(a[i], a[k]);
            }
            else{
                ans += min(a[k]-1, a[i]);
            }
        }

        return ans;
    }
};