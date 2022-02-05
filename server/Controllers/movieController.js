const { Op } = require("sequelize");

const {Movie} = require('../models');

const getAllMovies = async (req, res) => {
    const { searchText } = req.query;

    try {
        const conditions = searchText ? {
            where: {
                title: {
                    [Op.iRegexp]: searchText
                }
            }
        } : {};
       
        // console.log(Movie.Movies.findAll);
        const movies = await Movie.findAll(conditions);
        return res.json(movies);

    }
    catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

const getMovie = async (req, res) => {
    //path params access from req.params
    const { movieID } = req.params;

    try {
        const movie = await Movie.findOne({
            where: {
                id: Number(movieID)
            }
        });
        if (!movie) throw new Error("Movie Not Found");
        res.json({
            message: 'Movie Found',
            movie,
        });
    }
    catch (e) {
        res.status(404).json({
            message: e.message
        });
    }
};


const addMovie = async (req, res) => {
    const { title, poster, rating } = req.body;

    try {
        const createdMovie = await Movie.create({
            title,
            rating,
            poster,
            director,
            casts,
        });
        return res.json({
            message: 'Movie Created',
            movie: createdMovie
        })
    }
    catch (e) {
        res.status(500).json({
            message: e.message,
        });
    }
};


module.exports = {
    getAllMovies,
    getMovie,
    addMovie
}