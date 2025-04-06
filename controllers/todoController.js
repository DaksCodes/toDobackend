const ToDoModel=require('../models/todomodel') //import mongoose dtb
module.exports.getToDo=async(req,res)=>{  //exports a function named getToDo
    const toDo=await ToDoModel.find() //function fetches documents from dtb
    res.send(toDo) //sends data as response
}
module.exports.saveToDo=async(req,res)=>{ 
    const {text}=req.body
    ToDoModel
    .create({text})
    .then((data)=>{
        console.log("Added!");
        console.log(data);
        res.send(data)
    }) 
}
module.exports.updateToDo=async(req,res)=>{
    const {_id,text}=req.body;
    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send("Updated successfully"))
    .catch((err)=>console.log(err));    
}
module.exports.deleteToDo=async(req,res)=>{
    const {_id}=req.body;
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted successfully"))
    .catch((err)=>console.log(err));
}