import React, { Component } from 'react';
import LogEntry from '../utility/LogEntry';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });



class Log extends Component{
    constructor(){
        super();
        this.state = {
            logs: []
        }
    }

componentDidMount(){
    const data = axios.get(`${window.apiHost}/timelog/getalltime`)
    data.then((response)=>{
        // console.log(response.data)
        this.setState({
            logs: response.data
        })
    })
}

    render(){
        const classes = {
            root: "main-table",
            table: "table"
        }

        const rows = this.state.logs.map((row,i) => {
            return(
                <LogEntry key={i} row={row} />
            )
            })
        return(
            <div className="logTable">
            {/* <Paper className={classes.root}> */}
                {/* <Table className={classes.table}> */}
                    {/* <TableHead>
                    <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell align="right">LENGTH</TableCell>
                        <TableCell align="right">DATE</TableCell>
                        <TableCell align="right">NOTES</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                    </TableHead> */}
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>LENGTH</th>
                            <th>DATE</th>
                            <th>NOTES</th>
                            <th></th>
                        </tr>
                    </thead>
                    {/* <TableBody> */}
                    <tbody>
                        {rows}
                    </tbody>
                    {/* </TableBody> */}
                {/* </Table> */}
                {/* </Paper> */}
            </div>
        )
    }
}



export default withStyles(styles)(Log);