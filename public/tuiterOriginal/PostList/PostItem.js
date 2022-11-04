import ArticleBody from "./ArticleBody.js";

const border_choice = post => { return(post.article_bool ? "wd-post-image-rounded-top" : "wd-post-image-rounded-all-corners")};

const get_article = post => { return(post.article_bool ? ArticleBody(post) : "")};

const PostItem = (post) => {
    return(`
        <div class="wd-border-format">
            <div class="row">
                <div class="container-fluid position-relative">
                    <div class="position-absolute ms-2 mt-3">
                        <img src=${post.avatarImage} class="wd-avatar-format rounded-circle"/>
                    </div>
                    <div class="wd-float-left wd-post-body-margin pt-2 pb-2">
                        <div class="text-white">
                            ${post.name}
                            <span class="fa fa-solid fa-check-circle"></span>
                            <span class="text-secondary">${post.handle}</span>
                            <span class="text-secondary">-</span>
                            <span class="text-secondary">${post.time}</span>
                        </div>
                        <div class="text-white ">${post.tweet}</div>
                        <i class="fa fa-ellipsis-h position-absolute text-secondary mt-3 me-3 top-0 end-0"></i>
                    </div>
                </div>
            </div>
            <!-- image and article -->
            <div class="row">
                <div class="w-100">
                    <div class="wd-post-body-margin">
                        <img src=${post.image} class="w-100 ${border_choice(post)}"/>
                    </div>
                    ${get_article(post)}
                </div>
            </div>
            <!-- icons -->
            <div class="wd-post-body-margin">
                <div class="w-100 p-2">
                    <div class="row">
                        <div class="col-3 text-secondary">
                            <i class="far fa-comment"></i>
                            <span class="ms-2">${post.num_comments}</span>
                        </div>
                        <div class="col-3 text-secondary">
                            <i class="fa fa-retweet"></i>
                            <span class="ms-2">${post.num_comments}</span>
                        </div>
                        <div class="col-3 text-secondary">
                            <i class="far fa-heart" aria-hidden="true"></i>
                            <span class="ms-2">${post.num_comments}</span>
                        </div>
                        <div class="col-3 text-secondary">
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
}

export default PostItem;