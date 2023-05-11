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
  createData('Emergency Doctors', 4, 89, 106, 1, 2, 5),
  createData('Registered Nurse', 32, 89, 106, 8, 12, 5),
  createData('Nurse Managers', 5, 89, 106, 2, 4, 5),
  createData('Admin Office', 6, 89, 106, 0, 1, 5),
];

export default function StaffingTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Staffing </TableCell>
            <TableCell align="right">Available</TableCell>
            <TableCell align="right">Patients Footfall&nbsp;</TableCell>
            <TableCell align="right">Predicted Patients Footfall&nbsp;</TableCell>
            <TableCell align="right">Staff Gap&nbsp;</TableCell>
            <TableCell align="right">Predicted Staff Gap&nbsp;</TableCell>
            
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