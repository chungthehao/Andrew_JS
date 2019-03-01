let myAccount = {
    name: 'Henry Chung',
    expenses: 0,
    income: 0
}

// Both of these (myAccount & otherAccount) are referencing the same object in memory.
let otherAccount = myAccount
otherAccount.income = 1000

let addExpense = function (account, amount) {
    // account = {} // làm mất cái địa chỉ của nó, cho nó trỏ tới 1 địa chỉ mới, địa chỉ của empty object (làm mất cái binding)

    // Trong function này, account object sẽ trỏ tới cùng 1 object với myAccount truyền vào (copied by reference)
    account.expenses += amount
    // console.log(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount)