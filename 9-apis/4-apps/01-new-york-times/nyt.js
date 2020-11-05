const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //storing api into variable
const key = 'S0EDt6WNMQtXISItLl8AkIJIpP1YY6Al'; // this api key given by the nyt site
let url; // declaring the variable; will assign later

//SEARCH FORM
const searchTerm = document.querySelector('.search'); //storing the first occurance of the "search" class
const startDate = document.querySelector('.start-date'); //storing the first occurance of the "start-date" class
const endDate = document.querySelector('.end-date'); //storing the first occurance of the "end-date" class
const searchForm = document.querySelector('form'); //storing the first occurance of the "form" tag
const submitBtn = document.querySelector('.submit'); //storing the first occurance of the "submit" class

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next'); //storing the first occurance of the "next" class
const previousBtn = document.querySelector('.prev'); //storing the first occurance of the "prev" class
const nav = document.querySelector('nav'); //storing the first occurance of the "nav" class

//RESULTS SECTION
const section = document.querySelector('section'); //storing the first occurance of the section element

nav.style.display = 'none'; //changing the style of nav to display none

let pageNumber = 0; //starting the page number at 0
// console.log('PageNumber: ', pageNumber);
let displayNav = false; //declaring and assigning the variable to false

searchForm.addEventListener('submit', fetchResults); //this is assiging an event listener to listen for the submit button. when that happens the callback function "fetchResults" will fire
nextBtn.addEventListener('click', nextPage); //this is assiging an event listener to listen for the .nextBtn button. when that happens the callback functio  "nextPage" will fire
previousBtn.addEventListener('click', previousPage); //this is assiging an event listener to listen for the previousBtn button. when that happens the callback function "previousPage" will fire
let searchValues = []; //my code

function fetchResults(event) {
  //creating a function that will eventually fetch the results of the nyt search api
  //console.log(event);
  //assemble the full URL
  event.preventDefault(); //preventing default
  url =
    baseURL +
    '?api-key=' +
    key +
    '&page=' +
    pageNumber +
    '&q=' +
    searchTerm.value; //
  // console.log('URL:', url);
  // url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
  searchValues.push(searchTerm.value);
  console.log('searchValues', searchValues);
  console.log('search.value: ', search.value);
  //my code
  if (searchValues.length === 2) {
    console.log('serchValue[1]: ', searchValues[1]);
    if (searchValues[0] != searchValues[1]) {
      //resetSearch()
      //empty the array
      searchValues = [];
      console.log('New Search Values: ', searchValues);
    }
  }

  if (startDate.value !== '') {
    console.log(startDate.value);
    url += '&begin_date=' + startDate.value;
  }
  if (endDate.value !== '') {
    url += '&end_date=' + endDate.value;
  }

  fetch(url)
    .then(function (result) {
      //console.log(result);
      return result.json();
    })
    .then(function (myJson) {
      //console.log(myJson);
      displayResults(myJson);
    });

  function displayResults(json) {
    //console.log('DisplayResults: ', json);
    //console.log(json.response.docs);
    while (section.firstChild) {
      section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;

    if (articles.length === 10) {
      nav.style.display = 'block';
      console.log('nav.style.display ===10: ', nav.style.display);
    } else {
      nav.style.display = 'none';
      console.log('nav.style.display: ', nav.style.display);
    }
    //console.log(articles);
    if (articles.length === 0) {
      console.log('no results');
    } else {
      //console.log(articles);
      for (let i = 0; i < articles.length; i++) {
        //console.log(articles[i]);
        let article = document.createElement('article');
        let heading = document.createElement('h2');
        let img = document.createElement('img');
        let link = document.createElement('a');
        let para = document.createElement('p');
        let clearfix = document.createElement('div');

        let current = articles[i];
        console.log('Current: ', current);

        link.href = current.web_url;
        link.textContent = current.headline.main;

        para.textContent = 'Keywords: ';

        for (let j = 0; j < current.keywords.length; j++) {
          let span = document.createElement('span');
          span.textContent += current.keywords[j].value + ' ';
          para.appendChild(span);
        }

        if (current.multimedia.length > 0) {
          img.src = img.src =
            'http://www.nytimes.com/' + current.multimedia[0].url;
          img.alt = current.headline.main;
        }
        clearfix.setAttribute('class', 'clearfix');

        article.appendChild(heading);
        heading.appendChild(link);
        article.appendChild(img);
        article.appendChild(para);
        article.appendChild(clearfix);
        section.appendChild(article);
      }
    }
  }
}

//previousBtn.style.display = 'none';
function resetSearch() {
  nav.style.display = 'none';
}

function nextPage() {
  pageNumber++;
  // if (pageNumber < 2) {
  //   previousBtn.style.display = 'none';
  // }
  fetchResults(event);
  console.log('Page number: ', pageNumber);
  console.log('Next button clicked');
}

function previousPage() {
  console.log('Previous button clicked');
  if (pageNumber > 0) {
    pageNumber--;
  } else {
    return;
  }
  fetchResults(event);
  console.log('Page number: ', pageNumber);
}
