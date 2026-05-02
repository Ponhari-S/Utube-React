import { useState } from "react";

const Comment = ({ comment }) => {
    const [isRepliesOpen, setIsRepliesOpen] = useState(false);

    return (
        <div className="mb-4">
            <div className="flex space-x-3">
                <img
                    src={`https://www.gravatar.com/avatar/${comment.id}?d=identicon`}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                />
                <div>
                    <p className="text-sm font-bold">{comment.author}</p>
                    <p className="text-sm">{comment.text}</p>
                    <div className="flex space-x-4 text-xs text-gray-500 mt-1">
                        <span>{comment.time}</span>
                        <button className="font-bold hover:text-black">Reply</button>
                    </div>

                    {comment.replies && comment.replies.length > 0 && (
                        <button
                            className="text-blue-600 text-xs font-bold mt-2"
                            onClick={() => setIsRepliesOpen(!isRepliesOpen)}
                        >
                            {isRepliesOpen
                                ? "Hide replies"
                                : `${comment.replies.length} replies`}
                        </button>
                    )}

                    {isRepliesOpen && (
                        <div className="ml-6 mt-3 border-l-2 border-gray-200 pl-4">
                            {comment.replies.map((reply) => (
                                <div key={reply.id} className="flex space-x-3 mb-3">
                                    <img
                                        src={`https://www.gravatar.com/avatar/${reply.id}?d=identicon`}
                                        alt="avatar"
                                        className="w-7 h-7 rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm font-bold">{reply.author}</p>
                                        <p className="text-sm">{reply.text}</p>
                                        <div className="flex space-x-4 text-xs text-gray-500 mt-1">
                                            <span>{reply.time}</span>
                                            <button className="font-bold hover:text-black">Reply</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const CommentSection = () => {
    const comments = [
        {
            id: "1",
            author: "John Doe",
            text: "This video is amazing! Loved every second of it.",
            likes: 120,
            time: "2 days ago",
            replies: [
                { id: "1a", author: "Jane Smith", text: "Totally agree!", likes: 45, time: "1 day ago" },
                { id: "1b", author: "Bob Johnson", text: "Same here, best video ever!", likes: 30, time: "1 day ago" },
            ],
        },
        {
            id: "2",
            author: "Alice Brown",
            text: "Great explanation, very helpful!",
            likes: 89,
            time: "3 days ago",
            replies: [
                { id: "2a", author: "Charlie Wilson", text: "Helped me a lot too!", likes: 20, time: "2 days ago" },
            ],
        },
        {
            id: "3",
            author: "Eve Davis",
            text: "Keep up the great work!",
            likes: 56,
            time: "5 days ago",
            replies: [],
        },
    ];

    return (
        <div className="w-full max-w-[960px] mx-auto p-4">
            <h2 className="text-xl font-bold mb-6">{comments.length} Comments</h2>

            <div className="flex space-x-3 mb-8">
                <img
                    src="https://www.gravatar.com/avatar/?d=mp"
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                />
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full border-b border-gray-300 outline-none text-sm pb-1 focus:border-black"
                />
            </div>

            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default CommentSection;