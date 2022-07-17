// Lession I learnt while trying this out: 
//I discover I can't use length attribute because it's readonly and null can't be assigned

//For in return key of an iterable object which are indices for array or string if given
//For of return value of an iterable object which indices are number for the string it will not
//length of the array is based on the ones with number indices
/*E.g
let arr = ['el1', 'el2', 'el3'];

arr.addedProp = 'arrProp';

// elKey are the property keys
for (let elKey in arr) {
  console.log(elKey);
}
// elValue are the property values
for (let elValue of arr) {
  console.log(elValue)
}

Result of E.g:
['el1', 'el2', 'el3', addedProp: 'arrProp']
0: "el1"
1: "el2"
2: "el3"
addedProp: 'arrProp'
length: 3
*/

//Using .include method in array for simulation
arrayElements = [2, 4, 6, 8]

//this works well
//console.log(arrayElements.includes(8))

//Let's kind of overwrite the method in this example
Array.prototype.includes = null;

//Let's build polyfill to rescue the unsupported simulated method

if (!Array.prototype.includes){

    // Polyfill function
    Array.prototype.includes = function(val){
        for (ele of this){
            if (ele == val){
                return true
            }
        }
        return false
    }
}

console.log(arrayElements.includes(5))
