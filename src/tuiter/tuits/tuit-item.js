import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
import TuitStats from "./tuit-stats";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <>
            <li className="list-group-item position-relative">
                <img src={`/images2/${tuit.image}`} className="wd-avatar-format position-absolute wd-post-image-format rounded-circle"/>
                <div className="wd-post-body-margin position-relative">
                    <div className="end-0 position-absolute">
                        <i className="bi bi-x-lg"
                            onClick={() => deleteTuitHandler(tuit._id)}/>
                    </div>
                    <div >
                        <span className="text-black fw-bold">{tuit.userName}</span>&nbsp;
                        <span className="text-primary bi bi-check-circle-fill "></span>&nbsp;
                        <span className="text-secondary">{tuit.handle}</span>&nbsp;
                        <span className="text-secondary">&#x2022;</span>&nbsp;
                        <span className="text-secondary">{tuit.time}</span>
                    </div>
                    <div className="row">
                        <div>{tuit.tuit}</div>
                    </div>
                </div>
                <TuitStats key={tuit._id} tuit={tuit}/>
            </li>
        </>
    );
};
export default TuitItem;