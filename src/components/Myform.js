import React, {useState, useEffect} from "react";
import Todo from "./Todo";

const Myform = () => {

    const [todos, settodo] = useState([]);
    const [edittodos, setEdittodo] = useState([]);
    

    const addtodo = (e) => {
        e.preventDefault();
        const newtodo = {
            id: Math.random().toString(36).substring(2,4),
            Text: e.target.todox.value,
            date: e.target.tododate.value,
        }
        settodo([...todos, {newtodo}]);
        e.target.todox.value = "";
        e.target.tododate.value = "";
        console.log(newtodo);
        console.log(todos);
    }



    useEffect(() => {
        const json = localStorage.getItem("todos");
        const savedNotes = JSON.parse(json);
        console.log(savedNotes);
        if (savedNotes) {
          settodo(savedNotes);

        }
    }, []);

/*     useEffect(() => {

        if(localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        }else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            settodo(todoLocal);
            console.log(todoLocal);
        }

    }, []); */



    useEffect(() => {
        const json = JSON.stringify(todos);
        localStorage.setItem("todos", json);
    }, [todos]);

/*     // Delete Todo
    const onDelete = (idToDelete) => {
        const filteredTodos = todos.filter((todo) => todo.newtodo.id !== idToDelete);
        settodo(filteredTodos);
      }; */

    return(
        <div>
            <h1 className="text-7xl my-8 text-gray-300">To Do List</h1>
            <form onSubmit={addtodo}>
            <input className="shadow my-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="todo" type="text" name="todox" placeholder="To Do"/>
            <div className="flex space-x-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tododate" type="date" name="tododate"/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submite">OK</button>
            </div>
            </form>
            <Todo ptodos={todos} pdelete={settodo} psetedit={setEdittodo} pedit={edittodos}/>
        </div>
    );
}

export default Myform;