import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

const WatchPage = () => {
    const {id} = useParams();
    const {state} = useLocation();

    const {snippet,statistics} = state;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex flex-col items-center m-10">
        <div className="flex flex-col items-center m-10">
            <div className="w-full max-w-[960px]">
            <iframe className="rounded-md h-[500px]" width="960" height="500" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="p-4 w-full max-w-[960px]">
                <h1 className="text-2xl font-bold break-words">{snippet.localized.title}</h1>
                <p className="text-sm text-gray-600">{snippet.channelTitle}</p>
                <p className="text-sm text-gray-600">{statistics.viewCount} Views</p>
                <div className="mt-4 bg-gray-100 rounded-lg p-5">
                        <p className={`break-words whitespace-pre-wrap ${!isExpanded ? "line-clamp-3" : ""}`}>
                            {snippet.description}
                        </p>
                        <button className="text-sm font-bold mt-2 hover:text-gray-600" onClick={() => setIsExpanded(!isExpanded)}>
                            {isExpanded ? "Show less" : "...more"}
                        </button>
                </div>
            </div>
        </div>
        <div className="w-full max-w-[960px] mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            <p className="text-gray-600">Comments section is under development.</p>
        </div>
        </div>
    );
}

export default WatchPage;