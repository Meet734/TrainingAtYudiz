//Start comparing from end of the LL using recursion and then update the temp pointer
//Time complexity: O(n)
//Space complexity: O(1)

#include<bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};
class Solution {
public:
    ListNode* temp = NULL;
    int max;

    ListNode* removeNodes(ListNode* head) {
        if(head->next == NULL){
            max = head->val;
            temp = head;
            return head;
        }
        
        removeNodes(head->next);
        
        if(head->val >= max){
            head->next = temp;
            temp = head;
            max = temp->val;
        }
            return temp;
    }
};