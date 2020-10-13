import React, { useState, useContext } from 'react';
import { Card, Button, CardBody } from 'reactstrap';
import './Display.css';
import { DataContext } from './DataContext';

function Display() {

    const [ folderName, setFolderName ] = useState("");

    const { addData } = useContext(DataContext)

    const handleInput = (e) => {
        let value = e.target.value;
        setFolderName(value);
    }

    const addFolder = (e) => {
        e.preventDefault();
        if (folderName.trim().length) {
            addData(folderName);
        } else {
            console.log("Folder name is empty!!!");
        }
        setFolderName("");
    }

    return (
        <Card>
            <CardBody>
                <form onSubmit={addFolder}> 
                    <input type="text" placeholder="Enter folder name" name="input" value={folderName} className="folderInput" onChange={handleInput} />
                    <Button color="primary" size="lg" className="inputButton" type="submit">Add Folder</Button>
                </form>
            </CardBody>
        </Card>
    )
}

export default Display
