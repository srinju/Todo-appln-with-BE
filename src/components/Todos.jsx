
//todos = [{
//title: 
//desc : 
//}]

//<button>${todo.completed == true ? "Completed" : "Mark as Completed"}</button> on the last line of code this is the explaination

export function Todos({todos}) {
    return <div>
     {todos.map(function(todo){
        return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "Completed" : "Mark as Completed"}</button> 
        </div>
     })}
    </div>
}