import { Router } from 'express';
import movieService from '../services/movie-service.js';

const router = Router();

router.get('/', async (req, res) => {
    // *Second solution use .lean on query to get plain object
    const movies = await movieService.getAll();

    // *First solution - convert documents to objects
    // Convert documents to plain objects
    // const plainMovies = movies.map(m => m.toObject());

    // *Third solution is to use allowProtoPropertiesByDefault runtimeOption in handlebars
    res.render('home', { movies });
});

router.get('/about', (req, res) => {
    res.render('about', { pageTitle: 'About'});
});

export default router;
