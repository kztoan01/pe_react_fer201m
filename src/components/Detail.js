import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useParams } from 'react-router-dom';
import { staffs } from './data/ListOfStaffs';
export default function Detail() {

    //lay id staff tu tren url
    const { id } = useParams()
    //tim trong list staff thang co id = id tren url
    const thisStaff = staffs.find((staff) => staff.id == id)
    //console.log(thisStaff)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={thisStaff.avatar}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {thisStaff.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {thisStaff.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {thisStaff.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {thisStaff.createdAt}
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