// Problem 1 Solution
var sum = 0;
for (var i = 0; i < 1000; i++)
{
    if (i % 3 === 0)
    {
        sum += i;
    }
    else if (i % 5 === 0)
    {
        sum += i;
    }    
}
console.log(sum);

// Problem 2 Solution

/* z = "current" fib sequence number
   x =  "old" fib sequence number
   y = "oldest" fib sequence number
*/
var x = 0;
var y = 0;
var z = 1;
var sum = 0;

for (x = 0; z < 4000000; z = x + y )
{
    if (z % 2 === 0)
    {
        sum += z;
    }
    y = x;
    x = z;
}
console.log("The sum of the even valued terms in the Fibonacci sequence is: " + sum);

// Problem 3 Solution
function IsItPrime(test)
{
    if (test === 2 || test === 3 || test === 5 || test === 7)
    {
    return true;
    }
    else if (test === 1)
    {
    return false;
    }
    else if (test % 2 === 0 || test % 3 === 0 || test % 5 === 0 || test % 7 === 0 )
    {
    return false;
    }
    else if (test % test === 0 || test % 1 === 0)
    {
    return true;     
    }
    else
    {
    return false;
    }
}

var n = 13195;
var primeFactor = [];
for (i=1; i <= n; i++)
{
    if (IsItPrime(i))
    {
        if(n % i === 0)
        {
            primeFactor.push(i);
        }
    }
}
var number = 0;
console.log(primeFactor);
number = primeFactor[0];
console.log(number);
var z = 0;
var x = 0;
var which = 0;
for (i = 0; z < n; i++)
{
    if(i===0)
    {
        z = primeFactor[i] * primeFactor[i + 1];
        console.log(z);
        which = i + 1;
    }
    else if(i>0)
    {
        x = z * primeFactor[i + 1];
        console.log(x);
        z = x;
        which = which + 1;
    }
}
console.log(z);
var LargePrime = 0;
LargePrime = primeFactor[which];
console.log(LargePrime);
