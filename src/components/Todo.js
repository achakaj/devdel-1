import React from 'react'

const Todo = (props) => {
    // Delete Todo
    const onDelete = (idToDelete) => {
        const filteredTodos = props.ptodos.filter((todo) => todo.newtodo.id !== idToDelete);
        props.pdelete(filteredTodos);
      };

    // Edite Todo
    
    const submitEdits = (event, idtoedit) => {
        event.preventDefault();
    const updatetodo = props.ptodos.map((todo) => {
            if(todo.newtodo.id === idtoedit){
                return  {
                  id: todo.newtodo.id,
                  text: event.target.todox.value,
                  date: event.target.tododate.value,
                }
            }else{
                return todo;
            }
        });
        props.pdelete(updatetodo);
        props.psetedit([]);
        console.log(updatetodo);
/*         console.log(props.psetedit);
        console.log(props.pdelete) */
    }



    return(
        <div className="my-8">
            {
            props.ptodos.map((todo) => <div  className="my-2 border flex justify-between rounded w-full py-2 px-2 text-gray-300" id={todo.newtodo.id} key={todo.newtodo.id}>
            {todo.newtodo.id !== props.pedit ? (
            <><div className="border-r-2 border-gray-50 pr-5">{todo.newtodo.Text}</div><div className="n">{todo.newtodo.date}</div></>
            ) : (
            <form onSubmit={(e) => submitEdits(e, todo.newtodo.id)}>
            <input className="shadow my-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" name="todox" placeholder="To Do"/>
            <div className="flex space-x-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="date" name="tododate"/>
              <button type="Submit"> Submit Edits</button>
            </div>
            </form>
            )}
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline" onClick={() => props.psetedit(todo.newtodo.id)}>Edit</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline" onClick={() => onDelete(todo.newtodo.id)}>X</button>
            </div>)
            }
        </div>
    );
}

export default Todo;