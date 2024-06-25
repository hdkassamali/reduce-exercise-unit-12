/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.
*/

function extractValue(arr, key) {
    return arr.reduce(function(result, obj) {
        result.push(obj[key]);
        return result;
    }, []);
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
*/

function vowelCount(str) {
    const strArray = str.toLowerCase().split('');
    const vowels = 'aeiou';

    return strArray.reduce(function(acc, next) {
        if (vowels.indexOf(next) !== -1) {
            if (acc[next]) {
                acc[next] += 1;
            }
            else {
                acc[next] = 1;
            }
        }
        return acc
    }, {})

}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.
*/

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc, next) {
        next[key] = value;
        acc.push(next);
        return acc;
    }, [])
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 
*/

function partition(arr, callback) {
    let firstArray = [];
    let secondArray = [];
    return arr.reduce(function(acc, next) {
        if (callback(next)) {
            acc[0].push(next) 
        }
        else {
            acc[1].push(next)
        }
        return acc;
    }, [firstArray, secondArray])
}
