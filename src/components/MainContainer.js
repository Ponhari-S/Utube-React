import { useEffect,useState } from "react";
import { YOUTUBE_URL } from "../config";
import VideoCard from "../components/VideoCard";
import Shimmer from "./Shimmer";

const MainContainer = () => {

    const[videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    async function getVideos() {
        const data = await fetch(YOUTUBE_URL);
        const json = await data.json();
        setVideos(json.items);
    }

    if(videos.length === 0) return <Shimmer />;
    return (
        <div className="flex flex-wrap w-100">
            <div className="border-2 border-red-500">
                <VideoCard key={videos[40].id} snippet={videos[40].snippet} statistics={videos[40].statistics} id={videos[40].id}/>
            </div>
            {videos.map((video) => <VideoCard key={video.id} snippet={video.snippet} statistics={video.statistics} id={video.id} />)}
        </div>
    );
}

export default MainContainer;