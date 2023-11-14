/* sophisticated_code.js */

// This code is a simulation of a banking system. It contains classes for customers, accounts, and transactions.

class Customer {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.accounts = [];
  }

  openAccount(initialDeposit) {
    const account = new Account(this, initialDeposit);
    this.accounts.push(account);
    return account;
  }

  closeAccount(account) {
    const index = this.accounts.indexOf(account);
    if (index !== -1) {
      this.accounts.splice(index, 1);
    }
  }
}

class Account {
  constructor(customer, initialDeposit) {
    this.customer = customer;
    this.balance = initialDeposit;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(new Transaction("deposit", amount));
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push(new Transaction("withdraw", amount));
    } else {
      console.log("Insufficient funds");
    }
  }

  transfer(amount, targetAccount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      targetAccount.balance += amount;
      this.transactions.push(new Transaction("transfer", amount, targetAccount));
    } else {
      console.log("Insufficient funds");
    }
  }
}

class Transaction {
  constructor(type, amount, targetAccount = null) {
    this.timestamp = new Date();
    this.type = type;
    this.amount = amount;
    this.targetAccount = targetAccount;
  }
}

// Demo usage

const customer1 = new Customer("John Doe", 30, "123 Main St");
const account1 = customer1.openAccount(1000);
const account2 = customer1.openAccount(500);

account1.deposit(500);
account1.withdraw(200);
account1.transfer(300, account2);

console.log(customer1);
console.log(account1);
console.log(account2);
