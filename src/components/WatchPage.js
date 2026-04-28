import { useLocation, useParams } from "react-router-dom";

const WatchPage = () => {
    const {id} = useParams();
    const {state} = useLocation();

    const {snippet,statistics} = state;

    return (
        <div className="flex flex-col items-center m-10">
            <div className="w-full max-w-[960px]">
            <iframe className="rounded-md h-[500px]" width="960" height="500" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="p-4 w-full max-w-[960px]">
                <h1 className="text-2xl font-bold break-words">{snippet.localized.title}</h1>
                <p className="text-sm text-gray-600">{snippet.channelTitle}</p>
                <p className="text-sm text-gray-600">{statistics.viewCount} Views</p>
                <p className="mt-4 break-words whitespace-pre-wrap bg-gray-100 rounded-lg p-5">{snippet.description}</p>
            </div>
        </div>
    );
}

export default WatchPage;