// function payWithCash(amount) {
//   console.log(`Paid ${amount} with cash`);
// }

// function payWithUPI(amount) {
//   console.log(`Paid ${amount} with UPI`);
// }

// function payWithCard(amount) {
//   console.log(`Paid ${amount} with card`);
// }

function createPaymentMethod(method) {
  return function (amount) {
    console.log(`Paid ${amount} with ${method}`);
  };
}

const payWithCash = createPaymentMethod("cash");
const payWithUPI = createPaymentMethod("UPI");
const payWithCard = createPaymentMethod("card");

function bill(amount, paymentMethod) {
  paymentMethod(amount);
}

bill(3000, payWithCard);
bill(2000, payWithUPI);
bill(1000, payWithCash);
