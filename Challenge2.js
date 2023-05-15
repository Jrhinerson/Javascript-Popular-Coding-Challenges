// Given the string [()]{}{[()()]()}, write a function that takes a string parameter containing brackets, determine if all brackets have a matching counterpart. If all brackets in the string form balanced pairs, return true. If not, return false.

// Examples:
//     {[()]} = balanced
//     [(]) = not balanced
//     {(})[] = not balanced
//     {()[]} = balanced


//balanced
const testbrackets1 = "[()]{}{[()()]()}";
//balanced
const testbrackets2 = "([{}])";
//not balanced
const testbrackets3 = "{(})[]";
//not balanced
const testbrackets4 = "[(])";


//change test brackets here
let testbrackets = testbrackets3

function checkBalancedPairs(brackets) {

    let stack = []
    for (let i = 0; i < brackets.length; i++) {
        let element = brackets[i]
        if (element == "(" || element == "{" || element == "[") {
            stack.push(element)
            continue
        } else if (element == ")" || element == "}" || element == "]") {

            if (stack.length == 0) {
                return false;
            }

            check = stack.pop()
            switch (element) {
                case ")":
                    if (check != "(") {
                        return false;
                    }
                    break;
                case "}":
                    if (check != "{") {
                        return false;
                    }
                    break;
                case "]":
                    if (check != "[") {
                        return false;
                    }
                    break;
            }
        }
        
    }
    return stack.length == 0;
}
console.log(checkBalancedPairs(testbrackets))