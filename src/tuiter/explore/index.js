import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative m-auto">
                    <i className="bi bi-search position-absolute wd-search-icon-position"></i>
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                </div>
                <div className="col-1 position-relative m-auto">
                    <i className="text-primary float-end bi
                       bi-gear-fill fs-2"></i>
                </div>
            </div>
            <div className="mt-2">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active">For You</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">News</a>
                    </li>
                </ul>
            </div>
            <div className="position-relative mt-2">
                <img src="/images2/starship.webp" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <div className="mt-2">
                <PostSummaryList/>
            </div>
        </>
    );
};
export default ExploreComponent;

