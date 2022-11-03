import React from "react";
import {useSelector} from "react-redux";
import "./profile-style.css";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    let profArray = useSelector(state => state.prof);
    let profile = profArray.find((x) => x._id === "1");
    const formatNumTuits = () => {
        return profile.numTuits.toLocaleString("en-US");
    };
    const formatBirthDate = () => {
        const newDate = new Date(profile.dateOfBirth);
        const month = newDate.toLocaleString('default', { month: 'long' });
        return "Born " + month + " " + newDate.getUTCDate() + ", " + newDate.getFullYear();
    };
    const formatJoined = () => {
        const joinDate = new Date(profile.dateJoined);
        const month = joinDate.toLocaleString('default', {month: 'long'});
        return "Joined " + month + " " + joinDate.getFullYear();
    }

    return(
        <div className="p-2 border wd-border-light-gray rounded-2">
            <div className="position-relative">
                <div className="row">
                    <div className="col-2 my-auto">
                        <div className="text-center">
                            <i className="fa fa-arrow-left"></i>
                        </div>
                    </div>
                    <div className="col-10">
                        <h5 className="fw-bold m-0">{profile.firstName} {profile.lastName}</h5>
                        <div className="text-secondary m-0">
                            {formatNumTuits()} Tuits
                        </div>
                    </div>
                </div>
                {/*image*/}
                <img src={`/images2/${profile.bannerPicture}`} className="w-100 mt-2"/>
                {/*edit profile button*/}
                <Link to="/tuiter/edit-profile" className="float-end mt-2 me-2">
                    <button className="btn rounded-pill border wd-border-light-gray ">Edit profile</button>
                </Link>
                {/*avatar*/}
                <div className="position-relative">
                    <img src={`/images2/${profile.profilePicture}`} className="rounded-circle wd-profile-avatar-format position-absolute wd-profile-avatar-margins"/>
                </div>
                {/*profile info*/}
                <div className="p-3">
                    <div className="wd-leave-space-below-avatar">
                        <div className="row">
                            <h5 className="fw-bold m-0">{profile.firstName} {profile.lastName}</h5>
                            <div className="text-secondary">{profile.handle}</div>
                        </div>
                        <div className="text-black mt-2">{profile.bio}</div>
                        <div className="row mt-2">
                            <div className="d-inline-block text-secondary w-auto">
                                <img src={`/images2/map-pin-vector.png`} className="wd-map-vector-icon-format my-auto"/>&nbsp;
                                <span className="">{profile.location}</span>
                            </div>
                            <div className="d-inline-block text-secondary w-auto">
                                <img src={`/images2/birthday-cake.jpg`} className="wd-cake-icon-format my-auto"></img>&nbsp;
                                <span>{formatBirthDate()}</span>
                            </div>
                            <div className="d-inline-block text-secondary w-auto">
                                <img src={`/images2/calendar-outline.jpg`} className="my-auto wd-calendar-icon-format"/>&nbsp;
                                <span>{formatJoined()}</span>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="d-inline-block text-black w-auto">
                                <span className="fw-bold">{profile.followingCount}</span>&nbsp;
                                <span className="text-secondary">Following</span>
                            </div>
                            <div className="d-inline-block text-black w-auto">
                                <span className="fw-bold">{profile.followersCount}</span>&nbsp;
                                <span className="text-secondary">Followers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileComponent;