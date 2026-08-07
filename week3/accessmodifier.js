"use strict";
class Wallet {
    name;
    balance;
    pin;
    points = 0;
    constructor(name, balance, pin) {
        this.name = name;
        this.balance = balance;
        this.pin = pin;
    }
    withdraw(amount, enteredPin) {
        if (this.checkPin(enteredPin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`₹${amount} withdrawn. Balance: ₹${this.balance}`);
            }
            else {
                console.log("Insufficient balance.");
            }
        }
        else {
            console.log("Wrong PIN.");
        }
    }
    checkPin(pin) {
        return this.pin === pin;
    }
}
class PremiumWallet extends Wallet {
    addPoints() {
        this.points += 100;
        console.log(`Points: ${this.points}`);
    }
}
const wallet = new Wallet("Arjun", 5000, 1234);
console.log(`Welcome, ${wallet.name}`);
wallet.withdraw(1000, 1234);
const premium = new PremiumWallet("Rahul", 8000, 4321);
premium.addPoints();
