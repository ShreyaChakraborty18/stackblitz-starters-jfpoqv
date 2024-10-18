const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/username', (req, res) => {
  let firstname = req.query.firstname;
  let lastname = req.query.lastname;
  res.send('Hello, ' + firstname + ' ' + lastname);
});

app.get('/total-distance', (req, res) => {
  let distance1 = parseInt(req.query.distance1);
  let distance2 = parseInt(req.query.distance2);
  let totalDistance = distance1 + distance2;
  res.send(totalDistance.toString());
});

app.get('/check-number', (req, res) => {
  let number = parseFloat(req.query.number);
  if (number >= 0) {
    res.send('Number is positive');
  } else {
    res.send('Number is negative');
  }
});

//const getMessage = () => 'Welcome to our service';
//OR
function getMessage() {
  return 'Welcome to our service';
}
app.get('/welcome', (req, res) => {
  res.send(getMessage());
});

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(greet(username));
});
function greet(username) {
  return 'Hello, ' + username;
}


function checkStrength(password) {
  console.log(password.length);
  let result;
  if (password.length > 15) result = 'strong';
  else {
    result = 'weak';
  }
  return 'Password is ' + result;
}
app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkStrength(password));
});


function calculateSum(numi, num2) {
  let sum = num1 + num2;
  return sum.toString();
}
app.get('/sum', (req, res) {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(calculateSum(num1, num2));
  // or res.send(calculateSum(num1, num2).toString());
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
