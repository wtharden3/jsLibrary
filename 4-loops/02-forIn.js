// for in loop

let student = {
  name: "Whit",
  awesome: true,
  degree: "js"
}
for (item in student) {
  console.log(item);
  console.log("____");
  console.log(student[item]);

  //item is the key
  //student[item] is the value
}

let cats = ['tabby', 'brit shorthair', 'burmese'];

// for (cat in cats) {
//   console.log(cat);
//   console.log(cats[cat]);
// }

let fullName = 'wHITNEY tERRI hARDEN';
let firstLetter;
let nameRemains;

for (name in fullName) {
  console.log(fullName[name]);
}