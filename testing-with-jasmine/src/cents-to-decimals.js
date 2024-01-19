
function centsToDecimals(number) {
    if(!number) return 0
    else if(typeof number === "string"){
        return undefined
    }

    return number * 0.01;
}