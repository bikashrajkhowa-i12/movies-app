const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  id: { type: Number },
  genreIds: { type: Array },
  title: { type: String },
  name: { type: String },
  type: { type: String },
  rating: { type: Number },
  releaseDate: { type: Date },
  popularity: { type: Number },
  voteAverage: { type: Number, min: 0, max: 10 },
  voteCount: { type: Number },
  overView: { type: String },
  posterPath: { type: String },
  originalLanguage: { type: String },
  originCountry: { type: Array },
});

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;
