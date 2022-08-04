module.exports = function check(str, bracketsConfig) {
  let OPEN_BRACKETS = [];
        let PAIRS_BRACKETS = {};
        for ( let i = 0; i < bracketsConfig.length; i++){
            let key = bracketsConfig[i][1];
            let value = bracketsConfig[i][0];
            OPEN_BRACKETS.push(bracketsConfig[i][0]);
            PAIRS_BRACKETS[key] = value;
        }
        let stack = [];
        for (let i = 0; i < str.length; i++){
            let currentS = str[i];
            let topElement = stack[stack.length -1]
                if(stack.length !== 0 && topElement === PAIRS_BRACKETS[currentS]){
                stack.pop()
                } else {
                stack.push(currentS)
                }
        }
        return stack.length === 0;
    }
