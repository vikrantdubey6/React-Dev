import { createContext, useContext } from "react";
export const Todocontext = createContext({

    todos :[
        {
            id:1,
            todo: "todo Msg",
            completed: false,
        }
    ],

    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deletetodo:(id) => {},
    toggleComplete: (id) => {}

})




export const useTodo =() => {
    return useContext(Todocontext)
}

export const TodoProvider = Todocontext.Provider