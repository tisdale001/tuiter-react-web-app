import React, {useState} from "react";
import "./profile-style.css";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "./profile-reducer";
import {Link} from "react-router-dom";

const EditProfile = () => {
    let profArray = useSelector(state => state.prof);
    let profile = profArray.find((x) => x._id === "1");
    const dispatch = useDispatch();
    const [name, setName] = useState({name:`${profile.firstName} ${profile.lastName}`});
    const [handle, setHandle] = useState({handle: `${profile.handle}`});
    const [bio, setBio] = useState({bio: `${profile.bio}`});
    const [location, setLocation] = useState({location: `${profile.location}`});
    const [birthdate, setBirthdate] = useState({birthdate: `${profile.dateOfBirth}`});
    const [website, setWebsite] = useState({website: ""});
    const nameChangeHandler = (event) => {
        const nameValue = event.target.value;
        const newName = {
            name: nameValue
        };
        setName(newName);
    }
    const handleChangeHandler = (event) => {
        const handleValue = event.target.value;
        const newHandle = {
            handle: handleValue
        };
        setHandle(newHandle);
    }
    const bioChangeHandler = (event) => {
        const bioValue = event.target.value;
        const newBio = {
            bio: bioValue
        };
        setBio(newBio);
    }
    const locationChangeHandler = (event) => {
        const locationValue = event.target.value;
        const newLocation = {
            location: locationValue
        };
        setLocation(newLocation);
    }
    const birthdateChangeHandler = (event) => {
        const bdValue = event.target.value;
        const newBD = {
            birthdate: bdValue
        };
        console.log(newBD);
        setBirthdate(newBD);
    }
    const websiteChangeHandler = (event) => {
        const wsValue = event.target.value;
        const newWS = {
            website: wsValue
        };
        setWebsite(newWS);
    }

    const saveProfile = () => {
        const nameArr = name.name.trim().split(" ");
        let fName = "";
        let lName = "";
        for (let i = 0; i < nameArr.length; i++) {
            if (i === 0) {
                fName = nameArr[0];
            }
            else if (i === 1) {
                lName = nameArr[1];
            }
            else {
                lName = lName + " " + nameArr[i];
            }
        }
        let newHandle = handle.handle.trim();
        let newBio = bio.bio.trim();
        let newLocation = location.location.trim();
        let newWebsite = "";
        if (website.website === "") {
            newWebsite = profile.website;
        }
        else {
            newWebsite = website.website.trim();
        }
        let newBirthdate = birthdate.birthdate;

        const finalOutput = {_id: profile._id, firstName: fName, lastName: lName, handle: newHandle, bio: newBio, location: newLocation,
                            website: newWebsite, dateOfBirth: newBirthdate};
        dispatch(updateProfile(finalOutput));
    }



    return(
        <div className="border wd-border-light-gray rounded-2">
            <div className="row">
                <div className="d-inline-block float-start w-auto my-auto ms-2">
                    <Link to="/tuiter/profile"><i className="bi bi-x fa-2x my-auto"></i></Link>
                </div>
                <h4 className="d-inline-block my-auto w-auto">Edit profile</h4>
                <div className="col my-auto">
                    <div className="d-inline-block float-end my-auto me-2">
                        <Link to="/tuiter/profile"><button className="btn btn-dark rounded-pill pt-0 pb-0 ps-3 pe-3" onClick={saveProfile}>Save</button></Link>
                    </div>
                </div>
            </div>
            {/*banner and avatar*/}
            <img src={`/images2/${profile.bannerPicture}`} className="w-100"/>
            <div className="position-relative">
                <img src={`/images2/${profile.profilePicture}`} className="position-absolute wd-profile-avatar-margins wd-profile-avatar-format rounded-circle"/>
            </div>
            {/*textareas*/}
            <div className="wd-leave-space-below-avatar">
                <div className="form-floating position-relative p-2">
                    <input type="text" id="name-textarea"  className="form-control w-100 ps-2" onChange={nameChangeHandler} value={`${name.name}`}/>
                    <label className="text-secondary" htmlFor="name-textarea">Name</label>
                </div>
                <div className="form-floating position-relative p-2">
                    <input type="text" id="handle-textarea"  className="form-control w-100 ps-2" onChange={handleChangeHandler} value={`${handle.handle}`}/>
                    <label className="text-secondary" htmlFor="handle-textarea">Handle</label>
                </div>
                <div className="form-floating position-relative p-2">
                    <textarea type="text" id="bio-textarea"  className="form-control w-100 h-100 ps-2 " onChange={bioChangeHandler} value={`${bio.bio}`}/>
                    <label className="text-secondary" htmlFor="bio-textarea">Bio</label>
                </div>
                <div className="form-floating position-relative p-2">
                    <input  type="text" id="location-textarea" className="form-control w-100 ps-2" onChange={locationChangeHandler}
                              value={`${location.location}`}/>
                    <label className="text-secondary"
                           htmlFor="location-textarea">Location</label>
                </div>
                <div className="p-2 ">
                    <input id="website-textarea" type="url" className="w-100 ps-2 wd-website-input-height form-control" placeholder="Website"
                           onChange={websiteChangeHandler} value={`${website.website}`}></input>
                </div>
                <div className="p-2 position-relative">
                    <label htmlFor="birth-date-textarea">Birth date &nbsp;&#x2022;&nbsp;<span className="text-primary">Edit</span></label>
                    <input id="birth-date-textarea" type="date" className="w-100 h-100 ps-2 form-control" value={`${birthdate.birthdate}`} onChange={birthdateChangeHandler}></input>
                </div>

            </div>
        </div>
    );
}
export default EditProfile;