#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int search(vector<int>& a, int target) {
        
        int low = 0, high = a.size()-1;

        while(low <= high){
            int mid = (high+low)/2;

            if(a[mid] == target){
                return mid;
            }
            else if(a[mid] >= a[low]){  //left half is sorted
                if(a[low] <= target && target <= a[mid]){   //target lies in the left half
                    high = mid-1;
                }
                else{   //target lies in the right half
                    low = mid+1;
                }
            }
            else{   //right half is sorted
                if(a[mid] <= target && target <= a[high]){  //target lies in the right half
                    low = mid+1;
                }
                else{   //target lies in the left half
                    high = mid-1;
                }
            }
        }

        return -1;
    }
};