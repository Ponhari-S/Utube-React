import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearSideBar } from "../utils/sidebarSlice";

const VideoCard = ({snippet,statistics,id}) => {

    const dispatch = useDispatch();
    const clearBar = () => {
        dispatch(clearSideBar());
    }

    const {channelTitle,title,thumbnails} = snippet;

    return (
        <Link to={`/watch/${id}`}>
        <div className="w-80 p-2 m-2 shadow-lg" onClick={() => clearBar()}>
            <img src={thumbnails.high.url} alt="Video Thumbnail" className="w-full h-48 object-cover" />
            <div className="p-2">
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="text-sm text-gray-600">{channelTitle}</p>
                <p className="text-sm text-gray-600">{statistics.viewCount} Views</p>
            </div>
        </div>
        </Link>
    );
};

export default VideoCard;