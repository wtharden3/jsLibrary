/* *************************
 *** DISPLAY BY USER ***
 ************************** */
function displayMine() {
  //console.log('displayMine Function Called')
  const accessToken = localStorage.getItem('SessionToken');

  fetch('http://localhost:3000/journal/mine', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: accessToken,
    }),
  })
    .then(response => response.json())
    .catch(error => console.log('Error: ', error))
    .then(response => {
      console.log(response);

      //Below: we set up the display variable to target the div that holds our journal posts
      //next --> we create a for loop that checks if there are any elements in that div and removes them before displaying more
      let display = document.getElementById('journals');
      for (i = 0; (i = display.childNodes.length); i++) {
        //test below
        console.log('display.childNodes: ', display.childNodes);
        console.log('display.childNodes.length: ', display.childNodes.length);
        console.log('i: ', i);
        //test above
        display.removeChild(display.firstChild);
      }

      if (response.length === 0) {
        //let display = document.getElementById('journals');
        let header = document.createElement('h5');

        display.appendChild(header);
        header.textContent = "You haven't made any posts yet!";
        header.setAttribute('class', 'noPosts');
      } else {
        // Code will be added to else in next step
        for (i = 0; i < response.length; i++) {
          let display = document.getElementById('journals');
          let card = document.createElement('div');
          let body = document.createElement('div');
          let header = document.createElement('h5');
          let subtitle = document.createElement('h6');
          let para = document.createElement('p');
          let editBtn = document.createElement('button');
          let deleteBtn = document.createElement('button');

          let current = response[i];
          let title = current.title;
          let date = current.date;
          let entry = current.entry;

          display.appendChild(card);
          card.appendChild(body);
          body.appendChild(header);
          body.appendChild(subtitle);
          body.appendChild(para);
          body.appendChild(editBtn);
          body.appendChild(deleteBtn);

          card.setAttribute('id', current.id);
          card.setAttribute('class', 'card');
          body.setAttribute('class', 'card-body');
          header.setAttribute('class', 'card-title');
          subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
          para.setAttribute('class', 'card-text');

          editBtn.setAttribute('class', 'btn btn-dark editBtn');
          editBtn.setAttribute('type', 'button');
          editBtn.setAttribute('onclick', `editJournal(${current.id})`);

          deleteBtn.setAttribute('class', 'btn btn-dark deleteBtn');
          deleteBtn.setAttribute('type', 'button');
          deleteBtn.setAttribute('onclick', `deleteJournal(${current.id})`);

          header.textContent = title;
          subtitle.textContent = date;
          para.textContent = entry;
          editBtn.textContent = 'Edit';
          deleteBtn.textContent = 'Delete';
        }
      }
    });
}

/* *************************
 *** DISPLAY ALL ***
 ************************** */
function displayAll() {
  //console.log('displayAll Function Called');
  const accessToken = localStorage.getItem('SessionToken');

  fetch('http://localhost:3000/journal', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: accessToken,
    }),
  })
    .then(response => response.json())
    .catch(error => console.log('Error: ', error))
    .then(response => {
      console.log(response);

      //Below: we set up the display variable to target the div that holds our journal posts
      //next --> we create a for loop that checks if there are any elements in that div and removes them before displaying more
      let display = document.getElementById('journals');
      for (i = 0; (i = display.childNodes.length); i++) {
        display.removeChild(display.firstChild);
      }

      if (response.length === 0) {
        //let display = document.getElementById('journals');
        let header = document.createElement('h5');

        display.appendChild(header);
        header.textContent = 'There are no posts yet!';
        header.setAttribute('class', 'noPosts');
      } else {
        // Code will be added to else in next step
        for (i = 0; i < response.length; i++) {
          let display = document.getElementById('journals');
          let card = document.createElement('div');
          let body = document.createElement('div');
          let header = document.createElement('h5');
          let subtitle = document.createElement('h6');
          let para = document.createElement('p');
          let editBtn = document.createElement('button');
          let deleteBtn = document.createElement('button');

          let current = response[i];
          let title = current.title;
          let date = current.date;
          let entry = current.entry;

          display.appendChild(card);
          card.appendChild(body);
          body.appendChild(header);
          body.appendChild(subtitle);
          body.appendChild(para);
          body.appendChild(editBtn);
          body.appendChild(deleteBtn);

          card.setAttribute('id', current.id);
          card.setAttribute('class', 'card');
          body.setAttribute('class', 'card-body');
          header.setAttribute('class', 'card-title');
          subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
          para.setAttribute('class', 'card-text');

          editBtn.setAttribute('class', 'btn btn-dark editBtn');
          editBtn.setAttribute('type', 'button');
          editBtn.setAttribute('onclick', `editJournal(${current.id})`);

          deleteBtn.setAttribute('class', 'btn btn-dark deleteBtn');
          deleteBtn.setAttribute('type', 'button');
          deleteBtn.setAttribute('onclick', `deleteJournal(${current.id})`);

          header.textContent = title;
          subtitle.textContent = date;
          para.textContent = entry;
          editBtn.textContent = 'Edit';
          deleteBtn.textContent = 'Delete';
        }
      }
    });
}

/* *************************
 *** DISPLAY BY TITLE ***
 ************************** */
function displayByTitle() {
  console.log('displayByTitle Function Called');
  const accessToken = localStorage.getItem('SessionToken');

  let titleId = document.getElementById('searchBar').value;

  fetch(`http://localhost:3000/journal/${titleId}`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: accessToken,
    }),
  })
    .then(response => response.json())
    .catch(err => console.log('Error: ', err))
    .then(response => {
      console.log(response);
      //Below: we set up the display variable to target the div that holds our journal posts
      //next --> we create a for loop that checks if there are any elements in that div and removes them before displaying more
      let display = document.getElementById('journals');
      for (i = 0; (i = display.childNodes.length); i++) {
        display.removeChild(display.firstChild);
      }

      if (response.length === 0) {
        //let display = document.getElementById('journals'); //declared this earlier
        let header = document.createElement('h5');

        display.appendChild(header);
        header.textContent = 'We cannot find any post that match that Title!';
        header.setAttribute('class', 'noPosts');
      } else {
        for (i = 0; i < response.length; i++) {
          let display = document.getElementById('journals');
          let card = document.createElement('div');
          let body = document.createElement('div');
          let header = document.createElement('h5');
          let subtitle = document.createElement('h6');
          let para = document.createElement('p');
          let editBtn = document.createElement('button');
          let deleteBtn = document.createElement('button');

          let current = response[i];
          let title = current.title;
          let date = current.date;
          let entry = current.entry;

          display.appendChild(card);
          card.appendChild(body);
          body.appendChild(header);
          body.appendChild(subtitle);
          body.appendChild(para);
          body.appendChild(editBtn);
          body.appendChild(deleteBtn);

          card.setAttribute('id', current.id);
          card.setAttribute('class', 'card');
          body.setAttribute('class', 'card-body');
          header.setAttribute('class', 'card-title');
          subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
          para.setAttribute('class', 'card-text');

          editBtn.setAttribute('class', 'btn btn-dark editBtn');
          editBtn.setAttribute('type', 'button');
          editBtn.setAttribute('onclick', `editJournal(${current.id})`);

          deleteBtn.setAttribute('class', 'btn btn-dark deleteBtn');
          deleteBtn.setAttribute('type', 'button');
          deleteBtn.setAttribute('onclick', `deleteJournal(${current.id})`);

          header.textContent = title;
          subtitle.textContent = date;
          para.textContent = entry;
          editBtn.textContent = 'Edit';
          deleteBtn.textContent = 'Delete';
        }
      }
    });
}
