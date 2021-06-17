import React, { useState, useEffect } from 'react';
import useGetListCount from '../Components/customHook';
import '../App.css';

function Table() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refresh, setrefresh] = useState(0);    
    useEffect(() => {
        setLoading(false);
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                result => {
                    setList(result);
                    setLoading(true);                    
                    console.log(result, loading);
                }
        )
        return()=>{alert('Use effect Clean up Function running')}
    }, [refresh]);

    let tableRows = null;

    if (list) {
        tableRows = <React.Fragment>
            {list.map((data, index) => {
                return (
                    <tr key={data.id}>
                        <td >
                            {data.id}
                        </td>
                        <td >
                            {data.title}
                        </td>
                        <td >
                            {data.body}
                        </td>
                    </tr>
                );
            })}
        </React.Fragment>
    }
    const spinner={
        color:'blue',
        textalign:'center'
    }
    let recordCount=useGetListCount(list);
    return (
        <div>
            <p>Records count {recordCount}</p> <p>Refreshed {refresh}</p>
            <button onClick={()=> setrefresh(refresh+1)}>refresh</button>
            <table id="holidayTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title </th>
                        <th>body</th>
                    </tr>   
                </thead>
                <tbody>
                {loading? tableRows:<tr style={spinner}><td>Data is loading ......</td></tr>}
                </tbody>
            </table>
        </div>
    );
}

export default Table;

