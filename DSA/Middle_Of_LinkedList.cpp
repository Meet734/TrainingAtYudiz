//take two pointers, slow and fast. Move slow by 1 step and fast by 2 steps. When fast reaches the end, slow will be at the middle of the linked list.
//Time Complexity: O(n)
//Space Complexity: O(1)

#include<bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
     ListNode() : val(0), next(nullptr) {}
     ListNode(int x) : val(x), next(nullptr) {}
     ListNode(int x, ListNode *next) : val(x), next(next) {}
};
 
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        
        ListNode* slow = head;
        ListNode* fast = head;

        while(fast != NULL && fast->next != NULL){
            slow = slow->next;  //slow pointer moves 1 step
            fast = fast->next->next;    //fast pointer moves 2 steps
        }
        return slow;
    }
};
