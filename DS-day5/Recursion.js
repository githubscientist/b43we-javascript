/*
    Recursion is an algorithm or a function that calls itself.!

*/

// function recursion() {
//     console.log('hello world!');
//     recursion();
// }

// recursion();

// function printHello(times) {
//     if (times == 0) return;
//     console.log('hello');
//     printHello(times-1);
// }

// printHello(3);

/*
    Recursion Tree:

    printHello(5)
        - times = 5, 5 == 0, false x
        - console.log('hello') ✔
        - printHello(4)
            - times = 4, 4 == 0, false x
            - console.log('hello') ✔
            - printHello(3)
                - times = 3, 3 ==0, false x
                - console.log('hello')✔
                - printHello(2)
                    - times = 2, 2 == 0, false x
                    - console.log('hello')✔
                    - printHello(1)
                        - times = 1, 1 == 0, false
                        - console.log('hello')✔
                        - printHello(0)
                            - times = 0, 0 == 0, true ✔



    printHello(5)
*/

// Recursion function to print the first N natural numbers

// function printNumbers(N) {
//     if (N == 0) return;
//     printNumbers(N - 1);
//     console.log(N);
// }

// printNumbers(5)

/*
    N = 5

    Output:

    1
    2
    3
    4
    5

    printNumbers(5)
        - N = 5, 5 == 0, false x
        - console.log(N) ✔
        - printNumbers(4)
            - N = 4, 4 == 0, false x
            - console.log(N) ✔
            - printNumbers(3)
                - N = 3, 3 ==0, false x
                - console.log(N) ✔
                - printNumbers(2)
                    - N = 2, 2 == 0, false x
                    - console.log(N) ✔
                    - printNumbers(1)
                        - N = 1, 1 == 0, false
                        - console.log(N) ✔
                        - printNumbers(0)
                            - N = 0, 0 == 0, true ✔
    
    Output:

    5
    4
    3
    2
    1

    // function printNumbers(N) {
    //     if (N == 0) return;
    //     printNumbers(N - 1);
    //     console.log(N);
    // }

    // printNumbers(5)

    printNumbers(5):
        - N = 5, 5 == 0, false x
        - printNumbers(4) ✔
            - N = 4, 4 == 0, false x
            - printNumbers(3) ✔
                - N = 3, 3 == 0, false x
                - printNumbers(2) ✔
                    - N = 2, 2 == 0, false x
                    - printNumbers(1) ✔
                        - N = 1, 1 == 0, false x
                        - printNumbers(0) ✔
                            - N = 0, 0 == 0, true ✔
                        - console.log(1) !
                    - console.log(2) !
                - console.log(3) !
            - console.log(4) !
        - console.log(5) !

    
    
    printNumbers(5)
    
    Output:

    1
    2
    3
    4
    5


*/

// Recurrence Relation

// Write a recurrence relation
// convert the recurrence relation to a recursion function

/*
    Problem: Find the sum of N natural numbers

    Input:
    5

    Output:

    1 + 2 + 3 + 4 + 5 = 15

    Input: 10
    Output: 55

    Input: 4
    Output: 10
*/

/*
    Define a base condition/case

    S(N) is a function of N, where N -> natural number,1, 2, 3, 4, .... N


    Base cases:

    N = 0, S(0) = 0
    N = 1, S(1) = 1
    ----------------

    for N = 2, S(2) = 1 + 2 = 3
    for N = 3, S(3) = 1 + 2 + 3 = 6
    for N = 4, S(4) = 1 + 2 + 3 + 4 = 10
    for N = 5, S(5) = 1 + 2 + 3 + 4 + 5 = 15

    Backward Substitution:

    Base cases:

    N = 0, S(0) = 0
    N = 1, S(1) = 1
    ----------------

    for N = 2, S(2) = S(1) + 2 = 3
    for N = 3, S(3) = S(2) + 3 = 6
    for N = 4, S(4) = S(3) + 4 = 10
    for N = 5, S(5) = S(4) + 5 = 15

    Generalize:

    for N = 0, S(N) = 0
    for N = 1, S(N) = 1
    for all N>1, S(N) = S(N-1) + N => Recurrence Relation
*/

// function S(N) {
//     if (N == 0) return 0;
//     if (N == 1) return 1;
//     return S(N - 1) + N;
// }

// console.log(S(15))

/*
    Recursion Tree:

    S(5):
        return S(4) + 5
                |
                |__ return S(3) + 4
                            |
                            |__ return S(2) + 3
                                        |
                                        |__ return S(1) + 2
                                                    |
                                                    |__ return 1
    
    
    S(5) # 15
*/

// Recursion function for finding the factorial of a number

/*
    Base cases:

    N = 0, F(0) = 1
    N = 1, F(1) = 1
    ----------------

    for N = 2, F(2) = 1 x 2 = 3
    for N = 3, F(3) = 1 x 2 x 3 = 6
    for N = 4, F(4) = 1 x 2 x 3 x 4 = 10
    for N = 5, F(5) = 1 x 2 x 3 x 4 x 5 = 15

    Backward Substitution:

    for N = 2, F(2) = F(1) x 2 = 3
    for N = 3, F(3) = F(2) x 3 = 6
    for N = 4, F(4) = F(3) x 4 = 10
    for N = 5, F(5) = F(4) x 5 = 15

    For N = 0 or 1, F(N) = 1
    For all N>1, F(N) = F(N-1) x N
*/

// function F(N) {
//     if (N == 0 || N == 1) {
//         return 1;
//     }
//     return F(N - 1) * N;
// }

// console.log(F(5))