import fetchMovies from "../api/api.js";
import { useEffect, useState } from "react";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const fetchedMovies = await fetchMovies("batman");
            setMovies(fetchedMovies);
        };

        getMovies();
    }, []);

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            ))}
        </div>
    );
};

export default Movies;
