//Make Hash Map of the array and search for the complement in the hash map, complement = target - a[i]
//Time Complexity: O(n)
//Space Complexity: O(n)

#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& a, int target) {
        unordered_map<int, int> hash;   //using hash map to minimize time complexity

        for(int i=0;i<a.size();i++){
            hash[a[i]] = i;
        }

        for(int i=0;i<a.size();i++){
            int complement = target - a[i];

            //Search for the complement in hash map
            if(hash.find(complement) != hash.end() && hash[complement] != i){
                return {i, hash[complement]};
            }
        }
        return {};  //if there is no such pair
    }
};
