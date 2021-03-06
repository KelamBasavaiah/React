import React, { useState, useEffect } from 'react';
import useGetListCount from '../Components/customHook';
import ReactPaginate from 'react-paginate';
import { CSVLink } from "react-csv";
import '../App.css';

function Table() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refresh, setrefresh] = useState(0); 
    
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0)
    
  

    useEffect(() => {
        setLoading(false);
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                result => {
                    setList(result);
                    setLoading(true);                    
                    setList(result.slice(offset, offset + perPage));
                    setPageCount(Math.ceil(result.length / perPage)); 
                    console.log(list, loading,offset,pageCount);                     
                }
        )                                                     
        //return()=>{alert('Use effect Clean up Function running')}
    }, [refresh,offset]);

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage *perPage)
    };
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
            <p>Records count {recordCount} . By custom hook.</p> <p>Refreshed {refresh}</p>
            <button onClick={()=> setrefresh(refresh+1)}>refresh</button>
            <button className='paginationPostion'><CSVLink data={list}  filename={"my-file.csv"}>Download me</CSVLink></button>
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
            <div  className='paginationPostion'>
                    <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
                    </div>
        </div>
    );
}

export default Table;

