#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& a) {
        
        int max = a[0];
        int sum = 0;
        for(int i=0;i<a.size();i++){
            sum += a[i];
            
            if(sum >= max){
                max = sum;
            }
            if(sum <= 0){
                sum = 0;    //if the sum is negative then no need to wait for more elements
            }

        }

        return max;
    }
};