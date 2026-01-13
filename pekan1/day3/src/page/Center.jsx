import Comment from "./Comment"
function Center() {

    const commentData = {
        date: new Date(),
        text: "Doakan saya supaya jadi orang sukses",
        author: {
            name: 'yanto',
            avatarUrl: 'https://i.pravatar.cc/150?u=yanto'
        }
    }

    return (
        <div className="p-4">
            <Comment
                author={commentData.author}
                text={commentData.text}
                date={commentData.date}
            />
        </div>
    )
}
export default Center;