function bankAccount() {
  let balance = 1000;
  return {
    withdraw(amt) {
      balance -= amt;
      console.log(balance);
    },
    deposite(amt) {
      balance += amt;
      console.log(balance);
    },
  };
}
const myAccount = bankAccount();

myAccount.deposite(2000); //3000
myAccount.withdraw(500); //2500
myAccount.withdraw(300); //2200
myAccount.deposite(100); //2300
