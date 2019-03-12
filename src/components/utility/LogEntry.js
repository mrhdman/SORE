import React from 'react'

function LogEntry(props){
    const logRow = props.logRow;
    return(
        <tr>
            <td>{logRow.logRowName}</td>
            <td>{logRow.logRowLength}</td>
            <td>{logRow.logRowDate}</td>
            <td>{logRow.logRowNotes}</td>
            <td><button className="deleteButton">DELETE</button></td>
        </tr>
    )
}

export default LogEntry;