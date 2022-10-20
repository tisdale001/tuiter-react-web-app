import React from "react";

const ArticleBody = ({post}) => {
    return(
        <>
            <div className="wd-post-body-margin">
                <div className="wd-post-article-format p-3">
                    <div className="text-black">{post.article_title}</div>
                    <div className="text-secondary">{post.article_body}</div>
                    <div className="text-secondary">
                        <span className="bi bi-link-45deg"></span>&nbsp;
                        <span>{post.article_site}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ArticleBody;