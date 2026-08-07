class Wallet {
    public name: string;
    private balance: number;
    private pin: number;
    protected points: number = 0;

    constructor(name: string, balance: number, pin: number) {
        this.name = name;
        this.balance = balance;
        this.pin = pin;
    }

    public withdraw(amount: number, enteredPin: number): void {
        if (this.checkPin(enteredPin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`₹${amount} withdrawn. Balance: ₹${this.balance}`);
            } else {
                console.log("Insufficient balance.");
            }
        } else {
            console.log("Wrong PIN.");
        }
    }

    private checkPin(pin: number): boolean {
        return this.pin === pin;
    }
}

class PremiumWallet extends Wallet {
    public addPoints(): void {
        this.points += 100;
        console.log(`Points: ${this.points}`);
    }
}

const wallet = new Wallet("Arjun", 5000, 1234);

console.log(`Welcome, ${wallet.name}`);

wallet.withdraw(1000, 1234);

const premium = new PremiumWallet("Rahul", 8000, 4321);
premium.addPoints();