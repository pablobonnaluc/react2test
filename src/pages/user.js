import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function User(props) {
  return (
    <div className='usercontainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            image="img/user1.jpg"
            alt="green iguana"
            className="cardmediaimg"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Mi Nombre
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Descripción breve de actividad actual en la que se desempeña.
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
        </CardActions>
        </Card>
    </div>
  );
}