const express = require("express");
const app = express();
const {createTodo, updateTodo} = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(express.json());
app.use(cors());


app.post('/todo' ,async function(req,res){ //creating todo
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the Wrong input!!"
        });
        return;
    }
    //put it in mongodb
    await todo.create({ //only if the todo has been created then it will show the user that their todo has been created thats why we used async await syntax here
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        msg:"Todo created!!"
    });
});

app.get('/todos' ,async function(req,res){ //getting all the existing todos
   const todos = await todo.find({}) //gives back all the exisiting todos to the end user . if we dont use async await here then the todos will give back a promise which will resolve with the actual data...the todos.find actually hits the database so for that it needs to be awaited 
   res.json({ //returns all the exisitng todos of the end user
    todos
   });
});

app.put('/completed',async function(req,res){ //markin a specific todo as completed
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you have sent the wrong inputs!!"
        });
        return;
    }
    await todo.update({ //the update function in database call takes two things >> what you want to update thats the first thing and the second thing is update that what you wanted to update here in this case we want to update the id that is make the completed as true
        _id : req.body.id //_id because in mongodb any entry in the table is uniquely identified by this _id
    } , {
        completed : true
    });
    res.json({
        msg:"Todo marked as completed!!"
    })
});

const PORT = 3000;
app.listen(PORT,function(){
    console.log(`server is running on port ${PORT}`);
});
