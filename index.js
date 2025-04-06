require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const PORT=process.env.PORT || 5000;
const routes=require('./routes/ToDoRoute')

app.use(express.json())
app.use(cors())
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://dakshita049btcse23:3RCKyu2cU6lYnWTf@cluster0.ioafl.mongodb.net/ToDoApp?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     //await client.close();
//   }
// }
// run().catch(console.dir);

console.log("🔍 MONGO_URL:", process.env.MONGO_URL);  // Debugging line
mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,  // Prevents timeout errors
})
.then(()=> console.log(`connected to MongoDB`))
.catch((err)=>console.log(err))
app.use(routes)
app.listen(PORT, ()=>{
    console.log(`App is listening on ${PORT}`);
})