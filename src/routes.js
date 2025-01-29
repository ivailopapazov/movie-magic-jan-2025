import { Router } from 'express';

import homeController from './controllers/home-controller.js';
import movieController from './controllers/movie-controller.js';
import castController from './controllers/cast-controller.js';
import authController from './controllers/auth-controller.js';

const routes = Router();

routes.use(homeController);
routes.use('/movies', movieController);
routes.use('/casts', castController);
routes.use('/auth', authController);

routes.get('*', (req, res) => {
    res.render('404');
});

export default routes;
