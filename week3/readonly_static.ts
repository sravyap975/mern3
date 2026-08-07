class Bank {
    public static bankName: string = "HDFC Bank";
    public static totalAccounts: number = 0;

    public readonly accNo: string;
    public name: string;

    constructor(name: string, accNo: string) {
        this.name = name;
        this.accNo = accNo;
        Bank.totalAccounts++;
    }

    public static showPolicy(): void {
        console.log(`Welcome to ${this.bankName}. All FDs are subject to market risks.`);
    }

    public showDetails(): void {
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