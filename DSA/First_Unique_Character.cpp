//Keeping track of the occurance of character in hash table and then finding the first unique character
//Time complexity: O(n)
//Space complexity: O(1)

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int firstUniqChar(string s) {
        vector<int> a(26, -99); //hash table of 26 values

        for(int i=0;i<s.length();i++){
            int idx = s[i]-97;
            if(a[idx] != -99){  //if the value is already present
                a[idx] = -1;
            }
            else{   //if the value is not present
                a[idx] = i;
            }
        }

        int ans = INT_MAX;
        for(int i=0;i<26;i++){
            cout<<a[i]<<" ";
            if(a[i] >= 0){
                ans = min(a[i], ans);
            }
        }
        if(ans == INT_MAX){
            return -1;
        }
        return ans;
    }
};