var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var balance = 1000, deposits = [], withdraws = [];
var option = prompt('(d)eposit, (w)ithdraw, (q)uit: ');

while(option != 'q'){
  var amount = prompt('Amount: ');
  amount = parseFloat(amount);

  if(option === 'd'){
    deposits.push(amount);
  }else{
    withdraws.push(amount);
  }

  option = prompt('(d)eposit, (w)ithdraw, (q)uit: ');
}

var deps = 0, withs = 0;

for(var i = 0; i < deposits.length; i++){
  deps += deposits[i];
}

for(var j = 0; j < withdraws.length; j++){
  withs += withdraws[j];
}

balance += deps - withs;

if(balance < 0){
  balance -= 50;
}

console.log('Deposits:  ', chalk.green(deposits));
console.log('Withdraws: ', chalk.red(withdraws));
console.log('Balance:    $' + balance.toFixed(2));

