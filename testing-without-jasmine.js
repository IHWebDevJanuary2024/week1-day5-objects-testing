

// Converts a value from cents to a floating point number with 2 decimals
function centsToDecimals(number) {
    if(!number){
        return 0
    }else if(typeof number === "string"){
        return undefined;
    }

    return number * 0.01;
}


// Test Specs: centsToDecimals
// Should convert value from cents to floating point number with 2 decimals
console.log(`Should convert value from cents to floating point number with 2 decimals:`);
console.log(centsToDecimals(23) === 0.23);
console.log(centsToDecimals(105) === 1.05);

// Should return `undefined` when the first argument passed is a string
console.log(`Should return "undefined" when the first argument passed is a string`);
console.log(centsToDecimals("dsadasdsa") === undefined )// THIS should return undefined
console.log(centsToDecimals("105") === undefined )
// Should return 0 when the first argument is not passed
console.log(`Should return 0 when the first argument is not passed`);
console.log(centsToDecimals() === 0 )

