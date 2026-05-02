import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/sidebarSlice";
import { YOUTUBE_SEARCH_URL } from "../config";
import { setSearchResults, setVideoDetails } from "../utils/cacheSlice";
import { useSelector } from "react-redux";

const Header = () => {

    const [search,setSearch] = useState("");
    const [searchResult,setSearchResult] = useState([]);
    const [isShow,setIsShow] = useState(false);

    const cache = useSelector((state) => state.cache);
    const dispatch = useDispatch();

    useEffect(() => {

        async function getSearch(){
            const data= await fetch(YOUTUBE_SEARCH_URL + search + "&key=AIzaSyBOrWUZtDji2ycKrbT0y-7XYL3uB3JIJN0");
            const json = await data.json();
            console.log(json);
            if (!json.items) return;
            const titles = json.items.map((item) => item.snippet.title);
            dispatch(setVideoDetails({ videoId: search, details: json.items }));
            dispatch(setSearchResults({ query: search, results: titles }));
            setSearchResult(titles);
        }

        if(search.length > 0){
            if (cache.searchResults[search]) {
                setSearchResult(cache.searchResults[search]);
            } else {
                const timer = setTimeout(() => {
                    getSearch();
                }, 200);
                return () => clearTimeout(timer);
            }
        }
    }, [search, cache.searchResults, dispatch]);


    const toggleBar = () => {
        dispatch(toggleSideBar());
    }

  return (
    <div className="flex items-center justify-between p-4 text-black shadow-md">
        <div className="flex items-center space-x-4">
            <button className="h-8 w-8" onClick={() => toggleBar()}>
                <img src="https://static.vecteezy.com/system/resources/previews/046/501/988/non_2x/hamburger-menu-bar-flat-icon-for-apps-and-websites-website-navigation-hamburger-menu-icons-vector.jpg" alt="Menu" className="menu-icon" />
            </button>
            <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="Logo" className="w-20 h-8" /></a>
        </div>
        <div className="bg-gray-200 flex items-center rounded-full overflow-hidden border border-gray-300">
            <input type="text" className="w-80 h-8 rounded-l-full px-5" value={search} onChange={(e)=>setSearch(e.target.value)} onFocus={() => setIsShow(true)} onBlur={() => setIsShow(false)}/>
            <button className="h-8 w-20 rounded-l-full">Search</button>
            {isShow && <div className="mt-2 absolute top-12 bg-white border border-gray-300 w-80 rounded-md shadow-lg">
                {searchResult.map((result,index) => (
                    <div key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        {result}
                    </div>
                ))}
            </div>}
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src="https://th.bing.com/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="User Profile" className="profile-pic" />
        </div>
    </div>
  );
}

export default Header;