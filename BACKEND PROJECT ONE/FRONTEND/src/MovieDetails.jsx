import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
    const [Data, setData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/movies/${id}`);
                const res = await response.json();
                setData(res);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="movie-details-page">
            <button type="button" className="back-button" onClick={() => navigate(-1)}>
                ← Back
            </button>

            {Data ? (
                <div className="movie-details">
                    <div className="movie-image">
                        <img src={Data.poster} alt={Data.title} />
                    </div>

                    <div className="movie-info">
                        <span className="movie-tag">Now Showing</span>
                        <h2>{Data.title}</h2>

                        <div className="movie-meta">
                            <span>⭐ {Data.rating}</span>
                            <span>{Data.language}</span>
                            <span>{Data.duration}</span>
                        </div>

                        <div className="movie-facts">
                            <p><strong>Release Date:</strong> {Data.releaseDate}</p>
                            <p><strong>Director:</strong> {Data.director}</p>
                        </div>

                        <p className="movie-description">{Data.description}</p>
                    </div>
                </div>
            ) : (
                <p className="movie-loading">Loading...</p>
            )}
        </div>
    );
};

export default MovieDetails;
