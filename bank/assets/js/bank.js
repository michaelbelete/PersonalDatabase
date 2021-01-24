const bankAccounts = {
    accounts: [],
}

function generateAccount(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}
function allAccounts() {
    const accounts = bankAccounts.accounts
    return accounts.length === 0 ? "No account has been registered" : accounts
}
function addAccount(accountData) {
    if (accountData.balance < 25) {
        return "initial deposit must be at least 25 birr"
    } else {
        accountData.accountNumber = generateAccount(1000, 100000)
        bankAccounts.accounts.push(accountData)
        return "account has been created"
    }
}
function deposit(accountNumber, money) {
    const selectedAccountNumber = bankAccounts.accounts.filter(account => account.accountNumber === accountNumber)
    if (selectedAccountNumber.length === 0) {
        return "the account doesn't exist. but you can go and create account"
    } else {
        if (money <= 0 || money <= 25) {
            return "please enter at least minimum of 25 birr"
        } else {
            selectedAccountNumber.accounts.balance += money
        }
    }
}

function withdraw(accountNumber, money) {
    const selectedAccountNumber = bankAccounts.accounts.filter(account => account.accountNumber === accountNumber)
    if (selectedAccountNumber.length === 0) {
        return "the account doesn't exist. but you can go and create account"
    } else {
        if (money <= 0) {
            return "please enter a valid amount"
        } else {
            if (bankAccounts.accounts.balance >= 50 || bankAccounts.accounts.balance < money) {
                return "can't withdraw money"
            } else {
                bankAccounts.accounts.balance -= money
            }
        }
    }
}

function balance(accountNumber) {
    const selectedAccountNumber = bankAccounts.accounts.filter(account => account.accountNumber === accountNumber)
    if (selectedAccountNumber.length === 0) {
        return "the account doesn't exist. but you can go and create account"
    } else {
        return selectedAccountNumber[0].balance;
    }
}
function transfer(sender, receiver, amount) {
    console.log("no way jose")
}

(function () {
    cont = true
    while (cont) {
        let choice = parseInt(prompt("Welcome to BMsys \n Choose what you want to do: \n 1) add Account \n 2) See all accounts \n 3) deposit money \n 4) withdraw money \n 5) See balance \n 6) Transfer Money \n press any other key to quit"))

        if (choice === 1) {
            let accountData = {
                fullName: null,
                balance: null,
            }
            accountData.fullName = prompt("Enter Your full Name: ")
            accountData.balance = parseFloat(prompt("Enter initial Deposit: "))
            const result = addAccount(accountData)
            console.table(bankAccounts.accounts)
            console.log(result)
            alert(result)
        } else if (choice === 2) {
            console.log("**************************************")
            console.log("********** All Accounts ****************")
            console.table(allAccounts())
            console.log("**************************************")

        } else {
            console.log("Exiting")
            cont = false
        }
    }

}());