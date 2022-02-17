// get inputfield number and convert it to float number
function getInputToConvertFloat(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    if(isNaN(inputValue)){
        console.log('please give a number');
    }
    else if(inputValue < 0){
        return "You can't input a negative number";
    }
    return inputValue;
}
// get previous string balance id and convert it to a float number balance
function InnerTextToFloat(textId) {
    const textid = document.getElementById(textId)
    const text = parseFloat(textid.innerText);
    return text;
}

// calculate button
document.getElementById('calculate-btn').addEventListener('click',function () {
    const income = getInputToConvertFloat('total-income');
    // expenses
    const foodExpenses = getInputToConvertFloat('expense-in-food');
    const rentExpenses = getInputToConvertFloat('expense-in-rent');
    const clothExpenses = getInputToConvertFloat('expense-in-cloth');
    
    // total expenses
    const totalExpense = foodExpenses + rentExpenses + clothExpenses;

    // total balance
    const totalBalance = income - totalExpense;

    if(income < totalExpense){
        document.getElementById('total-expense').innerText = totalExpense;
        document.getElementById('total-balance').innerText = totalBalance;
    }
    else{
        console.log("you can't expense more then your income")
    }
})