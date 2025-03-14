/** @type {HTMLCanvasElement} */

const PI = document.querySelector("#PI")

let pi = Math.PI
let leftNumerator = 3
let leftDenominator = 1
let rightNumerator = 4
let rightDenominator = 1
let numerator
let denominator
let evaluate = true

PI.innerHTML = `PI: ${leftNumerator}/${leftDenominator} < ${pi} < ${rightNumerator}/${rightDenominator} <br>` + PI.innerHTML
PI.innerHTML = `PI: ${leftNumerator/leftDenominator} < ${pi} < ${rightNumerator/rightDenominator} <br>` + PI.innerHTML

let Aproximate = ()=>
{
    if(evaluate)
    {
        numerator = leftNumerator + rightNumerator
        denominator = leftDenominator + rightDenominator
        if(numerator/denominator > pi)
        {
            rightNumerator = numerator
            rightDenominator = denominator
        }else if(numerator/denominator < pi)
        {
            leftNumerator = numerator
            leftDenominator = denominator
        }
        else
        {
            pi = `${numerator}/${denominator}`
            evaluate = false
        }
        PI.innerHTML = `PI: ${leftNumerator}/${leftDenominator} < ${pi} < ${rightNumerator}/${rightDenominator} <br>` + PI.innerHTML
        PI.innerHTML = `PI: ${leftNumerator/leftDenominator} < ${pi} < ${rightNumerator/rightDenominator} <br>` + PI.innerHTML
    }
}

document.addEventListener("keypress", e=>
{
    if(e.key == "Enter")
    {
        Aproximate()
    }
})

document.addEventListener("click", e=>
{
    Aproximate()
})