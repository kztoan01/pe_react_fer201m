import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { staffs } from './data/ListOfStaffs';


export default function AllStaffs() {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Full name</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Image</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {staffs?.map((staff) => (
                        <TableRow
                            key={staff.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="staffs">
                            {staff.name}
                            </TableCell>
                            <TableCell align="right">{staff.address}</TableCell>
                            <TableCell align="right">{staff.age}</TableCell>
                            <TableCell align="right">
                                <img src={staff.avatar} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}