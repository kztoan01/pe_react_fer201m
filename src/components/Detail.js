import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
export default function Detail() {
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
  //lay id staff tu tren url
  const { id } = useParams()
  //tim trong list staff thang co id = id tren url
  const thisStaff = staffs?.find((staff) => staff.id == id)
  //console.log(thisStaff)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={thisStaff?.avatar}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {thisStaff?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {thisStaff?.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {thisStaff?.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {thisStaff?.createdAt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}