//const { DataTypes } = require('sequelize')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('cliente', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha_nacimiento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        red_social: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ocupacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipo_cabello: {
            type: DataTypes.STRING
        },
        estado_cabello: {
            type: DataTypes.STRING
        },
        formula: {
            type: DataTypes.STRING

        },
    }, {
        timestamps: true,
        tableName: 'cliente'
    });
}