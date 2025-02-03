import express from 'express';
import handlebars from 'express-handlebars';
import expressSession from 'express-session';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

import routes from './routes.js';
import showRatingHelper from './helpers/rating-helper.js';
import { authMiddleware } from './middlewares/auth-middleware.js';
import { tempData } from './middlewares/temp-data-middleware.js';

const app = express();

// db configuration
try {
    const defaultUri = 'mongodb://localhost:27017/magic-movies-jan2025';
    await mongoose.connect(process.env.DATABASE_URI ?? defaultUri);

    console.log('DB Connected Successfuly!');
} catch (err) {
    console.log('Cannot connect to DB');
    console.error(err.message);
}

// handlebars configuration
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    },
    helpers: {
        showRating: showRatingHelper,
    }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

// express configuration
app.use('/static', express.static('src/public'));
app.use(express.urlencoded({ extended: false })); // Learn express to parse form data
app.use(cookieParser());
app.use(expressSession({
    secret: 'laskjdlsakjdlaskjdlkasdjska123123easdas',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true
    }
}))
app.use(tempData);
app.use(authMiddleware);

// setup routes
app.use(routes);

// start server
app.listen(5001, () => console.log('Server is listening on http://localhost:5001...'));
