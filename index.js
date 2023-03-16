//Question 1
//While mutating array methods change the objects after use and do not return any new arrays,
//non-mutating arrays do not modify the original array but returns a new array which contains the changes made.

//Mutating arrarys:
/** 
 * array.splice()
 * pop
 * push
 * shift
 * unshift
 */

//Non-mutating arrays
/**
 *array.slice()
 * array.map()
 * array.concat()
 * array.filter()
 * indexOf()
 */

// Question 2

let languages =  ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']; 

languages.push('Kotlin');
console.log(languages);
languages.splice(3,0,'Java');
console.log(languages);
languages.shift();
console.log(languages);
languages.unshift('Scala', 'Swift');
console.log(languages);
languages.splice(5,1,'GO', 'RUST');
console.log(languages);

//Question 3
[ 'apple', 'mango', 'banana' ]

//Question 4
function maxNumber(arr){
    let max = arr[0];
    for (let index=0; index<arr.length;index++){
        if (arr[index]>max) {
            max = arr[index];
        }
    }
    return max;
}
 const arrayOfNumbers = [2,3,8,6,18,20,48];
 console.log(maxNumber(arrayOfNumbers));
 //Question 5
 function valTimesIndex(){}