import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addLiveChatMessage } from "../utils/liveSlice";
import LiveComment from "./LiveComment";
import { USERS, MESSAGES } from "../utils/helper";

const LiveSection = () => {

    const dispatch = useDispatch();
    const live = useSelector((state) => state.live.liveChatMessages);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomUser = USERS[Math.floor(Math.random() * USERS.length)];
            const randomMessage = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
            dispatch(addLiveChatMessage({id: Date.now(),name:randomUser,msg:randomMessage}));
        }, 1000);

        return () => clearInterval(interval);
    },[dispatch])

    return (
        <div className="w-80 h-[500px] border-2 border-gray-300 rounded-md flex flex-col">
            <div className="p-3 border-b border-gray-300">
                <h2 className="font-bold text-sm">Live Chat</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-3">
                <LiveComment messages={live} />
            </div>
        </div>
    );
}

export default LiveSection;