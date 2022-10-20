import React from "react";

const WhoToFollowListItem = ({who}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={`/images2/${who.avatarIcon}`}/>
                </div>
                <div className="col-7">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-3 d-inline-flex p-1">
                    <button className="btn btn-primary rounded-pill me-2">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;

