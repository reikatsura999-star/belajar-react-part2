import Avatar from "./Avatar";

function UserInfo({ user }) {
    return (
        <div className="flex items-center gap-2 mb-2">
            <Avatar user={user} />
            <div className="font-bold">{user.name}</div>
        </div>
    )
}
export default UserInfo;