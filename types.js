const zod = require("zod");

const createTodo = zod.object({ //user input validation for the first end point
    title : zod.string(),
    description : zod.string()
});

const updateTodo = zod.object({ //user input validation for the third  end point where the user marks their todo as done 
    id : zod.string()
});

module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}

/*
 { first end point
 title :  string
 description : string
 }

 { second end point
 //return back the exisitng todos in the second end point
 }

 { third end point
 id: string the user will give the id in the body for the specific todo they want to mark as completed
 }

*/
