const PostSummaryItem = (post) => {
    return(`
    <div class="list-group-item">
        <div class="row">
            <div class="col h-100 w-auto">
                <div class="text-secondary">${post.topic}</div>
                <div class="text-white">
                    ${post.userName}
                    <i class="fa fa-circle"></i>
                    <span class="text-secondary">-</span>
                    <span class="text-secondary">${post.time}</span>
                 </div>
                 <div>${post.title}</div>
            </div>
            <img src=${post.image} class="wd-post-image-format rounded-4 me-2 ${post.class}"/>
        </div>
    </div>
    `);
}
export default PostSummaryItem;