const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
// const spaceShips = document.querySelector('ul');
const spaceShips = document.querySelector('table');

//window and document are the two

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace() {
  event.preventDefault();//there is a default action when button is hit and this is telling it not to do it
  // a tag would be another example where you would want to use preventDefault()
  //fetch the data and .then() "then" do this
  fetch(baseURL)
  .then(result => {
    return result.json();
    // console.log(result.json());
  }
  )
  .then( json => {
    // console.log(json);
    displayRockets(json);
  }

  )
}

function displayRockets(json){
  // console.log(json);
  // let rockets = json.forEach( r => {
  //   let rocket = document.createElement('li');
  //   rocket.innerText = r.name;
  //   spaceShips.appendChild(rocket);
  //   });
  let rockets = json.forEach(r => {
    let rocket = document.createElement('tr');
    let rocketName = document.createElement('td');
    let rocketCost = document.createElement('td');

    rocketName.innerText = r.name;
    rocketCost.innerText = r.cost_per_launch;

    spaceShips.appendChild(rocket);
    rocket.appendChild(rocketName);
    rocket.appendChild(rocketCost);
  })
}

