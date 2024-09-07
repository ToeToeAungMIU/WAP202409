interface BankAccount {
    money : number;
    deposit : (value : number) => void;
}

interface Person {
 name : string;
 bankAccount : BankAccount;
 hobbies : string[];
}

let myBankAccount: BankAccount = {
money: 2000,
deposit(value : number) : void {
this.money += value;
}
};

let myself: Person = {
    name: "John",
    bankAccount: myBankAccount,
    hobbies: ["Violin", "Cooking"]
    };

myself.bankAccount.deposit(3000);
console.log(myself);    
