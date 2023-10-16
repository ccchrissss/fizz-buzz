function solution(number){

  let arr = [0, 0, 0]

  for (let i = 1; i < number; i++) {
    
    if ( i % 3 == 0 && i % 5 != 0 ) { arr[0] += 1 }
    if ( i % 3 != 0 && i % 5 == 0 ) { arr[1] += 1 }
    if ( i % 3 == 0 && i % 5 == 0 ) { arr[2] += 1 }

  }

  return arr

}

console.log(solution(20))


// parameters: number    // an integer
// return: array     // [A, B, C] A is # of multiples of just 3; B is # of multiples of just 5; C is # of multiples of 3 and 5 b
// e.g. solution(15)
// results in [4, 2, 0]

// declare a variable arr and set it to an array of [0, 0, 0]
// create a for loop starting with i at 1, while i is less than number
// if i % 3 == 0 and i % 5 != 0 then add and reassign 1 to arr[0]
// if i % 3 != 0 and i % 5 == 0 then add and reassign 1 to arr[1]
// if i % 3 == 0 and i % 5 == 0 then add and reassign 1 to arr[2]
// end loop
// return arr
