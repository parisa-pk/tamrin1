function Post({onvanPer, onvanEng, writer , age , cat  ,date ,content}){
    
    return (
        <div>
            <h2>
              onvan (per):  {onvanPer}
            </h2>
            <h2>
            onvan (eng):  {onvanEng}
            </h2>
            <div>age: {age}</div>

            <div>Writer name: {writer}</div>

            <div>category: {cat}</div>

            <time>{date}</time>
            <p dangerouslySetInnerHTML={{__html:content}} />
        </div>
    );
}

export default Post;