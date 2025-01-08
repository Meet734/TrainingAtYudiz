//Sort the array in ascending order and then find the second largest element in the array.
//Time Complexity: O(nlogn)
//Space Complexity: O(1)

#include<bits/stdc++.h>
using namespace std;

class Solution {
  public:
    int getSecondLargest(vector<int> &a) {
        
        sort(a.begin(), a.end());   //sort the array in ascending order
        
        int secondMax = a[a.size()-1];
        
        for(int i=a.size()-1;i>=0;i--){
            if(a[i] != secondMax){
                secondMax = a[i];
                break;
            }
        }
        if(a[a.size()-1] == secondMax){
            return -1;
        }
        else{
            return secondMax;
        }
    }
};
