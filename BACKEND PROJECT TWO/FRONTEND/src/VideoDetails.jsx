import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Riple } from "react-loading-indicators";


const VideoDetails = () => {

    const [Data, setData] = useState(null)
    const [Loading, setLoading] = useState(true)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/videos/${id}`);
                const res = await response.json();
                setData(res);
            } catch (error) {
                console.error("Error fetching videos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);



    return (
        <>
            <div className="details-page">
                <div id="backBtn">
                    <button onClick={() => { navigate(-1) }}>Back</button>
                </div>
                {Loading ? (
                    <div className="loading-screen">
                        {" "}
                        <Riple color="#32cd32" size="medium" text="" textColor="" />{" "}
                    </div>
                ) : (
                    <div className="details-container">
                        <div className="video">
                            <h3>{Data.duration}</h3>
                            <img src={Data.thumbnail} alt={Data.thumbnail} />
                        </div>
                        <div className="video-details">
                            <h1>{Data.title}</h1>
                            <h2>@{Data.channel}</h2>
                            <h2>{Data.uploadDate}</h2>
                            <h2>{Data.views}</h2>
                            <h2>{Data.category}</h2>
                            <p>{Data.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default VideoDetails
