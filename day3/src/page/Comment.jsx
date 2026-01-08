import UserInfo from "./UserInfo";

function Comment({ author, text, date }) {
    return (
        <div className="border p-4 rounded-lg shadow-sm max-w-sm my-4 bg-white">
            <UserInfo user={author} />
            <div className="text-gray-700">{text}</div>
            <div className="text-sm text-gray-500 mt-2">{date.toLocaleDateString()}</div>
        </div>
    )
}
export default Comment;