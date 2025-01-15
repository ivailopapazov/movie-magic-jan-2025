import { Router } from "express";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create'); 
});

movieController.get('/:movieId/details', (req, res) => {
    res.render('details'); 
});

export default movieController;
