import React, {useState} from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
    let tuitsArray = useSelector(state => state.tuits);
    // let tuitsArrayChange = useState(tuitsArray);

    return(
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitsList;