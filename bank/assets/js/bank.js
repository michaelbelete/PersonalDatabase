const bankAccounts = {
    accounts: [
        {
            fullName: "Michael Belete",
            balance: 100,
            accountNumber: 12
        },
        {
            fullName: "Teddy Belete",
            balance: 300,
            accountNumber: 19
        }
    ],
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
            let accountIndex = bankAccounts.accounts.findIndex(account => account.accountNumber == accountNumber)
            bankAccounts.accounts[accountIndex].balance += money
            return `${money} birr amount of money had been deposited to account number ${accountNumber}`
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
            let accountIndex = bankAccounts.accounts.findIndex(account => account.accountNumber == accountNumber)
            let currentBalance = bankAccounts.accounts[accountIndex].balance
            let result = currentBalance - money
            if (result > 25) {
                bankAccounts.accounts[accountIndex].balance = result
                return `${money} birr amount of money had been withdrawn from account number ${accountNumber} \n Current Balance: ${result}`
            } else {
                return "you have insufficient amount of money to withdraw. please try again with another amount"
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
    let selectedSenderAccountNumber = bankAccounts.accounts.filter(account => account.accountNumber == sender)
    if (selectedSenderAccountNumber.length === 0) {
        return "The sender account you selected doesn't exist"
    } else {
        let selectedReceiverAccountNumber = bankAccounts.accounts.filter(account => account.accountNumber == receiver)
        if (selectedReceiverAccountNumber.length === 0) {
            return "The receiver account you selected doesn't exist"
        } else {
            if (amount <= 0 || amount <= 25) {
                return "please enter at least minimum of 25 birr to send"
            } else {
                let accountIndex = bankAccounts.accounts.findIndex(account => account.accountNumber == sender)
                let currentBalance = bankAccounts.accounts[accountIndex].balance
                let result = currentBalance - amount
                console
                if (result > 25) {
                    console.log(withdraw(sender, amount))
                    console.log(deposit(receiver, amount))
                    return `${amount} amount of money has been transferred from ${selectedSenderAccountNumber[0].fullName} Account Number ${sender} to  ${selectedReceiverAccountNumber[0].fullName} Account Number ${receiver}`
                } else {
                    return "you have insufficient amount of money to transfer. please try again with another amount"
                }
            }
        }
    }
}

(function () {
    cont = true
    while (cont) {
        let choice = parseInt(prompt("Welcome to BMSys \n Choose what you want to do: \n 1) Add Account \n 2) See all accounts \n 3) Deposit money \n 4) Withdraw money \n 5) See balance \n 6) Transfer Money \n press any other key to quit"))

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

        } else if (choice === 3) {
            let accountNumber = parseInt(prompt("Enter Account Number: "))
            let selectedAccountNumber = bankAccounts.accounts.filter(account => account.accountNumber == accountNumber)
            if (selectedAccountNumber.length === 0) {
                alert("the account you selected doesn't exist")
                console.log("the account you selected doesn't exist")
            } else {
                let amount = parseFloat(prompt(` Selected Account: ${selectedAccountNumber[0].fullName} \n Account Number: ${selectedAccountNumber[0].accountNumber} \n Enter the amount you want to deposit: `))
                let result = deposit(accountNumber, amount)
                console.log(result)
                alert(result)
            }
        } else if (choice === 4) {
            let accountNumber = parseInt(prompt("Enter Account Number: "))
            let selectedAccountNumber = bankAccounts.accounts.filter(account => account.accountNumber == accountNumber)
            if (selectedAccountNumber.length === 0) {
                alert("the account you selected doesn't exist")
                console.log("the account you selected doesn't exist")
            } else {
                let amount = parseFloat(prompt(` Selected Account: ${selectedAccountNumber[0].fullName} \n Account Number: ${selectedAccountNumber[0].accountNumber} \n Enter the amount you want to withdraw: `))
                let result = withdraw(accountNumber, amount)
                console.log(result)
                alert(result)
            }
        } else if (choice == 5) {
            let accountNumber = parseInt(prompt("Enter Account Number: "))
            console.log("*********************************************")
            console.log(`Your balance is ${balance(accountNumber)}`)
            alert(`Your balance is ${balance(accountNumber)}`)
        } else if (choice == 6) {
            let sender = parseInt(prompt("Enter Sender Account Number: "))
            let receiver = parseInt(prompt("Enter Receiver Account Number: "))
            let money = parseInt(prompt("Enter amount of money to transfer: "))

            let result = transfer(sender, receiver, money)
            console.log(result)
            alert(result)
        } else {
            console.log("Exiting")
            cont = false
        }
    }

}());