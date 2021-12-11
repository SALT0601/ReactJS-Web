import PropTypes from "prop-types";




function DetailMovie({ result, id, coverImg, title, summary, genres }){
    return <div>
    <img src={coverImg} alt={title}/>
    <h2>
      {title}
    </h2>
    <p>{summary}</p>
    
  </div>;
}

DetailMovie.propTypes = {
    result:PropTypes.object,
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default DetailMovie;