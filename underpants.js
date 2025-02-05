// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

/*
I: takes in any value
O: return a type of value as a string
C:
E:
*/

_.typeOf = function(value){
  // make sure value is an array and not an object
  if(Array.isArray(value)){
    return "array"
  }
  // make sure value is null and not an object
  if(value === null){
    return "null"
  }
  // typeof will cover the rest of the types of strings
  return typeof value
}




/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

/*
I: Takes in an array and a number
O: if array is not an array, return an empty array
C: 
E: What if number is negative
   What if number is greater than array.length
*/


_.first = function(array, number){
 // return an empty array if the array param is not an array
 // if number is an array just return an empty array
  if (!Array.isArray(array)){
    return []
  }
  // return the first element if if no number is given
  // checks if number is valid, if not number return firs telement of array
  if (typeof number !== "number"){
    return array[0]
  } 
  // if number is not positive return an empty list
  // if number is not valid or negative return the whole array
  if (number < 0){
    return [];
  }
  // return the whole array if number is greater than the arrays length
  if(number > array.length){
    return array
  } 
  // accept an argument representing the number of items to include in the output
  // if all conditions pass then slice array to return first number elements
    return array.slice(0, number)
  }
  



/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

/*
I: takes in an array and a number
O: if array is not an array return []
   if number is not given or not a number return just the last number in the array
   otherwise, return the last number items of array
C:
E: What if number is negative 
   what if number is greater than array length
*/

_.last = function(array, number){
 // return an empty array if the array param is not an array
 // if number is an array just return an empty array
if (!Array.isArray(array)){
  return [];
}
// return the first element if if no number is given
// checks if number is valid, if not number return last element in the array
if (typeof number !== "number"){
  return array[array.length - 1]
} 
// if number is not positive return an empty list
// if number is not valid or negative return the whole array
if (number < 0){
  return [];
}
// return the whole array if number is greater than the arrays length
if(number > array.length){
  return array
}
// accept an argument representing the number of items to include in the output
// if first starting index is missing slice from the end index and go backwards
return array.slice(-number)

}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

/*
I: takes in an array and a value
O: return the index of array that is the first occurence of value 
   return -1 if value is not in array
C: 
E: What if value has multiple occurences of value
   what if value isn't in array
*/

_.indexOf = function(array, value){
  // check to see if the array is an array
  if(!Array.isArray(array)){
 // if not an array return -1
    return -1
  }
  // use a for loop to iterate thought the array
  for(let i = 0; i < array.length; i++){
  // check to see if value is in array[i] element 
    if(array[i] === value){
    // if found return its index in the array
      return i;
    }
  }
  // return -1 if no match is found
  return -1;
}




/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

/*
I: takes in an array and value
O: return true if array contains value
   retrun false otherwise
C: must use ternary operator
E: did you use === ?
   what if no value is given
*/

_.contains = function (array, value){
// use ternary operator to see if value is included in the array
// condition ? expression true : expression false
 return array.includes(value) ? true : false
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

/*
I: takes in a collection and a function 
O: check to see if collection is an array then call function with arguments
   check to see if collection is an object then call function with arguments
C: should not have side effects
E: NA
*/

_.each = function (collection, func){
  // check to see if the collection is an array
  if (Array.isArray(collection)){
    // iterate through the collection
    for(var i = 0; i < collection.length; i++){
      // call function on element, index, and collection
      func(collection[i], i, collection)
    }
    // check to see if collection is an object, make sure it is not null, we
    // already know that its not an array
  } else if ( typeof collection === 'object' && collection !== 'null'){
    // loop through the keys in collection we know its an object
    for(var key in collection){
      // call function for each property, propertys value, key, collection
      func(collection[key], key, collection)
    }
  }

}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

/*
I: return a new array 
O: return a new array of all the elements from array with duplicates removed
C: use indexof()
E: should have no side effects
*/

_.unique = function(array, func){
  // initailize empty aray to hold the new array
  let newArr = [];
  // use a for loop to iterate throught the array
  for(let i = 0; i < array.length; i++){
  // check to see if newArr is a part of element if it is not found it returns a -1
     if(newArr.indexOf(array[i]) === -1){
  // if the element is not found it is pushed to the new array
      newArr.push(array[i])
     }
  }
   return newArr
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

/*
I: takes in an array and a function
O: call function for each element in array passing the arguments: element, index, array
   return a new array of elements for which calling function returned true
C:
E: What if function returns something other than true or false 
*/

_.filter = function (array, func){
// initialize an output array to hold new values
  const output = []
    // use a for loop to iterate through the array
  for (let i = 0; i < array.length; i++){
     // call function for each element in the array to equal true
    if (func(array[i], i, array) === true){
      // if element is true push to the output array
      output.push(array[i])
    }
    
  }
  return output
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

/*
I: takes in an array and a function
O: call function for each element in array passing the arguments: element, index, array
   return a new array of elements 
C:
E:
*/

// the same thing is filter except function call equals false
_.reject = function (array, func){
  // initalie an empty array to hold new values
  const output = [];
 // use a for loop to iterate through the array
  for(let i = 0; i < array.length; i++){
    // check if function call paasing the arguments is false
    if(func(array[i], i, array) === false){
      // if false then push to output array
      output.push(array[i])
    }
  }
  return output
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

/*
I: takes in an array and a function
O: return an array of two sub arrays
   an array that contains all the values the function returned truthy
   an array that contains all the values the function returned falsey
C:
E: This is going to return an array of arrays
*/

_.partition = function (array, func){

  const output = [[],[]];

  for(let i = 0; i < array.length; i++){

  }

}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/   //collection          //function           //output


_.map = function(collection, func){
  // create output array
   const output = [];
   //determine if collection is an array
   if(Array.isArray(collection)){
     for(let i = 0; i < collection.length; i++){
        const result = func(collection[i], i, collection) // what is the purpose of the callback
        output.push(result);
     }
   } else {

   }

 // return output array
 return output;
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

/*
I:
O:
C:
E:
*/


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

/*
I:
O:
C:
E:
*/

/*
_.every = function (collection, func){
   if(Array.isArray(collection)){
      // determine if no func was provided
      if(func === undefined){
         for (let i = 0; i < collection.length; i++){
          if(!collection[i]){
              return false;
          }
         }
      } else { // else there was a func
          for (let i = 0; i < collection.length; i++){
            // determine uf the result of invoking func returns a falsy piece of data
           if (func(/current item/, /current index/, /collection/)){
                 return false;
           }
          }
      }
   } else { // its an object

   }
   return true;
}

*/



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

/*
I:
O:
C:
E:
*/


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/*
I:
O:
C:
E:
*/

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

/*
I:
O:
C:
E:
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}