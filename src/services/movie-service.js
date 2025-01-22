import Movie from '../models/Movie.js';

export default {
    getAll(filter = {}) {
        let query = Movie.find({});

        if (filter.search) {
            // TODO: fix partial case insensitive search 
            query = query.where({ title: filter.search });
        }

        if (filter.genre) {
            // TODO: add case insensitive search
            query = query.where({ genre: filter.genre });
        }

        if (filter.year) {
            query = query.where({ year: Number(filter.year) })
        }

        return query;
    },
    getOne(movieId) {
        const result = Movie.findById(movieId);

        return result;
    },
    create(movieData) {
        const result = Movie.create({
            ...movieData,
            rating: Number(movieData.rating),
            year: Number(movieData.year),
        });

        return result;
    },
    async attachCast(movieId, castId) {
        // Attach #1
        const movie = await Movie.findById(movieId);
        movie.casts.push(castId);
        
        await movie.save();

        return movie;

        // Attach #2
    }
}
