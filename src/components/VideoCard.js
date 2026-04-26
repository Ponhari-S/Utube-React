
const VideoCard = ({snippet,statistics}) => {

    if (!snippet || !statistics) return null;

    const {channelTitle,title,thumbnails} = snippet;

    return (
        <div className="w-80 p-2 m-2 shadow-lg">
            <img src={thumbnails.high.url} alt="Video Thumbnail" className="w-full h-48 object-cover" />
            <div className="p-2">
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="text-sm text-gray-600">{channelTitle}</p>
                <p className="text-sm text-gray-600">{statistics.viewCount} Views</p>
            </div>
        </div>
    );
};

export default VideoCard;