const sumAll = function(start, end) {
    let sum = 0;
    if(typeof(start) != "number" || typeof (end) != "number" ||
        start<0 || end<0){
        return 'ERROR';
    }
    if(start<=end){
        for(i=start; i<=end; i++)   sum += i;
    }else{
        for(i=start; i>=end; i--)   sum += i;
    }
    return sum;
}

module.exports = sumAll