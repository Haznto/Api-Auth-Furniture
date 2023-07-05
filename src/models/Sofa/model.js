'use strict'

const sofa = (sequelize,DataTypes) => sequelize.define('sofa', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    brand:{
        type: DataTypes.STRING
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false
    },
    url:{
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports = sofa;