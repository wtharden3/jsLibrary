let listTitle = document.getElementById('listTitle');
console.log(listTitle);

//gets the first li insted the ul parent
let listItem = document.querySelector('ul li');
console.log(listItem);

listTitle.style.textAlign = 'center';

listItem.style.color = 'red';

let grocery = document.getElementsByClassName('groceryItem');
console.log(grocery); //returns HTML collection
console.log(grocery[0])

let liTag = document.getElementsByTagName('li');
console.log(liTag); // returns an HTML collection

// let changeColor = (item, index) => {
//   item[index].style.color = 'red';
// }

// for (let i =0; 0 < i.length; i++){
//   changeColor(grocery, i);
// }

let selectAll = document.querySelectorAll('ul li');
console.log(selectAll); // returns a node list

console.log(document.body.childNodes);

let listDiv = document.getElementById('list');
console.log(listDiv.firstChild);

for(tag of liTag){
  tag.style.fontFamily = "cursive";
}

document.getElementsByClassName('listItem')[4].innerText = 'Buy a new cauldron, Whitney';

document.getElementsByClassName('groceryItem')[0].innerHTML = 'Moondew Drops';

document.getElementById('clickMe').addEventListener('click', event => {
  console.log(event);
  console.log(event.target);
  event.target.style.backgroundColor = 'lightBlue';
})

document.getElementById('listInput').addEventListener('keyup', event => {
  console.log(event.target.value);
})

let newGrocery = document.createElement('li');
let groceryList = document.getElementById('groceryList');

groceryList.appendChild(newGrocery);
newGrocery.innerText = "Ginger Root";

let groceryTitle = document.createElement('h3');
let groceryDiv = document.getElementById('groceryDiv');
console.log(groceryDiv);

groceryDiv.appendChild(groceryTitle);
groceryTitle.innerText = 'Grocery List';

groceryDiv.insertBefore(groceryTitle, groceryDiv.childNodes[0])

let myArray = [1,2,5,6,'Whitney'];

myArray.forEach((element, index, array) => {
  console.log('Element: ', element);
  console.log('Index: ', index);
  console.log('Array: ', array);
})