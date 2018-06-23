var myDatabase = require('../controllers/sqlDatabase');
var sequelizeInstance = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;

const UserModel = sequelizeInstance.define('Users', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        trim: true
    },
    mobile: {
        type: Sequelize.INTEGER,
        trim: true
    },
    accnumber: {
        type: Sequelize.INTEGER,
        trim: true
    }
});

UserModel.sync({ force: false });

module.exports = sequelizeInstance.model('Users', UserModel);