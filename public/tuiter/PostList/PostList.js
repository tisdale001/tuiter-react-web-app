import PostItem from "./PostItem.js";
import fullPosts from "./fullPosts.js";

const PostList = () => {
    return(`
        <div >
            ${
                fullPosts.map(arr_item => {
                    return(PostItem(arr_item));
                }).join('')
            }
        </div>
    `);
}

export default PostList;