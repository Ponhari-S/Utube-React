import { useEffect,useState } from "react";
import { YOUTUBE_URL } from "../config";
import VideoCard from "../components/VideoCard";

const MainContainer = () => {

    const[videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    async function getVideos() {
        const data = await fetch(YOUTUBE_URL);
        const json = await data.json();
        console.log(json.items);
        setVideos(json.items);
    }

    return (
        <div className="flex flex-wrap w-100">
            {videos.map((video) => <VideoCard key={video.id} snippet={video.snippet} statistics={video.statistics} />)}
        </div>
    );
}

export default MainContainer;