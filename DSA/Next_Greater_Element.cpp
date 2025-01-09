//check from end of the array, if the element is greater than the top of the stack, pop the stack and update the map
//Time complexity: O(n)
//Space complexity: O(n)

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& a, vector<int>& b) {
        unordered_map<int, int> map;
        stack<int> st;

        for(int i=b.size()-1;i>=0;i--){
            while(!st.empty() && st.top() <= b[i]){
                st.pop();
            }

            if(!st.empty()){
                map[b[i]] = st.top();
            }
            else{
                map[b[i]] = -1;
            }

            st.push(b[i]);
        }

        vector<int> ans;
        for(int i=0;i<a.size();i++){
            ans.push_back(map[a[i]]);
        }

        return ans;
    }
};