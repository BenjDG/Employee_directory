import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TablePic from '../TablePic';


const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function TableSection (props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='employee table'>
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(props)}
          {props.rows.map((row) => (
            <TableRow key={row.email}>
              <TableCell component='th' scope='row'>
                <TablePic pic={row.pic} />
              </TableCell>
              <TableCell>{row.fullname}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
