import React, { useState, createContext } from 'react'

export const DataContext = createContext();

export const DataProvider = props => {

    const [selId, setSelId] = useState(null)

    const [data, setData] = useState([
        {
            folderName: "noOne",
            id: '1234',
            child: [{
                folderName: "childOne_1",
                id: '3456',
                child: [{
                    folderName: "childOne_1",
                    id: '5678',
                    child: []
                }]
            }]
        }
    ]);

    const searchData = (list, id, newData) => {
        const item = list.find((data) => {
            if (data.id === id) {
                return data
            }
            if (data.child.length > 0) {
                searchData(data.child, id, newData)
            }
            return null;
        })
        if (item) {
            item.child.push(newData)
            setData([...data]);
        }
    }

    const addData = (folderName) => {
        const obj = {
            folderName: folderName,
            id: Date.now(),
            child: []
        }
        if (selId) {
            searchData(data, selId, obj)
        } else {
            data.push(obj);
            setData([...data]);
        }
        console.log(data);
    }

    const selectedData = (fileId) => {
        setSelId(fileId);
    }

    return (
        <DataContext.Provider value={{ data, addData, selectedData, setSelId, selId }}>
            {props.children}
        </DataContext.Provider>
    );
}