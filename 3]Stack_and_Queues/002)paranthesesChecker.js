function paranthesesChecker(expression) {
    let stack = [];

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] == '(' || expression[i] == '{' || expression[i] == '[')
            stack.push(expression[i])
        else {
            if (stack.length == 0)
                console.log(false)
            else if (stack.top != '(' && stack[i] == ')')
                console.log(false)
            else if (stack.top != '{' && stack[i] == '}')
                console.log(false)
            else if (stack.top != '[' && stack[i] == ']')
                console.log(false)
            else
                stack.pop();
        }
    }
    if (stack.length == 0)
        console.log(true)
    else
        console.log(false)
}

let expression = "({)}[]"
paranthesesChecker(expression)