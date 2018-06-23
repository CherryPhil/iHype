var Sequelize = require('sequelize');
var sequelizeTransforms = require('sequelize-transforms');

var sequelizeInstance = new Sequelize('iHypeDb', 'iHyper', 'pass', {
    host: 'localhost',
    dialect: 'mssql',
    dialectModulePath: 'tedious',
    dialectOptions: {
        driver: 'SQL Server Native Client 11.0',
        instanceName: 'SQLEXPRESS'
    },
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
})

sequelizeInstance.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

sequelizeTransforms(sequelizeInstance);

module.exports.sequelizeInstance = sequelizeInstance;
module.exports.Sequelize = Sequelize;