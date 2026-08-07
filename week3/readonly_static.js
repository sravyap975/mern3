"use strict";
class Bank {
    static bankName = "HDFC Bank";
    static totalAccounts = 0;
    accNo;
    name;
    constructor(name, accNo) {
        this.name = name;
        this.accNo = accNo;
        Bank.totalAccounts++;
    }
    static showPolicy() {
        console.log(`Welcome to ${this.bankName}. All FDs are subject to market risks.`);
    }
    showDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Account Number: ${this.accNo}`);
    }
}
console.log(Bank.bankName);
Bank.showPolicy();
const user1 = new Bank("Suresh Raina", "HDFC000123");
const user2 = new Bank("Deepika P.", "HDFC000456");
console.log(user1.accNo);
console.log(`Total Accounts: ${Bank.totalAccounts}`);
