const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres'
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established to journal-walkthrough successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
//console.log(sequelize);
module.exports = sequelize;
