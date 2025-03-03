📜 JavaScript Practice Questions & Solutions (Loops & Arrays)
This document contains JavaScript questions with detailed solutions.
Click on any question to reveal the answer. 🚀


3️⃣ Loops (5 Questions)
11. Write a for loop to print numbers from 10 to 1 in reverse. for (let i = 10; i >= 1; i--) {

    console.log(i);

}

12. Use a while loop to print multiples of 3 from 3 to 30. let num = 3;

while (num <= 30) {

    console.log(num);

    num += 3;

}

13. Write a program to calculate the sum of numbers from 1 to 100 using a loop. let sum = 0;

for (let i = 1; i <= 100; i++) {

    sum += i;

}

console.log("Sum:", sum); // Output: 5050

14. Create a nested loop to print a star pattern. for (let i = 1; i <= 5; i++) {

    let stars = "";

    for (let j = 1; j <= i; j++) {

        stars += "*";

    }

    console.log(stars);

}

15. Use a for...of loop to iterate over the string "JavaScript". let str = "JavaScript";

for (let char of str) {

    console.log(char);

}


4️⃣ Arrays (5 Questions)
16. Remove duplicate values from an array. let arr = [1, 2, 3, 2, 4, 3, 5];

let uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // [1, 2, 3, 4, 5]

17. Find the second largest number in an array. function secondLargest(arr) {

    let sorted = [...new Set(arr)].sort((a, b) => b - a);

    return sorted.length > 1 ? sorted[1] : null;

}

console.log(secondLargest([10, 20, 5, 30, 30])); // Output: 20

18. Sort an array in descending order. let numbers = [5, 2, 9, 1, 5, 6];

numbers.sort((a, b) => b - a);

console.log(numbers); // [9, 6, 5, 5, 2, 1]

19. Reverse an array without using .reverse(). function reverseArray(arr) {

    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {

        reversed.push(arr[i]);

    }

    return reversed;

}

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

20. Find the most frequent element in an array. function mostFrequent(arr) {

    let freqMap = {};

    let maxFreq = 0, mostFrequentNum = null;

    for (let num of arr) {

        freqMap[num] = (freqMap[num] || 0) + 1;

        if (freqMap[num] > maxFreq) {

            maxFreq = freqMap[num];

            mostFrequentNum = num;

        }

    }

    return mostFrequentNum;

}

console.log(mostFrequent([1, 3, 3, 2, 3, 2, 2, 2, 2])); // Output: 2



