#include<iostream>
using namespace std;

int a[10];
int top = -1;

void push(int x){
    if(top >= 9){
        cout<<"Stack Overflow"<<endl;
        return;
    }
    a[++top] = x;
}
int pop(){
    if(top == -1){
        cout<<"Stack Underflow"<<endl;
        return -1;
    }
    return a[top--];
}
int topElement(){
    if(top == -1){
        cout<<"Stack is Empty"<<endl;
        return -1;
    }
    return a[top];
}
int isEmpty(){
    return top == -1;
}

int main(void){

    push(2);
    push(3);
    push(4);
    cout<<topElement()<<endl;
    cout<<pop()<<endl;
    cout<<topElement()<<endl;
    cout<<pop()<<endl;
    cout<<pop()<<endl;
    cout<<pop()<<endl;
    cout<<isEmpty()<<endl;

    return 0;    
}