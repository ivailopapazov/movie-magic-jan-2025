import { v4 as uuid } from 'uuid';
import movies from "../movies.js";

export default {
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
        });

        return newId;
    }
}
