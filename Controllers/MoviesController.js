import asyncHandler from "express-async-handler"
import Movie from "../Models/MoviesModel.js"

const getMovies = asyncHandler(async (req,res) => {
    try{
      const movies = await Movie.find();
      res.status(200).json(movies);
    }catch(error){
      res.status(400).json({
       message: error.message
      });
     }
  
});

const getMoviesByCategory = asyncHandler(async (req, res) => {
// Définir la fonction pour récupérer les films d'une catégorie
exports.getMoviesByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const movies = await Movie.find({ categories: categoryId });
    res.status(200).json(movies);
    } catch (error) {
    console.error(error);
    res.status(500).send('Error getting movies');
    }
  }
  });

const getMovieById = asyncHandler(async (req, res) => {
    const _id = req.query.id;

    try {
      const movie = await Movie.findOne({ _id });
      res.status(200).json(movie);
    }catch(error) {
      res.status(400).json({
       message: error.message
      });
     }
  
});

export { getMovies,getMoviesByCategory, getMovieById };