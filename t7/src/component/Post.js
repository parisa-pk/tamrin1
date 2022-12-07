import "../App.css"

function Post({ title, body, id, bookmarkId, setBookmarkId, searchText }) {
    let bookmarkClass;
    let foundClass;
    function changeBookmark() {
        setBookmarkId(id)
    }
    if (bookmarkId === id) {
        bookmarkClass = 'post--bookmarked'
    }
    if(searchText !== null && body.includes(searchText)) {
        bookmarkClass = 'post--found'
    }
  
    return (

        <div className={`post ${bookmarkClass} ${foundClass}`}>
            <div>{id}</div>
            <span className="post__title">{title}</span>
            <div classname="post__body">{body}</div>

            <button className="post__btn" onClick={changeBookmark}>Bookmark</button>
        </div>
    )
}
export default Post;