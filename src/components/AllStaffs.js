import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
export default function AllStaffs() {

    //tao bien tam thoi luu tru danh sach staffs
    const [staffs, setStaffs] = useState()
    //console.log(staffs)
    //tao ham lay du lieu tu api staffs
    const getStaffs = async () => {
        try{
            await axios.get("https://65080adf56db83a34d9ba1e0.mockapi.io/api/v1/staffs")
            .then(response => {
                setStaffs(response.data)
            })
        }catch (error) {
            if (axios.isAxiosError(error)) {
              console.log('error message: ', error.message);
              return error.message;
            } else {
              console.log('unexpected error: ', error);
              return 'An unexpected error occurred';
            }
    }}
    useEffect(() => {
        getStaffs();
    }, []
    )
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
                            <TableCell align="right" style={{ color: "red" }}>{staff.address}</TableCell>
                            <TableCell align="right">{staff.age}</TableCell>
                            <TableCell align="right">
                                <Link to={`/detail/${staff.id}`}>
                                    <img src={staff.avatar} />
                                </Link>
                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}