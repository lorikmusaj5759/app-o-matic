// filename: complexCode.js (Demonstrating Complex Code)

/* 
This code is a simulation of a banking system with multiple functionalities such as user registration, account management, transaction handling, and data storage.
It includes advanced programming concepts like class inheritance, async/await, error handling, and modular code structure.
*/

class Bank {
  constructor() {
    this.customers = [];
    this.accounts = [];
  }

  async registerCustomer(customerData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (customerData.name && customerData.email) {
          const newCustomer = new Customer(customerData.name, customerData.email);
          this.customers.push(newCustomer);
          resolve(newCustomer);
        } else {
          reject("Customer data is incomplete.");
        }
      }, 1000);
    });
  }

  addAccount(customer, accountData) {
    const newAccount = new Account(customer, accountData.type);
    this.accounts.push(newAccount);
    customer.addAccount(newAccount);
    return newAccount;
  }

  async makeTransaction(account, amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const transaction = account.makeTransaction(amount);
          resolve(transaction);
        } catch (error) {
          reject(error.message);
        }
      }, 500);
    });
  }
}

class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }
}

class Account {
  constructor(customer, type) {
    this.customer = customer;
    this.type = type;
    this.balance = 0;
  }

  makeTransaction(amount) {
    if (isNaN(amount) || amount === 0) {
      throw new Error("Invalid transaction amount.");
    } else {
      this.balance += amount;
      return this.balance;
    }
  }
}

// Usage example
const bank = new Bank();
(async () => {
  try {
    const newCustomer = await bank.registerCustomer({
      name: "John Doe",
      email: "john.doe@example.com"
    });

    const savingsAccount = bank.addAccount(newCustomer, { type: "savings" });
    const currentAccount = bank.addAccount(newCustomer, { type: "current" });

    console.log("Accounts:", newCustomer.accounts);

    const transactionResult1 = await bank.makeTransaction(savingsAccount, 200);
    console.log("Transaction Result 1:", transactionResult1);

    const transactionResult2 = await bank.makeTransaction(currentAccount, 1000);
    console.log("Transaction Result 2:", transactionResult2);
  } catch (error) {
    console.error(error);
  }
})();
