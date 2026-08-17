import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Riple } from "react-loading-indicators";

const VideosPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/videos");
                const res = await response.json();
                setData(res);
            } catch (error) {
                console.error("Error fetching videos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const navigate = useNavigate();

    return (
        <div className="videos-page">
            <div className="videos-container">
                {loading ? (
                    <div className="loading-screen">
                        {" "}
                        <Riple color="#32cd32" size="medium" text="" textColor="" />{" "}
                    </div>
                ) : (
                    data.map((video) => (
                        <div
                            key={video.id}
                            className="video-card"
                            onClick={() => {
                                navigate(`/videos/${video.id}`);
                            }}
                        >
                            <div className="video-image">
                                <img src={video.thumbnail} alt={video.title} />
                            </div>
                            <div className="video-info">
                                <h1>{video.title}</h1>
                                <h4>@{video.channel}</h4>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default VideosPage;
