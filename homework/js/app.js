


// 1.) Interpolation is the inserting of one string into another (the
// strings being could have letters or numbers), while concatenation
// is the joining of two or more strings from one end to another.



// 2.)

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a + " < " + b + " = " + a < b);
console.log(c + " > " + d + " = " + (c > d));
console.log("Name === Name = " + ('Name' === 'Name'));
console.log(a + " + " + b + " === " + c + " = " + (a + b === c));
console.log(a + " + " + a + " < " + d + " = " +(a + a < d));
console.log(e + " !== " + 'Kevin' + " = " + (e !== 'Kevin'));
console.log("48 == " + '48' + " = " + (48 == '48'));

// 3.)
//     Infinite loop 1:
//     The while loop that is an infinite loop because the condition
//     for running the while loop always evaluates to true and there
//     is nothing within the body of this loop that changes the condition
//     to false so that it would stop running.

//     Infinite loop 2:
//     This loop is not an infinite loop because it contains
//     a statement that will change the running condition of
//     of while loop so that it won't run.
//

//     Reading Code:
//     It will output the concatenation of twenty A's.
//     After I ran the code, it output twenty A's.

for(var i = 0; i < 999; i++)
{
  console.log(i + " ");
}

//     For Loop 1:
//     The first component of the for loop is the initialization of the loop's iterator.
//     The second statement is the conditional, and the last statement is th


//     For Loop 2: reverse

for(var i = 999; i > 0; i--)
{
  console.log(i + " ");
}

for(var i = 0; i < 10; i++)
{
  console.log(`The value of i is: ${i} of 10`);
}
