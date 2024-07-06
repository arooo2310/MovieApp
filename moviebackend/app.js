const express=require('express');
const app=new express();
const cors=require('cors');
const PORT=4000;
require('./connection');
const movieModel=require('./model/MovieData')
app.use(express.json());
app.use(cors());
app.get('/movies',async(req,res)=>{
    try{
    const data= await movieModel.find();
    res.send(data)
}catch(error){
    res.send('Data not found');
}
} )

app.post('/addmovie',async(req,res)=>{
    try{
        var item=req.body;
        const datasave=new movieModel(item) ;
        const savedata= await datasave.save();
        res.send('Post successful')
    }catch(error){
        
    }
})


app.put('/editmovie/:id',async(req,res)=>{
    try{
           const data=await movieModel.findByIdAndUpdate(req.params.id,req.body);
           res.send('Updated successfully')
    }catch(error){
           console.log(error)
    }
})

app.delete('/removemovie/:id',async(req,res)=>{
    try{
    await movieModel.findByIdAndDelete(req.params.id);
    res.send('deleted successfully')
    }catch(error){
        console.log(error)
    }
})

app.listen(4000,()=>{
    console.log('The server is running on Port 4000')
})