"use strict";
class FD {
    name;
    amount;
    rate;
    years;
    constructor(name, amount, rate, years) {
        this.name = name;
        this.amount = amount;
        this.rate = rate ?? 6.5;
        this.years = years ?? 1;
    }
    getAmount() {
        const interest = (this.amount * this.rate * this.years) / 100;
        return this.amount + interest;
    }
    show() {
        console.log("----- FD Details -----");
        console.log(`Name: ${this.name}`);
        console.log(`Amount: ₹${this.amount}`);
        console.log(`Rate: ${this.rate}%`);
        console.log(`Years: ${this.years}`);
        console.log(`Maturity Amount: ₹${this.getAmount()}`);
        console.log("----------------------");
    }
}
const fd1 = new FD("Rajesh Kumar", 50000);
const fd2 = new FD("Anjali Sharma", 100000, 7.5, 3);
fd1.show();
fd2.show();
fd2.amount = 110000;
console.log(`Updated Maturity Amount: ₹${fd2.getAmount()}`);
