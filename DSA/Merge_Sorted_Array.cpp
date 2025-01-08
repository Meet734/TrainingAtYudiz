//start compare from the end, so we don't need to shift elements
//Time Complexity: O(m+n)
//Space Complexity: O(1)

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    void merge(vector<int>& a, int m, vector<int>& b, int n) {
        int idx = m+n-1;
        int i = m-1;
        int j = n-1;

        //start merging from the end, so we don't need to shift elements
        while(i >= 0 && j >= 0){
            if(a[i] >= b[j]){   //compare the elements from the end
                a[idx] = a[i];
                i--;
            }
            else{
                a[idx] = b[j];
                j--;
            }
            idx--;
        }
        while(i >= 0){  //if there are still elements left in a
            a[idx] = a[i];
            i--;
            idx--;
        }
        while(j >= 0){  //if there are still elements left in b
            a[idx] = b[j];
            j--;
            idx--;
        }
    }
};
