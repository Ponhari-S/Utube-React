const SideBar = () => {
    return (
        <div className="w-64 text-black h-screen p-4 shadow-lg">
            <ul className="space-y-2">
                <li className="hover:bg-gray-200 p-2 rounded">Home</li>
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