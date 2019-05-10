const removeFromArray = function(arr, ...args) {
    let arrReturn = []
    for(i=0; i<arr.length; i++){
        if(!args.includes(arr[i])){
            arrReturn.push(arr[i]);
        }
    }
    return arrReturn;
}

module.exports = removeFromArray