//sort array first and then fix one element and then find the other two elements using two pointer approach
//Time Complexity = O(n^2)
//Space Complexity = O(n)
#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& a) {
        sort(a.begin(), a.end());
        vector<vector<int>> ans;
        set<vector<int>> unique;

        //fix one point and then find the other two points
        for(int i=0;i<a.size();i++){
            int j = i+1;
            int k = a.size()-1;

            while(j<k){
                if(a[i]+a[j]+a[k] == 0){
                    unique.insert({a[i], a[j], a[k]});
                    j++;
                    k--;
                }
                else if(a[i]+a[j]+a[k] < 0){
                    j++;
                }
                else{
                    k--;
                }
            }
        }

        for(auto x : unique){
            ans.push_back(x);
        }
        return ans;
    }
};
