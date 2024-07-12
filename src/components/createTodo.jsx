import { useState } from "react";

export function CreateTodo(){ //we are exporting the component so that we can import it in app.jsx

    //when we add title of the todo and desc of the todo and press on add todo the todo gets added on the screen and gets saved on the database also

    const [title , setTitle] = useState("");
    const [description , setDescription] = useState(""); //creating state inside compoent

    return <div>

        <input id="title" style={{
            padding : 10,
            margin : 10
        }} type="text" placeholder="title" onChange={function(e){ //this onchange is whenever input is typed then it will render the inputted things in the site
            const value = e.target.value; //we get the current value
            setTitle(e.target.value); //and update the state eventually
        }}></input> <br></br>

        <input id="desc" style={{
            padding : 10,
            margin : 10
        }} type="text" placeholder="description" onChange={function(e){
            const value = e.target.value; //we get the current value
            setDescription(e.target.value); //and update the state eventually 
        }}></input> <br></br>

        <button style={{
            margin : 10
        }} onClick={ function() {
            fetch("http://localhost:3000/todo"),{
                method : "POST",
                body : JSON.stringify({ //when we are using fetch request we actually have to stringify the body
                    title : title, //what is title> --> thats why we made the state inside this create todo function
                    description : description
                }),
                headers : {
                    "content-type": "application/json"
                }
            }
             .then(async function(res){
                const json = await res.json();
                alert("Todo added!!");
             })
        }}>Add a TODO</button>

    </div>
}