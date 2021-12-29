import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";



function Movie({ id, year, coverImg, title, summary, genres }){
    return <div className={styles.movie}>
    <img src={coverImg} alt={title} title={title} className={styles.movie__img}/>
    <div>
      <h2 className={styles.movie__title}>
        <Link to={`/Movie/${id}`}>{title}</Link>
      </h2>
      <h5 className={styles.movie__year}>{year}</h5>
      <p className={styles.movie__summary}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  </div>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default Movie;