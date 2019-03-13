import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import TableCell from '@material-ui/core/TableCell';
// import TableRow from '@material-ui/core/TableRow';
class LogEntry extends Component{
    constructor(){
        super();
        this.state={
            log: []
        }
    }

    // render(){
    // const row = this.props.row;
    // return(
    //     <TableRow>
    //     <TableCell component="th" scope="row">
    //         {row.name}
    //     </TableCell>
    //     {/* <TableCell align="right">{row.name}</TableCell> */}
    //     <TableCell align="right">{row.llength}</TableCell>
    //     <TableCell align="right">{row.date}</TableCell>
    //     <TableCell align="right">{row.notes}</TableCell>
    //     <TableCell align="right">DELETE</TableCell>
    //     </TableRow>
    //     )
    // }

    render(){
    const row = this.props.row;
    return(
        <tr>
            <th>{row.name}</th>
            <th>{row.llength}</th>
            <th>{row.date}</th>
            <th>{row.notes}</th>
            <th>DELETE</th>
        </tr>
        )
    }
}

export default LogEntry;