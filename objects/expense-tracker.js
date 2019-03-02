let myAccount = {
    name: 'Henry Chung',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    // Trong function này, account object sẽ trỏ tới cùng 1 object với myAccount truyền vào (copied by reference)
    account.expenses += amount
}

let addIncome = function (account, income) {
    account.income += income
}


let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 880)
addExpense(myAccount, 25)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))