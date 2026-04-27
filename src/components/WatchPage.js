import { useParams } from "react-router-dom";

const WatchPage = () => {
    const {id} = useParams();

    return (
        <div className="flex flex-col w-100 m-10">
            <div className="w-360 h-120">
            <iframe className="rounded-md" width="960" height="450" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Video Name</h1>
                <p className="text-sm text-gray-600">Channel Name</p>
                <p className="text-sm text-gray-600">1M Views • 1 day ago</p>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    );
}

export default WatchPage;