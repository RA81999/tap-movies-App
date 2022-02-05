const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Movie = Sequelize.define('Movie', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        poster: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        {
            freezeTableName: true,
            timestamps: true,
            underscored: true,
            tableName: 'movies',
            schema: 'public'
        });

    return Movie;
}