// import { Box, Button, TextField } from '@mui/material'
// import React, { useState } from 'react'

// const Add = () => {
//   const[form,setForm]=useState
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//     <div>
//         <TextField
//           required
//           id="outlined-disabled"
//           label="MOVIE NAME"
//           defaultValue=""
//         />
//     </div>
//     <div>
//         <TextField
//         required
//           id="outlined-disabled"
//           label="MOVIE DESCRIPTION"
//           defaultValue=""
//         />
//     </div>
//     <div>
//         <TextField
//         required
//           id="outlined-disabled"
//           label="MOVIE IMAGE"
//           defaultValue=""
//         />
//     </div>
//     <div>
//         <TextField
//         required
//           id="outlined-disabled"          
//           label="MOVIE DIRECTOR"
//           defaultValue=""
//         />
//     </div>
//     <div>
//     <Button variant="contained">
//       ADD
//     </Button>
//     </div>
//           </Box>
//   )
// }

// export default Add




// import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const View = () => {
//   const [rows, setCards] = useState([]);

//   useEffect(() => {
//     axios.get('https://dummyapi.online/api/movies')
//       .then((res) => {
//         if (Array.isArray(res.data)) {
//           setCards(res.data);
//         } else {
//           console.error('Unexpected response format:', res.data);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         {rows.length > 0 ? (
//           rows.map((row) => (
//             <Grid item xs={12} sm={6} md={4} key={row.id}>
//               <Card sx={{ minWidth: 275, marginBottom: 2 }}>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={row.image}
//                   alt={row.movie}
//                 />
//                 <CardContent>
//                   <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                     <a href={row.imdb_url} target="_blank" rel="noopener noreferrer">{row.imdb_url}</a>
//                   </Typography>
//                   <Typography variant="h5" component="div">
//                     {row.movie}
//                   </Typography>
//                   <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     Rating: {row.rating}
//                   </Typography>
//                   {/* Uncomment if you want to display additional information
//                   <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     Director: {row.director}
//                   </Typography>
//                   <Typography variant="body2">
//                     Actor: {row.actor}
//                     <br />
//                     Year: {row.year}
//                   </Typography> */}
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small" href={row.imdb_url} target="_blank" rel="noopener noreferrer">Learn More</Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))
//         ) : (
//           <Grid item xs={12}>
//             <Typography variant="body2" color="text.secondary">
//               No movies available
//             </Typography>
//           </Grid>
//         )}
//       </Grid>
//     </Box>
//   );
// };

// export default View;






import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


const AddMovie = ({movie}) => {
  const [page,setPage]=useState('Movie')
  const [form,setForm]=useState({
  movieName:'',
  movieDesc:'',
  movieDir:''
 })
 const location = useLocation()
 function valueAdd(){
 // setCount(count+1)
  // console.log(form)
  if(location.state!=null){
    axios.put('http://localhost:4000/editmovie/'+location.state.val._id,form).then((res)=>{
      alert('data updated');
    }).catch((error)=>{
      console.log(error)
    })
  }else{
  axios.post('http://localhost:4000/addmovie',form).then((res)=>{
    alert('Data added');
    // window.location.reload()
  }).catch((error)=>{
    console.log('error found')
  })
}}
function valueCap(e){
  //console.log(e)
  setForm({...form,[e.target.name]:e.target.value})
}
useEffect(()=>{
  if(location.state!=null){
    setForm({...form,
      movieName:location.state.val.movieName,
      movieDesc:location.state.val.movieDesc,
      movieDir:location.state.val.movieDir
    })
  }

},[])
  return (
    <div>
         <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Welcome to {page} Page</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Movie Name"
          name='movieName'
          value={form.movieName}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-disabled"
          label="Movie Description"
          name='movieDesc'
          value={form.movieDesc}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Movie Image"
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Movie Director"
          name='movieDir'
          value={form.movieDir}
          onChange={valueCap}
        />
    </div>
    </Box>
    <Button style={{width :'700 px',background:('cadetblue')}}variant='contained' onClick={valueAdd}> ADD</Button>
    </div>
  )
}

export default AddMovie