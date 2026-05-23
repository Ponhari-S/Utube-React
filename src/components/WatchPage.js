import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import CommentSection from "./CommentSection";
import LiveSection from "./LiveSection";

const WatchPage = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const {snippet, statistics} = state;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex flex-col p-6 max-w-[1400px] mx-auto">
            <div className="flex flex-row gap-6">
                <div className="flex flex-col flex-1">
                    <iframe
                        className="rounded-md w-full"
                        height="500"
                        src={`https://www.youtube.com/embed/${id}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    <div className="mt-4">
                        <h1 className="text-xl font-bold break-words">{snippet.localized.title}</h1>
                        <p className="text-sm text-gray-600 mt-1">{snippet.channelTitle}</p>
                        <p className="text-sm text-gray-600">{statistics.viewCount} Views</p>
                        <div className="mt-4 bg-gray-100 rounded-lg p-5">
                            <p className={`break-words whitespace-pre-wrap text-sm ${!isExpanded ? "line-clamp-3" : ""}`}>
                                {snippet.description}
                            </p>
                            <button
                                className="text-sm font-bold mt-2 hover:text-gray-600"
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                {isExpanded ? "Show less" : "...more"}
                            </button>
                        </div>
                    </div>
                </div>
                <div >
                    <div>
                        <LiveSection />
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-6 mt-6">
                <div className="flex-1">
                    <CommentSection />
                </div>
                <div className="w-80"></div>
            </div>

        </div>
    );
}

export default WatchPage;