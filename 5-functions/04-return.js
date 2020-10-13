// return -- a keyword that brings the data outside of our function

let name = fName => {
  return fName;
}

let myName = name('Finn');
console.log(myName);

// tip challenge

let tipWaitStaff = (subTotal, percetageToTip) => {
  let tip = (subTotal * percetageToTip).toFixed(2); //toFixed(x) method to round out varible to x digits behind decimal
  return tip;
}

let totalTip = subTotal => (subTotal * 0.2).toFixed(2);
let myNewTip = totalTip(45);

let myTip = tipWaitStaff(19.99, .20);
console.log(myTip);

console.log(`$${myTip}`);

// one more example of Return

function capitalizeName(name) {
  let capName = '';
  for (letter in name) {
    console.log(capName);
    if (letter == 0) {
      capName += name[letter].toUpperCase();
    } else {
      capName += name[letter].toLowerCase();
    }
  }
  return capName
}

let myCapName = capitalizeName('wHITney');
console.log(myCapName);

let practice