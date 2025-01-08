#include<iostream>
using namespace std;

struct Node{
    int data;
    Node* next;
    Node(int x){
        data = x;
        next = NULL;
    }
};

void insert(Node* head, int n){
    while(head->next != NULL){
        head = head->next;
    }
    head->next = new Node(n);
}
int remove(Node* head){
    if(head == NULL || head->next == NULL){
        return -1;
    }
    while(head->next->next != NULL){
        head = head->next;
    }
    int x = head->next->data;
    head->next = NULL;
    return x;
}
void print(Node* head){
    while(head != NULL){
        cout<<head->data<<"->";
        head = head->next;
    }
}

Node* insertAtFirst(Node* head, int x){
    Node* temp = new Node(x);
    temp->next = head;
    return temp;
}
Node* removeFirst(Node* head){
    if(head == NULL){
        return NULL;
    }
    Node* temp = head->next;
    cout<<"\nDeleted: "<<head->data<<endl;
    delete head;
    return temp;
}
int main(void){
    Node* head = new Node(10);
    insert(head, 20);
    insert(head, 30);

    print(head);
    cout<<"\nRemove: "<<remove(head)<<endl;
    head = insertAtFirst(head, 40);
    print(head);

    head = removeFirst(head);
    print(head);
}