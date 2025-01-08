//keep track of the index of the last '(', which hasn't been matched. Initialize the stack by -1.
//Time Complexity = O(n)
//Space Complexity = O(n)
#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int longestValidParentheses(string s) {
    
        stack<int> st;
        st.push(-1);
        int ans = 0;

        for(int i=0;i<s.length();i++){
            if(s[i] == '('){
                st.push(i);
            }
            else{
                st.pop();
                if(st.empty()){
                    st.push(i);
                }
                else{
                    ans = max(ans, i-st.top());
                }
            }

        }     
        return ans;
    }  
};
