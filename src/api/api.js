import {API_URL} from "./constants.js";

const fetchMovies = async (searchQuery = "batman") => {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
    const response = await fetch(`${API_URL}?apikey=${apiKey}&s=${searchQuery}`);
    const data = await response.json();
    return data.Search || [];
};

export default fetchMovies;
