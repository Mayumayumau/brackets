module.exports = function check(str, bracketsConfig) {
  let stack = [];
    str = str.split('');
    let bi;
    for (let i = 0; i < str.length; i++){
      stack.push(str[i]);
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (bracketsConfig[j].includes(str[i])) {
          bi = j;
        }
      }
      if (stack[stack.length - 1] == bracketsConfig[bi][1] && stack[stack.length - 2] == bracketsConfig[bi][0]){
        stack.pop();
        stack.pop();
        }        
      }      
  if (stack.length == 0) return true;
  return false;
}
