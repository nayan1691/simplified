import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  xyz: number,
) {
  return { name, calories, fat, carbs, protein, xyz };
}

const rows = [
  createData('ICUs', 8, 6, 9, 0, 1),
  createData('Ventilator', 16, 11, 15, 0, 0),
  createData('Oxygen Cylinders', 43, 31, 35, 0, 0),
  createData('Beds', 68, 66, 78, 0, 10),
];

export default function StaffingTable2() {
  return (
    <TableContainer style={{ marginTop: '20px'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Resources </TableCell>
            <TableCell align="right">Available</TableCell>
            <TableCell align="right">Utilized&nbsp;</TableCell>
            <TableCell align="right">Predicted Utilization&nbsp;</TableCell>
            <TableCell align="right">Resource Gap&nbsp;</TableCell>
            <TableCell align="right">Predicted Resource Gap&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{position: 'relative', right: '30px'}} align="right">{row.calories}</TableCell>
              <TableCell style={{position: 'relative', right: '30px'}} align="right">{row.fat}</TableCell>
              <TableCell style={{position: 'relative', right: '30px'}} align="right">{row.carbs}</TableCell>
              <TableCell style={{position: 'relative', right: '30px'}} align="right">{row.protein}</TableCell>
              <TableCell style={{position: 'relative', right: '30px'}} align="right">{row.xyz}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}