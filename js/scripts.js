// welcome message
var user = 'Jenna'
var salutation = 'Hello,  ';
var greeting = salutation + user + ' Come Check out R.A.W. Training 1st Week On Us.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
var price = 200,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price per month');
studentPriceEl = document.getElementById('student-price per month');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);

