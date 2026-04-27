import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";

const Main = () => {
    return (
        <div className="flex">
            <SideBar />
            <Outlet />
        </div>
    );
}

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <MainContainer />
            },
            {
                path: "/watch/:id",
                element: <WatchPage />
            }
        ]
    }
]);

const MainRouterProvider = () => {
    return (
        <RouterProvider router={mainRouter} />
    );
}

export default MainRouterProvider;