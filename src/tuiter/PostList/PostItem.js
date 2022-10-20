import ArticleBody from "./ArticleBody";
import React from "react";

const PostItem = ({post}) => {

    return(
    <>
        <div className="wd-border-format">
            <div className="row">
                <div className="container-fluid position-relative">
                    <div className="position-absolute ms-2 mt-3">
                        <img src={`/images2/${post.avatarImage}`} className="wd-avatar-format rounded-circle"/>
                    </div>
                    <div className="wd-float-left wd-post-body-margin pt-2 pb-2">
                        <div className="text-black">
                            <span className="fw-bold">{post.name}</span>&nbsp;
                            <span className="bi bi-check-circle-fill text-primary"></span>&nbsp;
                            <span className="text-secondary">{post.handle}</span>&nbsp;
                            <span className="text-secondary">-</span>&nbsp;
                            <span className="text-secondary">{post.time}</span>
                        </div>
                        <div className="text-black ">{post.tweet}</div>
                        <i className="bi bi-three-dots position-absolute text-secondary mt-2 me-3 top-0 end-0"></i>
                    </div>
                </div>
            </div>
            {/*image and article*/}
            <div className="row">
                <div className="w-100">
                    <div className="wd-post-body-margin">
                        <img src={`/images2/${post.image}`} className={`w-100 ${post.article_bool ? "wd-post-image-rounded-top" : "wd-post-image-rounded-all-corners"}`}/>
                    </div>
                    {post.article_bool ? <ArticleBody key={post._id} post={post}/> : ""}
                </div>
            </div>
            {/*icons*/}
            <div className="wd-post-body-margin">
                <div className="w-100 p-2">
                    <div className="row">
                        <div className="col-3 d-flex flex-nowrap text-secondary">
                            <i className="bi bi-chat"></i>
                            <span className="ms-2">{post.num_comments}</span>
                        </div>
                        <div className="col-3 d-flex flex-nowrap text-secondary">
                            <img src="/images2/retweet.png" height={25} className="wd-image-opacity"></img>
                            <span className="ms-2">{post.num_comments}</span>
                        </div>
                        <div className="col-3 d-flex flex-nowrap text-secondary">
                            <i className="bi bi-heart" aria-hidden="true"></i>
                            <span className="ms-2">{post.num_comments}</span>
                        </div>
                        <div className="col-3 text-secondary">
                            <img src="/images2/arrow-up-from-bracket.png" height={18} className="wd-arrow-image-opacity"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default PostItem;