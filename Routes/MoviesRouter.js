import express from 'express'
import { getMovies, getMovieById } from '../Controllers/MoviesController.js';

const router = express.Router();
router.get("/getMovies", getMovies);
router.get("/getMovieById", getMovieById);

export default router;