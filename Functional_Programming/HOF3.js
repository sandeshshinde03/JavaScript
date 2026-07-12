function discount(percent) {
  return function (amount) {
    return amount - (amount * percent) / 100;
  };
}
const studentDiscount = discount(30);
const empDiscount = discount(35);
const regularDiscount = discount(10);

console.log(`Discounted price for student: ${studentDiscount(500)}`);
console.log(`Discounted price for employee: ${empDiscount(500)}`);
console.log(`Discounted price for regular customer: ${regularDiscount(500)}`);
