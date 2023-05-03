const Movie = ({title,index,overview,poster_path}) =>{
    const Image_API = 'https://image.tmdb.org/t/p/w440_and_h660_face';
    return (
        <div className="movie">
            <h3>{title}</h3>
            <img src={Image_API + poster_path} alt={title}></img>
            <div className="movie-overview">
                {overview}
            </div>
        </div>
    )
}

export default Movie;