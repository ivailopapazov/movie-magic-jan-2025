import { v4 as uuid } from 'uuid';
import movies from "../movies.js";

export default {
    getAll(filter = {}) {
        let result = movies;

        if (filter.search) {
            result = result.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
        }

        if (filter.genre) {
            result = result.filter(movie => movie.genre.toLowerCase() === filter.genre);
        }

        if (filter.year) {
            result = result.filter(movie => movie.year === filter.year);
        }

        return result;
    },
    findOne(movieId) {
        // TODO: if movie is missing?

        const result = movies.find(movie => movie.id === movieId);

        return result;
    },
    create(movieData) {
        const newId = uuid();

        movies.push({
            id: newId,
            ...movieData,
            rating: Number(movieData.rating),
        });

        return newId;
    }
}
