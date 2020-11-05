let x = 10;
console.log(x);

document.getElementById('testParagraph').style.color = '#0080ff';
//
/**
 * document -  is the overall DOM, the overal HTML document/page 
 * getElementById - is a method on our DOM that finds one particular element based on the ID
 * After we've found that element, style is a property of that HTML element which controls that element's style
 * color is the property (of style) that we want to access
 * = "blue" or "#0080ff": the = assignment operator; we are setting the style equal to blue or #0080ff.
 * We don't have to set the value. We could just write:
 * document.getElementById('testParagraph').style.color
 * which would return the value. We can use console.log() to return the  value
 */

console.log('Color: ', document.getElementById('testParagraph').style.color);
console.log('Style: ', document.getElementById('testParagraph').style);
console.log('First style declaration for this property: ', document.getElementById('testParagraph').style[0]);
console.log('Font-size: ', document.getElementById('testParagraph').style.fontSize);

// does not interact with the CSS stylesheet. even though the font-size is set by the css stylesheet
//it is not recognized by JS; neither is the browser default styles

//The 2 most common ways to select an element are:
/**
 * document.getElementById("idHere");
 * document.querySelectorAll('p.classNameHere');
 * querySelectorAll() returns a Node List
 */

console.log('querySelectorAll for p.sampleClass: ', document.querySelectorAll('p.sampleClass'));
document.querySelectorAll('p.sampleClass')[0].innerText = "my text was changed!";

/**
 * innerText: will only rference the text displayed on the screen.
 * innerHTML: will reference all HTML elements inside the tag.
 * 
 */

document.querySelectorAll('p.sampleClass')[0].innerHTML = "<span>I am a whole new element!</span>"

document.getElementById('clickThisButton').addEventListener('click', (event) => {
  console.log('I was clicked');
  console.log('Event: ', event);
  console.log('Event path: ', event.path);
  console.log('Event.target: ', event.target);
  console.log('Event.target.style: ', event.target.style);
  console.log('event.target.style.backgroundColor: ', event.target.style.backgroundColor);
  event.target.style.backgroundColor = 'red';
  console.log('event.target.style.backgroundColor after click: ', event.target.style.backgroundColor);
})

let entry = [];
document.getElementById('nameInput').addEventListener('keyup', event => {
  // console.log(event);
  // console.log('Event.key: ', event.key);
  // console.log('Event.target.value: ', event.target.value)
  // entry.push(event.target.value);
  let feedBack =document.getElementsByTagName('p')[1];
  // let feedBack =document.getElementsByTagName('p')[1];
  // let noNameEntered = document.getElementsByTagName('p')[3];
  console.log(event.target.value);
  if (event.target.value === ""){
    feedBack.innerText = "No name has been entered!"
    // noNameEntered.innerText = " ";
  } else {
    feedBack.innerText = `Everyone please welcome ${event.target.value} to the stage!`
  }
})

// document.getElementById('nameInput').addEventListener('keyup', event =>{
//   console.log('Event.target.value: ', event.target.value);
//   console.log(document.getElementsByTagName('p'));
//   console.log('Welcome paragraph', document.getElementsByTagName('p')[2])
//   document.getElementsByTagName('p')[2].innerText = `Welcome, ${event.target.value}!`;
  
//   console.log('No name entered paragraph', document.getElementsByTagName('p')[3])
// })