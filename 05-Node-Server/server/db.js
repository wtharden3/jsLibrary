const Sequelize = require('sequelize'); //1
const sequelize = new Sequelize('journal-walkthrough', 'postgres', 'tiNVEACk', {
  // 2, 3, 4, 5, 6
  host: 'localhost', // 7
  dialect: 'postgres', // 8
});

sequelize.authenticate().then(
  // 9, 10, 11
  function () {
    // 12
    console.log('Connected to journal-walkthrough postgres database');
  },
  function (err) {
    // 13
    console.log(err);
  }
);

module.exports = sequelize; //14
