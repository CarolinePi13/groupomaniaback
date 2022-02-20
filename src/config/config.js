const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME, 'postgres', process.env.DB_PASSWORD, {
    host: 'ec2-54-74-60-70.eu-west-1.compute.amazonaws.com',
    port:5432,
    dialect: 'postgres'
  });


sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
    })
    .catch ((error)=> {
    console.error('Unable to connect to the database:', error);
  });

  module.exports= sequelize;