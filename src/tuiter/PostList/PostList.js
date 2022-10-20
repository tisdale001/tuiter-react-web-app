import React from "react";
import PostItem from "./PostItem.js";
import fullPosts from "./fullPosts.js";

const PostList = () => {
    return(
        <>
            <div >
                {
                    fullPosts.map(post =>
                        <PostItem
                            key={post._id}
                            post={post}/>
                    )
                }
            </div>
        </>
    );
}

export default PostList;