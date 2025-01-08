//binary search to find the element if present, else compare the element with the mid element and return the insert position
//Time Complexity: O(logn)
//Space Complexity: O(1)

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int searchInsert(vector<int>& a, int target) {
        int low = 0, high = a.size()-1;
        int ans;

        while(low <= high){
            int mid = low + (high-low)/2;

            if(a[mid] == target){
                ans = mid;
                break;
            }
            else if(a[mid] > target){
                high = mid-1;
            }
            else{
                low = mid+1;
            }
            cout<<mid<<" ";
        }

        //If element not found, then we should find the insert position
        if(low > high){
            if(a[ans] < target){
                ans++;
            }
        }
        return ans;
    }
};
