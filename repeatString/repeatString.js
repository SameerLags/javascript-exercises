const repeatString = function(stringToRepeat, timesToRepeat) {
    let repeatedString = ""
    if(timesToRepeat<0){
        return 'ERROR'
    }
    for(i=0; i<timesToRepeat; i++){
        repeatedString += stringToRepeat;
    }
    return(repeatedString)
}

module.exports = repeatString