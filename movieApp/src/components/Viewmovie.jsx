

import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const View = () => {
const [rows, setCards] = useState([]);
 var navigate=useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/movies').then((res) => {
        
          setCards(res.data)
       
  });} ,[]);
  // const[data,setData]=useState([]);
function del_value(a){
  axios.delete('http://localhost:4000/removemovie/'+a).then((res)=>{
    alert('Movie deleted');
    window.location.reload()
  }).catch((error)=>{
    console.log('error found')
  })
}
function update_value(val){
  navigate('/add',{state:{val}})
      

}

  return (
    <Box style={{backgroundColor:'cadetblue',border:'5%',marginLeft:'5%',marginRight:'5%'}} sx={{ flexGrow: 1 }}>
      <Grid style={{marginTop:'5%',marginBottom:'5%',}} container spacing={2}>
        {rows.length > 0 ? (
          rows.map((row) => (
            <Grid item xs={12} sm={6} md={4} key={row.id}>
              <Card style={{backgroundColor:'pink',border:'5%'} } sx={{ minWidth: 275, marginBottom: 2,marginLeft:2,marginRight:2,marginTop:2 }}>
                <CardMedia
                  component="img"
                  height="140"
                  length="140"
                  width="140"
                  image={row.image}
                  alt={row.movie}
                />
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <a href={row.movieImage} target="_blank" rel="noopener noreferrer">{row.movieImage}</a>
                  </Typography>
                  <Typography variant="h5" component="div">
                    {row.movieName}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Description: {row.movieDesc}
                  </Typography>
                  {/* Uncomment if you want to display additional information */}
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Director: {row.movieDir}
                  </Typography>
                  {/* <Typography variant="body2">
                    Actor: {row.actor}
                    <br />
                    Year: {row.year}
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button variant='contained'onClick={()=>
                    update_value(row)
                  }>UPDATE</Button>
                  <Button variant='contained'onClick={()=>
                    del_value(row._id)
                  }>DELETE</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              No movies available
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default View;
