
const Shimmer = () => {
    return (
        <div className="flex flex-wrap">
            {Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="w-80 p-2 m-2 shadow-lg animate-pulse bg-gray-200">
                    <div className="w-full h-48 bg-gray-300 mb-4"></div>
                    <div className="h-4 bg-gray-300 mb-2"></div>
                    <div className="h-4 bg-gray-300 mb-2"></div>
                    <div className="h-4 bg-gray-300"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;