#include<iostream>
using namespace std;

const int maxSize = 5;
int front = 0;
int rear = 0;
int queue[maxSize];

bool isEmpty(){
    return front == rear;
}
bool isFull(){
    return (rear+1)%maxSize == front;
}

void insert(int x){
    if(!isFull()){
        rear = (rear+1)%maxSize;
        queue[rear] = x;
        // cout<<"Inserted: "<<x<<"rear: "<<rear<<endl;
    }
    else{
        cout<<"Queue is Full"<<endl;
    }
}
int remove(){
    if(!isEmpty()){
        front = (front+1)%maxSize;
        return queue[front];
    }
    else{
        cout<<"Queue is Empty"<<endl;
        return -1;
    }
}
void print(){
    int temp = (front+1)%maxSize;
    if(isEmpty()){
        cout<<"Queue is Empty"<<endl;
        return;
    }
    cout<<"Queue: ";
    while(temp != (rear+1)%maxSize){
        cout<<queue[temp]<<" ";
        temp = (temp+1)%maxSize;
    }
    cout<<endl;
}
int main(void){

    insert(2);
    insert(3);
    insert(4);
    insert(5);

    cout<<"IsFull: "<<isFull()<<endl;
    insert(6);

    print();
    cout<<remove()<<endl;
    cout<<remove()<<endl;

    insert(7);
    print();

    cout<<remove()<<endl;
    cout<<remove()<<endl;
    cout<<"IsEmpty: "<<isEmpty()<<endl;

    return 0;

}