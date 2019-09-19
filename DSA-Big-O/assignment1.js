/* 
What is the Big O for this?
    -   part1: O(1)
    -   part2: O(n)
Even or odd
    0(1)
    -   there is no iteration in this function, therefore, it must only occur once.
Are you here?
    O(n)
    -   We are iterating one at a time. for a given length depending on array size.

Doubler
    O(n^2)
    -   We are iterating and multiplying n by two then re-running with 
        new n => 2^2 => 4^2 => 8^2 => 16^2... exponential growth/ reducing 
        num of ops by 50% on each iteration.
Naive search
    O(n)
    -   iterating one at a time till array[i] === item.
        Time of completion depends on n.
Creating pairs
    O(nlogn) or O(n) or something totally different
    [1,2,3,4,5,6,7,8,9,10,11,12]
    -   iterating on n plus a diminishing value of n... not sure 
        if it would be O(nlogn) or something like O(n + 1)
Compute the sequence
    O(n)
    -   interates one at a time increasing the value 
        with dimishingly smaller increase of value

// using 5
function compute(5) {
    let result = [];

    // iterate by one until equals num
    for (let i = 1; i <= num; i++) {

        // if one => [...,0]
        if (i === 1) {
            result.push(0);
        }

        // if 2 => [...,1]
        else if (i == 2) {
            result.push(1);
        }

        // otherwise => [...,10]
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result; => [0, 1, 10, 21, 32]
}
An efficient search
    O(logn)
    -   with each iteration we are reducing the array by 50%
        we are finding the midpoint and adding or subtracting 1
        if + 1, that means item is equal to a value that exists
        somewhere in the upperhalf of array. if - 1 its in the
        bottom half. given [1,2,3,4,5,6,7,8], 7 => [4,5,6,7,8] => [6,7,8] => 7 Done!
Random element
    O(n)
    - we are not iterating, just returning one random value
What Am I?
    O(n)
    -   Tricky one. I think it might be trying to find all odd numbers
        as it counts to n. It seems to iterate by 1 each time.
*/