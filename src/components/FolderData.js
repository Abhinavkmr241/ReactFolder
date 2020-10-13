import React, { useContext } from 'react'
import './FolderData.css'
import Data from './Data'
import { DataContext } from './DataContext';

function FolderData() {

    const { data, setSelId } = useContext(DataContext);

    const handleChange = () => {
        setSelId(null);
    }

    return (
        <div>
            {data.map(root => (
                <div>
                    <Data folderName={root.folderName} id={root.id} key={root.id} />
                    {root.child.map((child => (
                        <div style={{paddingLeft: "20px"}}>
                            <Data folderName={child.folderName} id={child.id} key={child.id} />
                            {child.child.map((child_1) => (
                                <div style={{paddingLeft: "30px"}}>
                                    <Data folderName={child_1.folderName} id={child_1.id} key={child_1.id} />
                                </div>
                            ))}
                        </div>
                    )))}
                </div>
            ))}
            <div className="de-select" onClick={handleChange}></div>
        </div>
    )
}

export default FolderData
