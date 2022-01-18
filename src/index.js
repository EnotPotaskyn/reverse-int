module.exports = function reverse (n) {
    if(n<0) {n = -n}
    let str = String(n);
    console.log(str)
    let num = '';
    for (let i=str.length-1;i>=0; i--){
       num = num + str[i]  
      }
    
      return Number(num)
}
