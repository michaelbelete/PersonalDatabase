(function() {
    while(true){
        // let choice = pARS
    }
}());

const bankAccounts = {
    accounts: [],
    generateAccount: function (min, max) {
        return Math.floor(
            Math.random() * (max - min + 1) + min
        )
    },
    allAccounts: function() {
        console.table(this.accounts)
    },
    addAccount: function (accountData) {
        accountData.accountNumber = this.generateAccount(1000, 100000)
        this.accounts.push(accountData)
    },
    deposit: function (money) {
        if (money <= 0) {
            return "please enter a valid amount"
        } else {
            this.accounts.balance += money
        }
    },
    withdraw: function (money) {
        if (money <= 0) {
            return "please enter a valid amount"
        } else {
            if (this.accounts.balance >= 50 || this.accounts.balance < money) {
                return "can't withdraw money"
            } else {
                this.accounts.balance -= money
            }
        }
    },
    balance: function (accountNumber) {
        const selectedAccountNumber = this.accounts.filter(account => account.accountNumber === accountNumber)
        if (selectedAccountNumber.length === 0) {
            return "the account doesn't exist. but you can go and create account"
        } else {
            return selectedAccountNumber[0].balance;
        }
    },
    transfer: function(sender, receiver, amount) {
        console.log("no way jose")
    }
}