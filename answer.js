//Go recursive
//Each layer, if not at maximum number of parentheses:
//Break into too recursive calls -> One that adds a left parenthesis, one that adds a right parenthesis
//One it hits max value, return it up and combine returns into 1 array.

//This uses a lot of memory. Do we need to use .slice? Will refactor.

var generateParenthesis = function(n) {

    //Using a recursive solution.
    let evaluateLayer = (left,right,max, stack) => {
        let output = [];

        //Split Logic, one adds left parenthesis, one adds right parenthesis.
        //When it hits the base case, bubble up found outputs to the top level.
        if(left < n){
            //Make sure we aren't mutating inputs
            let leftStack = stack.slice(0);
            leftStack.push("(");

            //Bubble up output
            output = output.concat(evaluateLayer(left + 1, right, max, leftStack));
        }
        
        //When its legal to add a right side parenthesis, add it and re run.
        if(right < left){
            //Dont mutate inputs
            let rightStack = stack.slice(0);
            rightStack.push(")");

            //Bubble up output
            output = output.concat(evaluateLayer(left, right + 1, max, rightStack));
        }

        //The Base Case
        if( left == n && right == left){
            output = output.concat([stack.join("")]);
        }
        return output;
    }

    let stack = [];
    //According to constraints, n will always be at least 1, start with let parenthesis.
    stack.push("(");


    let output = evaluateLayer(1,0,n,stack);
    return output;
};
