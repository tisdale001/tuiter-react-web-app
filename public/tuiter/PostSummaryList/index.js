
import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return(`
        <div class="list-group">
           ${
                posts.map(arr_item => {
                    return(PostSummaryItem(arr_item));
                }).join('')
            }
        </div>
    `);
}
export default PostSummaryList;