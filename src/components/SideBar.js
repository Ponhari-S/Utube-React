import { useSelector } from "react-redux";
import { isMenuOpen } from "../utils/sidebarSlice";
import { Link } from "react-router-dom";


const SideBar = () => {
    const menuOpen = useSelector(isMenuOpen);

    if (!menuOpen) return null;
    return (
        <div className="text-black p-4 shadow-lg w-40">
            <ul className="space-y-2">
                <li className="hover:bg-gray-200 p-2 rounded"><Link to='/'>Home</Link></li>
                <li className="hover:bg-gray-200 p-2 rounded">Shorts</li>
            </ul>
            <hr className="my-4 border-gray-200" />
            <ul className="space-y-2">
                <li className="hover:bg-gray-200 p-2 rounded">Subscriptions</li>
            </ul>
            <hr className="my-4 border-gray-200" />
            <ul className="space-y-2">
                <li className="hover:bg-gray-200 p-2 rounded">Playlist</li>
                <li className="hover:bg-gray-200 p-2 rounded">Trending</li>
                <li className="hover:bg-gray-200 p-2 rounded">Library</li>
                <li className="hover:bg-gray-200 p-2 rounded">History</li>
                <li className="hover:bg-gray-200 p-2 rounded">Your Videos</li>
                <li className="hover:bg-gray-200 p-2 rounded">Watch Later</li>
                <li className="hover:bg-gray-200 p-2 rounded">Liked Videos</li>
            </ul>
        </div>
    );
}

export default SideBar;