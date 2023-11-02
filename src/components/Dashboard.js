import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState, useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Dashboard() {

  //tao bien tam thoi luu tru danh sach staffs
  const [staffs, setStaffs] = useState()
  //console.log(staffs)
  //tao ham lay du lieu tu api staffs
  const getStaffs = async () => {
    try {
      await axios.get("https://65080adf56db83a34d9ba1e0.mockapi.io/api/v1/staffs")
        .then(response => {
          setStaffs(response.data)
        })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

  useEffect(() => {
    getStaffs();
  }, []
  )

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //handle delete

  const [id, setId] = useState("")
  console.log(id)
  const [message,setMessage] = useState("")
  const handleDelete = async () => {
    try {
      await axios.delete(`https://65080adf56db83a34d9ba1e0.mockapi.io/api/v1/staffs/${id}`)
        .then(response => {
          setOpen(false)
          setMessage("Delete staff success!")
          getStaffs()
        })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Age</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Create Date</StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staffs?.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.age}</StyledTableCell>
                <StyledTableCell>{row.address}</StyledTableCell>
                <StyledTableCell>{row.createdAt}</StyledTableCell>
                <StyledTableCell>
                  <ChangeCircleIcon style={{ cursor: "pointer" }} />
                </StyledTableCell>
                <StyledTableCell>
                  <DeleteForeverIcon style={{ cursor: "pointer" }} onClick={() => {
                    setId(row.id)
                    setOpen(true)
                    }} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <h3>{message}</h3>
      </TableContainer>
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to delete this staff?"}
          </DialogTitle>
          <DialogContent>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleDelete} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
}