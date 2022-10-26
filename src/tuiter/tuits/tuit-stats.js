import React from "react";

const TuitStats = ({tuit}) => {
    return(
        <>
            <div className="wd-post-body-margin mt-2">
                <div className="w-100 p-2">
                    <div className="row">
                        <div className="col-3 d-flex flex-nowrap text-secondary">
                            <i className="bi bi-chat"></i>
                            <span className="ms-2">{tuit.replies}</span>
                        </div>
                        <div className="col-3 d-flex flex-nowrap text-secondary">
                            <img src="/images2/retweet.png" height={25} className="wd-image-opacity"></img>
                            <span className="ms-2">{tuit.retuits}</span>
                        </div>
                        <div className="col-3 d-flex flex-nowrap text-secondary">
                            <i className={`${tuit.likes === 0 ? "bi bi-heart" : "bi bi-heart-fill text-danger"}`} aria-hidden="true"></i>
                            <span className="ms-2">{tuit.likes}</span>
                        </div>
                        <div className="col-3 text-secondary">
                            <img src="/images2/arrow-up-from-bracket.png" height={18} className="wd-arrow-image-opacity"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TuitStats;