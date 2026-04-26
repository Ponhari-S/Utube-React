import SideBar from "../components/SideBar";
import MainContainer from "../components/MainContainer";

const Main = () => {
    return (
        <div className="flex">
            <SideBar />
            <MainContainer />
        </div>
    );
}

export default Main;