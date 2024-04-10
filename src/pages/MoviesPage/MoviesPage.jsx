import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchSearchMovies } from "../../api/getFilms";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setUseSearchParams] = useSearchParams();

  const handleSearchMovies = async (query) => {
    const response = await fetchSearchMovies(query);
    setMovies(response.results);
  };

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      handleSearchMovies(query);
    }
  }, [searchParams]);

  return (
    <div className={s.movies}>
      <SearchBar setUseSearchParams={setUseSearchParams} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
