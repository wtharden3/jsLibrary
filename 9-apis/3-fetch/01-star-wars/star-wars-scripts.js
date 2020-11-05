let starWarsPeepsList = document.querySelector('ul');
console.log(starWarsPeepsList);

let apiUrl = 'https://swapi.dev/api/people';

fetch(apiUrl)
  .then(response => {
    return response.json();
  })
  .then(myJson => {
    console.log('myJson: ', myJson);
    let people = myJson.results;
    console.log('People: ', people);
    for (peep of people) {
      //                      key.value
      console.log('for of: ', peep.name);
      let listItem = document.createElement('li');
      // listItem.innerHTML = `<p>${peep.name}</p>`;
      starWarsPeepsList.appendChild(listItem).innerHTML = `<p>${peep.name}</p>`;
    }
    // for (peep in people) {
    //   //                       arr  index   key
    //   console.log('for in: ', people[peep].name);
    // }
  });
