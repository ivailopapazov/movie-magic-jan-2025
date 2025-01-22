import { Router } from "express";

const castController = Router();

castController.get('/create', (req, res) => {
    res.render('cast/create');
});

export default castController;
