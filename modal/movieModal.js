const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    movieName: {
        type: String,
        required: true
    },
    movieBudget: {
        type: Number,
        required: true
    },
    movieGenere: {
        type: [String],
        enum: ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Thriller'],
        required: true
    },
    movieReleaseDate: {
        type: Date,
        required: true
    },
    movieDirector: {
        type: String,
        required: true
    },
    movieDescription: {
        type: String,
        required: true
    },
    movieimage: {
        type: String,
        required: true
    },
    movieImdb : {
        type: Number,
        required: true
    },
    movieZone : {
        type: String,
        required: true
    },
});



const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

