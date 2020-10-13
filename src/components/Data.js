import React, {useContext} from 'react';
import './Data.css';
import { DataContext } from './DataContext';

const Data = ({ folderName, id }) => {

    const { selectedData, selId } = useContext(DataContext);

    const handleOnClick = (e) => {
        selectedData(id);
    }

    return (
        <div style={{ margin: "5px 20px" }} key={id}>
            <div className={(selId === id) ? "selected-folder" : "normal-folder"} onClick={handleOnClick}>
                <img style={{height: "50px", width: "50px"}} src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/folder.png" />
                <strong>{folderName}</strong>
            </div>
        </div>
    )
}

export default Data
