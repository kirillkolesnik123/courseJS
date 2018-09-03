function getFriendlyNumbers(start, end) {
    
    if (start > end || !isInt(start) || !isInt(end) || end < 0 || start < 0) {
        return false;
    } else {
        let a = start;
        let b = end;
        let arr1 = [];
        let k
        for(let j=a;j<=b;j++){
            k=sumdel(j)
            if(k>=a&&k<=b&&k>j){
                if(sumdel(k)==j){
                    arr1.push([j,k])

                }
            }
        }
        return arr1
    }
}
function sumdel(number)
{
    let s=1;
    let i=1;
    for(i=2;i<=number/2;i++){
       if( number %i==0) 
        s+=i
}
return s
}

getFriendlyNumbers();
console.log(getFriendlyNumbers(1,300));

function isInt(n) {
 return Number(n) === n && n % 1 === 0;
}

module.exports = {
    firstName: 'Kirill',
    secondName: 'Kolesnik',
    task: getFriendlyNumbers
}
