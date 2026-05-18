import {useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../config";

const SearchPage = () => {
    const[SearchParams] = useSearchParams();
    const query=SearchParams.get("v");
    const[result,setResult]=useState([]);
    const[notFound,setNotFound] =useState(false);

    useEffect(()=>{
        async function SearchVideo() {
            const data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q="+query+"&key="+API_KEY);
            const json = await data.json();
    
            if(!json.items || json.items.length===0){
                setNotFound(true);
                return;
            }
    
            setNotFound(false);
            setResult(json.items || []);
        }
        
        if(query) SearchVideo();
    },[query]);

    if (notFound) return (
        <div className="flex flex-col items-center justify-center h-96 mx-auto">
            <h1 className="text-2xl font-bold">No videos found</h1>
            <p className="text-gray-500 mt-2">Try searching for something else</p>
        </div>
    );

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {result.map((video) => (
                    <a key={video.id.videoId} href={"/watch?v="+video.id.videoId} className="flex flex-col items-start space-x-4">
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full h-auto rounded-md" />
                        <h2 className="text-lg font-semibold mt-2">{video.snippet.title}</h2>
                        <p className="text-gray-500">{video.snippet.channelTitle}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default SearchPage;