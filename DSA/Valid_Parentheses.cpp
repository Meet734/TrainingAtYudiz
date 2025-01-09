//use stack to keep track of matching open parentheses
//Time complexity: O(n)
//Space complexity: O(n)

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        int i;
        char c;

        for(i=0;i<s.length();i++){
            c=s[i];
            if(c=='['||c=='('||c=='{'){
                st.push(c);
            }
            else{
                if(st.empty()){
                    return false;
                }
                else if((c==')' && st.top()=='(') || (c==']' && st.top()=='[') || (c=='}' && st.top()=='{')){
                    st.pop();
                }
                else{
                    return false;
                }
            }
        }
        
        return (st.empty());
    }
};