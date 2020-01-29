// Expression syntax in JavaScript

/*
multi
line
comments
*/

// bools
true
false

// Logic
!false
true && false
true || false

// Numbers (all the same type)
3.14
2
-1

// Equality
3 === 3.0 // true
3 !== 3.14 // true

// Ordering
3 > 2
3 >= 2
2 < 3
2 <=3 // all true

// Strings
'hello'
"hello" // single or double quotes work

// Concatenation
'a' + 'b' === 'ab' // true

// Arithmetic
3 + 2 === 5
3 - 2 === 1
3 * 2 === 6
3 / 2 === 1.5
3 % 2 === 1
3 ** 2 === 9 // all true

// Type coercion
'3' + 2 === '32'
'3' + true === '3true'
'3' - 2 === 1
3 + true === 4 // all true

// Loose equality
'3' == 3 // true
'3' === 3 // false
1 == true // true
false == '' // true
'' == 0 // true

// Template strings
'3 + 2 is ' + (3 + 2)
'3 + 2 is ${3+2}'
