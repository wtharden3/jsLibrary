let netflix = {
  id: 1,
  name: "The Office",
  season1: {
    seasonInfo: {
      episodeInfo: [{
          episode: 1,
          episodeName: "Pilot"
        },
        {
          episode: 2,
          episodeName: "Diversity Day"
        },
        {
          episode: 3,
          episodeName: "Health Care"
        },
        {
          episode: 4,
          episodeName: "The Alliance"
        },
        {
          episode: 5,
          episodeName: "Basketball"
        },
        {
          episode: 6,
          episodeName: "Hot Girl"
        },
      ]
    }
  },
  season2: {},
  season3: {}
};

console.log(netflix);
console.log(netflix.name); //returns "The Office"
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName); //returns "The Alliance"
//name of show
let showName; //The office
showName = netflix.name;

// use dot notation and the .length prop
//number of episodes
let season1EpCount; // assign 6
season1EpCount = netflix.season1.seasonInfo.episodeInfo.length
console.log(season1EpCount);



//make array of all episode names
let epNames = []; //['<ep here>', "", ...]
let season1EpArr = netflix.season1.seasonInfo.episodeInfo;
//console.log(season1EpArr.episodeName);


season1EpArr.forEach(episode => epNames.push(episode.episodeName));
console.log(epNames);

// for (episode of season1EpArr) {
//   epNames.push(episode.episodeName);
// }
// console.log(epNames);

// Using an obj constructor
let numString = String(5);
//using an obj literal
let numString2 = "5";

let weather = {
  temp: 88,
  isRaining: false
}

// JSON <- JavaScript Object Notation
let spaceJam = {
  toonSquad: {
    human: 'Michael Jordan',
    rabbit1: 'Bugs Bunny',
    rabbit2: 'Lola Bunny',
    duck: 'Daffy Duck',
    tDevil: 'Tasmanian Devil',
    bird: 'Tweety',
    cat: 'Sylvester',
    pig: 'Porky Pig'
  },
  monstars: {
    0: 'Bupkus',
    1: 'Bang',
    2: 'Nawt',
    3: 'Pound',
    4: 'Blanko'
  },
  nbaPlayers: {
    phoenixSuns: 'Charles Barkley',
    newJerseyNets: 'Shawn Bradley',
    newYorkNicks: 'Patrick Ewing',
    charlotteHornets1: 'Larry Johnson',
    charlotteHornets2: 'Muggsy Bogues'
  }
}

// keys() object method
console.log(Object.keys(spaceJam.toonSquad)); //retunrs An Array of the keys of an Object

console.log(Object.keys(spaceJam.toonSquad.duck)); // index of the characters of the string
console.log(Object.values(spaceJam.toonSquad.duck));

console.log(Object.keys(spaceJam.toonSquad).toString()); //toString() is  a method on an array

// values() Object method
console.log(Object.values(spaceJam.toonSquad));

let hello = "Hello World!";

console.log(Object.keys(hello));
console.log(Object.values(hello));

//Object and Object() is not the same Object() is an object constructor Object