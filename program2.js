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
        const next map[s[i+]]
        if(m[s[i]]<m[s[i]]){
            ans-=m[s[i]];
        }else{
            ans +=m[s[i]];
        }
    }
};
return ans;



module.exports={romanToInt}