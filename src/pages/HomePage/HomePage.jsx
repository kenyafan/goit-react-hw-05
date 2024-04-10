import { useEffect, useState } from "react";
import s from "./HomePage.module.css";
import { fetchTrendingMovies } from "../../api/getFilms";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then((data) => setMovies(data.results));
  }, []);

  return (
    <div className={s.HomePage}>
      <h2 className={s.title}>Trending</h2>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.item}>
            <Link to={"/movies/" + movie.id.toString()}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
