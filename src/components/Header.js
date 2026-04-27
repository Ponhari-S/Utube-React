import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/sidebarSlice";

const Header = () => {

    const dispatch = useDispatch();

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
            <input type="text" className="w-80 h-8 rounded-l-full px-5" />
            <button className="h-8 w-20 rounded-l-full">Search</button>
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src="https://th.bing.com/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="User Profile" className="profile-pic" />
        </div>
    </div>
  );
}

export default Header;