import Nav from "../nav";
import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route, Navigate} from "react-router";
import HomeComponent from "./home";

function Tuiter() {
    return (
            <div className="row mt-3">
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2">
                    <NavigationSidebar active="explore"/>
                    {/*<Nav/>*/}
                    {/*<div class="d-block d-sm-none fa-2x">XS</div>*/}
                    {/*<div class="d-none d-sm-block d-md-none fa-2x">S</div>*/}
                    {/*<div class="d-none d-md-block d-lg-none fa-2x">M</div>*/}
                    {/*<div class="d-none d-lg-block d-xl-none fa-2x">L</div>*/}
                    {/*<div class="d-none d-xl-block d-xxl-none fa-2x">XL</div>*/}
                    {/*<div class="d-none d-xxl-block fa-2x">XXL</div>*/}
                </div>
                <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="/" element={<Navigate to="home"/>}/>
                        <Route path="home" element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                    </Routes>
                </div>
                <div className="d-none d-lg-none d-xl-block col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
    );
}

export default Tuiter;
