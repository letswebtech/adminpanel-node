const Sequelize = require('Sequelize');
const sequelize = require('../util/database');

const Employer = sequelize.define('employer', {
    id: {
        type: Sequelize.BIGINT(60),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fname: {
        type: Sequelize.STRING(256)
    },
    lname: {
        type: Sequelize.STRING(256)
    },
    profilePic: {
        type: Sequelize.STRING(256)
    },
    email: {
        type: Sequelize.STRING(256),
        validate: {
            isEmail:true
          },
        unique: {
            args: true,
            msg: 'Email address already in use!'
        }
    },
    dialCode: {
        type: Sequelize.INTEGER
    },
    mobileNo: {
        type: Sequelize.INTEGER
    },
    password: {
        type: Sequelize.STRING(600)
    },
    conpanyCode: {
        type: Sequelize.STRING(256)
    },
    conpanyName: {
        type: Sequelize.STRING(256)
    },
    conpanyDescription: {
        type: Sequelize.TEXT
    },
    conpanyLogo: {
        type: Sequelize.STRING(256)
    },
    compantUID: {
        type: Sequelize.STRING(256)
    },
    conpanyPhone: {
        type: Sequelize.STRING(20)
    },
    address1: {
        type: Sequelize.TEXT
    },
    address2: {
        type: Sequelize.TEXT
    },
    cityId: {
        type: Sequelize.INTEGER
    },
    stateId: {
        type: Sequelize.INTEGER
    },
    countryId: {
        type: Sequelize.INTEGER
    },
    local:{
        type: Sequelize.STRING(20)
    },
    profileCompleted:{
        type: Sequelize.BOOLEAN
    },
    emailVerified: {
        type: Sequelize.BOOLEAN
    },
    mobileNoVerified: {
        type: Sequelize.BOOLEAN
    },
    subscriptionId: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.INTEGER
    },
    deletedAt: {
        type: Sequelize.DATE
    }
});

module.exports = Employer;