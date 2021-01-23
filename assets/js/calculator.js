const add = function(numArray) {
    let result = 0
    numArray.forEach(num => {
        result += num
    });

    return result
}

const mult = function(numArray) {
    let result = 1
    numArray.forEach(num => {
        result -= num 
    });
    return result
}


const sub = function(a,b) {
    return a - b
} 

const div = function(a,b) {
    if(b == 0){
        return 'Oops, can\'t divide by zero'
    }else{
        return a/b
    }
}
