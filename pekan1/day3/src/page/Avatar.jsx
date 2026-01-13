function Avatar({ user }) {
    return (
        <img
            className="w-12 h-12 rounded-full border border-gray-300 object-cover"
            src={user.avatarUrl}
            alt={user.name}
        />
    )
}
export default Avatar;