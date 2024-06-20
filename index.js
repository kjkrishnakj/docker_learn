const express= require('express');
const app = express();
app.get("/",(req,res)=>{

    res.json([
        {
            id:1,
            name:"krishna",
            age:20
        },
        {
            id:2,
            name:"sam",
            age:2
        },
        {
            id:3,
            name:"peter",
            age:21
        },
    ])
})
app.listen(3500);