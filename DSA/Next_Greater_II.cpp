//pop the stack till the top is less than the current element ans update the array, push the element on the stack
//Time complexity: O(n)
//Space complexity: O(n)

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& a) {
        vector<int> ans(a.size(), -1);
        stack<int> st;
        int n = a.size();

        for(int i=2*n-1;i>=0;i--){
            //pop until the top of the stack is less than the current element
            while(!st.empty() && (a[i%n] >= st.top())){
                st.pop();
            }

            //if the stack is not empty and the current element is less than the top of the stack, then push the element on stack
            //check for i<n because we don't want to add duplicates
            if(!st.empty() && (i<n)){
                ans[i] = st.top();
            }

            st.push(a[i%n]);
        }

        return ans;
    }
};