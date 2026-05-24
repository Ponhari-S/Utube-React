import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import CommentSection from "./CommentSection";
import LiveSection from "./LiveSection";
import { addLiveChatMessage } from "../utils/liveSlice";
import { useDispatch } from "react-redux";

const WatchPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {state} = useLocation();
    const {snippet, statistics} = state;
    const [isExpanded, setIsExpanded] = useState(false);
    const [chat,setChat] = useState("");
    console.log(chat);

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
                        <form className="w-full flex mt-4" id="chatForm">
                        <input type="text" className="px-2 w-full rounded-l-md bg-gray-200" value={chat} onChange={(e)=>setChat(e.target.value)}></input>
                        <button className="bg-blue-500 text-white px-2 rounded-r-md h-10" onClick={
                            (e) => {
                                e.preventDefault();
                                if(chat.length!==0) dispatch(addLiveChatMessage({id: Date.now(), name: "HariPantDC", msg: chat}));
                                setChat("");
                            }
                        }>Send</button>
                        </form>
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