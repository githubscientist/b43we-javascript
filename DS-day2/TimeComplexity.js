// Time Complexity

/*
    Standard measure to measure the running time of an algorithm or a piece of code


    Algorithm1
    Algorithm2
    Algorithm3

    Performance:

    1. Time Complexity
    2. Space Complexity

    Mathematically : Asymptotic Notations

    1. Big - 'O' - upper bound
    2. Big - 'Omega' - lower bound
    3. Big - 'Theta' - tight bound

    cases / situations:

    1. Worst case
    2. Average case
    3. Best case

    For example:

    searching for a number in an array

    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    key = 1

    key 3 is found in the array
    Algorithm: Linear Search

    worst case: either if the key input is the last element of the array or if the key element does not present in the array

*/

let a = 0, b = 0;
for (i = 0; i < N; i++) {
    a = a + rand();
}
for (j = 0; j < M; j++) {
    b = b + rand();
}

/*
    time complexity ?

    O(1)
    O(logN)
    O(N)
    O(NlogN)
    O(N^2)
    O(N^2logN)
    O(N^3)
    O(N^3logN)
    O(2^N)
    O(N!)

    declarations, conditional statements, expressions - O(1) constant time

    let a = 0, b = 0; // O(1)

    for (i = 0; i < N; i++) {
        a = a + rand();
    } // O(N)

    How many times the loop runs?
    i = 0, 1, 2, 3, .... N-1
    If N = 5, i = 0, 1, 2, 3, 4 => 5 times
    If N = 3, i = 0, 1, 2 => 3 times
    If N = 7, i = 0, 1, 2, 3, 4, 5, 6 => 7 times


    for (j = 0; j < M; j++) {
        b = b + rand();
    } // O(M)

    i = 0, 1, 2, 3, 4.... M-1 => M times

    Total time complexity, T(N, M) = 1 + N + M (remove the constants)
                                   = N + M

                                   N = 2M
                                   M = N/2

    O(N + M)
*/

/*
    let a = 0; // O(1)
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    } // (N * (N+1))/2

    Time Complexity ?

    for (i = 0; i < N; i++)

    i = 0, 1, 2, 3 ,4.... N-1 => N


    Assume: N = 5

    i = 0; j = 5, 4, 3, 2, 1 => 5
    i = 1; j = 5, 4, 3, 2 => 4
    i = 2; j = 5, 4, 3 => 3
    i = 3; j = 5, 4 => 2
    i = 4; j = 5 => 1

    Total number of times, the loops run = 5 + 4 + 3 + 2 + 1
                                         = 15

    If N = 5, runs = 15
    If N = 3, runs = 6
    If N = 10, runs = 55

    number of executions = Sum of first N natural numbers
                         = [N * (N+1)]/2

    S(5) = [5 * (5+1)]/2
         = (5 * 6)/2
         = 30/2
         = 15

    Total Time Complexity, T(N) = 1 + (N * (N+1))/2
                                = (N^2 + N)/2
                                = 1/2 * (N^2 + N)
                                = N^2 + N
                                = N^2

    O(N^2)

*/

/*
    let i, j, k = 0;
    for (i = n / 2; i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    } 

    N = 6; i = 3, 4, 5, 6 => 4 times
    N = 10; i = 5, 6, 7, 8, 9, 10 => 6 times

    N/2 + 1

    inner loop:

    N = 5; j = 2, 4 => 2 times
    N = 6; j = 2, 4 => 2 times
    N = 10; j = 2, 4, 8 => 3 times
    N = 14; j = 2, 4, 8 => 3 times
    N = 18; j = 2, 4, 8, 16 => 4 times

    log2(N)

    j = 2, 4, 8, 16, 32, 64, 128, 256, 512, ... N

    2^1, 2^2, 2^3, 2^4, ....N

    2^x = N, solve for x

    Solution:

    Take log2 on both the sides

    log2(2^x) = log2(N) [log(a^x) = x log(a)]
    x log2(2) = log2(N) [loga(a) = 1]
    x(1) = log2(N)
    x = log2(N)

    Total Time Complexity = 1 + (N/2 + 1) * (log2(N))
                          = (N/2 + 1) * (log2(N))
                          = N/2 * log2(N) + log2(N)
                          = N/2 * log2(N)
                          = 1/2 * N * log2(N)
                          = Nlog2(N)
    
    O(NlogN)

*/

/*
    O(2^N)

    Program: find the combinations for a given array of numbers

    [1, 2, 3]

    find how many different ways we can select the persons from the above list ?

    0: ()
    1: (1), (2), (3)
    2: (1, 2), (2, 3), (1, 3)
    3: (1, 2, 3)

    [1, 2, 3, 4]

    0: ()
    1: (1), (2), (3), (4)
    2: (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)
    3: (1, 2, 3), (1, 2, 4), (2, 3, 4), (1, 3, 4)
    4: (1, 2, 3, 4)

    number of elements = 3, total number of ways = 8
    number of elements = 4, total number of ways = 16

    For a given N values, 2^N, number of ways to select the values
*/

/*
    O(N!)

    Program: find the different arrangements of a given string

    Input: abc

    Output:
    abc
    acb
    bca
    bac
    cab
    cba

    N - length of the string

    N = 3, executions = 6
    N = 4, executions = 24
    N = 5, executions = 120

    N! = 1 * 2 * 3 * .... * N

    5! = 5 * 4 * 3 * 2 * 1 = 120
    3! = 3 * 2 * 1 = 6

*/