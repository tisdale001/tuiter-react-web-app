import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                <div class="col-11">
                    <input type="search" placeholder="Search Twitter" class="wd-placeholder-format border-0 bg-white text-black rounded-pill w-100 p-1"/>
                </div>
                <div class="col-1">
                    <i class="fa fa-cog text-primary fa-2x d-flex justify-content-center align-items-center"></i>
                </div>
                <div class="position-absolute ms-3 mt-1">
                    <i class="fa fa-search"></i>
                </div>
           </div>
           <ul class="nav mb-2 mt-2 nav-tabs">
                      <!-- tabs -->
               <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-sm-none d-md-block ">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
            <div class="position-relative">
                 <img src="../../images/starship.webp" class="w-100"/>
                 <div class="position-absolute wd-overlay-format fw-bold bottom-0 mb-2 ms-2">SpaceX's Starship</div>
            </div>
            <div class="mt-2">
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;
