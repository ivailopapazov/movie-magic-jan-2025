import { Router } from 'express';

import movies from '../movies.js';

const router = Router();

router.get('/', (req, res) => {
    res.render('home', { movies });
});

router.get('/about', (req, res) => {
    res.render('about');
});

export default router;
