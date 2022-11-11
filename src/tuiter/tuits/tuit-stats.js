import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    return(
        <>
            <div className="wd-post-body-margin mt-2">
                <div className="w-100 p-2">
                    <div className="row">
                        <div className="col d-flex flex-nowrap text-secondary">
                            <i className="bi bi-chat"></i>
                            <span className="ms-2">{tuit.replies}</span>
                        </div>
                        <div className="col d-flex flex-nowrap text-secondary">
                            <img src="/images2/retweet.png" height={25} className="wd-image-opacity"></img>
                            <span className="ms-2">{tuit.retuits}</span>
                        </div>
                        <div className="col d-flex flex-nowrap text-secondary">
                            <i className={`${tuit.likes === 0 ? "bi bi-heart" : "bi bi-heart-fill text-danger"}`} aria-hidden="true"
                                onClick={() => dispatch(updateTuitThunk({
                                    ...tuit,
                                    likes: tuit.likes + 1,
                                    liked: true
                                }))}></i>
                            <span className="ms-2">{tuit.likes}</span>
                        </div>
                        <div className="col d-flex flex-nowrap text-secondary">
                            <i className="bi bi-hand-thumbs-down" onClick={() => dispatch(updateTuitThunk({
                                ...tuit,
                                dislikes: tuit.dislikes + 1,
                                disliked: true
                            }))}></i>
                            <span className="ms-2">{tuit.dislikes}</span>
                        </div>
                        <div className="col text-secondary">
                            <img src="/images2/arrow-up-from-bracket.png" height={18} className="wd-arrow-image-opacity"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TuitStats;