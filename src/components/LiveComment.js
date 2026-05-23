import { useEffect, useRef } from 'react';

const LiveComment = ({ messages }) => {
    const bottomRef = useRef(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    return (
        <div className="flex flex-col space-y-2">
            {messages.map((message) => (
                <div key={message.id} className="flex items-center space-x-2 p-1">
                    <img
                        src="https://www.gravatar.com/avatar/?d=mp"
                        alt="User Profile"
                        className="w-6 h-6 rounded-full"
                    />
                    <div className="flex flex-row space-x-2">
                        <p className="font-bold text-sm text-blue-600 whitespace-nowrap">{message.name}:</p>
                        <p className="text-sm">{message.msg}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LiveComment;