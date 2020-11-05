const { ProvisionMethod } = require("keybase-bot/lib/types/keybase1");

function callBackFunction() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  let data = {
    name: "Tee",
    age: 22,
    occupation: "kickboxing",
  };
  return data;
}

function showGreeting(theCallBack) {
  let greeting = `Hello, ${theCallBack.name}! It is nice to meet you`;
  return greeting;
}

console.log(showGreeting(callBackFunction()));

let iAmGood = true;

//Promise
let iCanHaveGift = new Promise((resolve, reject) => {
  if (iAmGood) {
    let gift = {
      brand: "Apple",
      product: "AirPods",
    };
    resolve(gift);
  } else {
    let naughty = "You get a lump of coal!";
    reject(naughty);
  }
});

let checkTwice = () => {
  iCanHaveGift
    .then(fulfilled => {
      //nice list = gift
      console.log(
        `You will get ${fulfilled.brand} ${fulfilled.product}! Merry Christmas!`
      );
    })
    .catch(err => {
      //naught list = coal
      console.log(err);
    });
};
checkTwice();

let playDate = gift => {
  return new Promise((resolve, reject) => {
    let message = `Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new ${gift.brand} ${gift.product}?`;
    resolve(message);
  });
};

let checkTwice2 = () => {
  console.log("before Christmas");
  iCanHaveGift
    .then(playDate)
    .then(fulfilled => console.log("fulfilled:", fulfilled))
    .catch(err => console.log(err));
  console.log("after openning gifts");
};

checkTwice2();

let playDate2 = gift => {
  let message = `Salutations, fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new ${gift.brand} ${gift.product}?`;
  return Promise.resolve(message);
};
