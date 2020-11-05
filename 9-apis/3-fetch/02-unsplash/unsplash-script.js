let randomImg = document.querySelector('.randomImg');
console.log('randomImg: ', randomImg);
let unsplashApi = `https://source.unsplash.com/random`;

fetch(unsplashApi)
  .then(response => {
    if (!response.ok) {
      console.log(response);
      return new Error(response);
    }
    console.log('Response: ', response);
    return response.blob();
    // return response.json();
  })
  .then(photoBlob => {
    console.log('MyBlob: ', photoBlob);
    let objURL = URL.createObjectURL(photoBlob);
    console.log('Obj URL: ', objURL);
    randomImg.src = objURL;
    console.log('randomImg.src: ', randomImg.src);
  })
  .catch(err => console.log(err));
