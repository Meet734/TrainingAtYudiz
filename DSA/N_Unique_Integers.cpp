//put negatives on left side and positives on right side
//Time Complexity: O(n)
//Space Complexity: O(1)

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> sumZero(int n) {
        vector<int> ans(n);

        int temp = n/2;
        int mid = temp;
        bool flag = (n&1);  //check if number is odd or even

        for(int i=0;i<n;i++){
            if(i < mid){
                ans[i] = (-1)*temp;
                //upto mid, we will have negative numbers
                temp--;
            }
            else if(flag && (i == mid)){
                //if number is odd, then mid will be 0
                ans[i] = 0;
                temp = 1;
            }
            else if(!flag){
                //if number is even, then we start from 1
                temp++;
                ans[i] = temp;
            }
            else{
                //after mid, we will have positive numbers
                ans[i] = temp;
                temp++;
            }
        }

        return ans;
    }
};
