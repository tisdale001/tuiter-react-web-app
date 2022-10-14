import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           <!-- continue here -->
            <div class="list-group-item fw-bold">
                Who to follow
            </div> 
           ${
                who.map(arr_item => {
                    return(WhoToFollowListItem(arr_item));
                }).join('')
            }
           </ul>
`); }

export default WhoToFollowList;