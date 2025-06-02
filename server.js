//server.js

const mongoose=require('mongoose');
const express= require('express');
const cors=require('cors');
require('dotenv').config();

//
const app=express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


//mounting table
const tableRoutes = require('./routes/tableRoutes');
app.use('/api/tables', tableRoutes);

const reservationRoutes = require('./routes/reservationRoutes');
app.use('/api/reservations', reservationRoutes);



//routes

app.get('/',(req,res)=>{
    res.send('API is running ....');
});


//mongoDB connection

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('MongoDB connected');
    app.listen(PORT,()=>console.log(`Server is running at: http://localhost:${PORT}`));
})

.catch(err=>console.log(err));