/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    }
    let total=0;
    for(let i=0;i<s.length;i++){
        const curr=map[s[i]];
        const next=map[s[i+1]];
        if(curr<next){
           total-=curr;
        }else{
            total+=curr;
        }
    }return total;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));



module.exports={romanToInt}