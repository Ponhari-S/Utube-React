import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";
import SearchPage from "./SearchPage";
import Header from "./Header";

const Main = () => {
    return (
        <>
        <Header />
        <div className="flex">
            <SideBar />
            <Outlet />
        </div>
        </>
    );
}

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <MainContainer />
            },
            {
                path: "watch/:id",
                element: <WatchPage />
            },
            {
                path: "search",
                element: <SearchPage />
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