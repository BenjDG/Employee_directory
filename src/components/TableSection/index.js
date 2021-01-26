import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import users from '../../db/randomUsers.json';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const rows =
  users.results.map((item) => {
    const {
      email,
      location: { city: location },
      name: { first: fname, last: lname },
      picture: { thumbnail: pic }
    } = item;

    const fullname = `${fname} ${lname}`;
    const obj = { pic, fullname, location, email };
    return obj;
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
          {console.log(rows)}
          {rows.map((row) => (
            <TableRow key={row.email}>
              <TableCell component='th' scope='row'>
                {row.pic}
              </TableCell>
              <TableCell>{row.fullname}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.email}</TableCell>
              {console.log(row.fullname)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
