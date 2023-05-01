import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CardHeader from '@mui/material/CardHeader';
import { Card, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';

function createData(name, calories, fat, carbs, protein) {
  return {
    name, calories, fat, carbs, protein,
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Appointments() {
  return (
    <Card>
      <CardHeader
        title="Appointments"
        component={Typography}
        variant="h6"
      />
      <CardContent>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell>Calories</TableCell>
                <TableCell>Fat&nbsp;(g)</TableCell>
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
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
