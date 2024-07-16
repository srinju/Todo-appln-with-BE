import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/createTodo'
import { Todos } from './components/Todos'

function   App() {

  const [todos , setTodos] = useState([]); //when we take arrays in state then we define the use state as ([])

  useEffect(() => {
    fetch("http://localhost:3000/todos") //cors error will show we  fix that my importing cors modules and then we will see all the todos that were there in our database will show up in the website
   .then(async function(res){ //well this method of fetching is a problem , there is a bug which will send infinite requests to the get end points that is /todos we fix it by useEffect hook
    const json = await res.json();
    setTodos(json.todos);
   })
  } , [])

 
  return (
    <div>
      <CreateTodo ></CreateTodo> 
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
