import express from "express";
import cors from "cors";
import {dishes} from "./data.js";
const PORT=5000;
export const app=express();
app.use(cors());
app.use(express.json());


app.get("/api/dishes",(req,res)=>
{
    res.status(200).json(dishes);
});

app.get("/api/dishes/:id",(req,res)=>
{
   const dishId=parseInt(req.params.id);
   const dish=dishes.find(d=>d.id==dishId);
   
   if(!dish)
   { 
      return res.status(404).json({message:`Dish with ${dishId} not found`});
   }

   res.status(200).json(dish);
})

app.listen(PORT,()=>
{
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log("To get all the dishes visit http://localhost:5000/api/dishes");
})