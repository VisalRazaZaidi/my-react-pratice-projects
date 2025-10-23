import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1, // giving every task a unique ID
            todo: "Learn react", // this is text which I written in input field
            completed: false, // to check the task is complete or not default value is false
        },
        {},
    ],
    addTodo: (todo) => {}, // this is function to add the tasks and the functionality of it is not define here but we will define in App file
    updateTodo: (todo, id) => {}, // this function is use to update the task using task's id and task it self
    deleteTodo: (id) => {}, // this function is use to delete the task by only using it id
    toggleComplete: (id) => {},// this function is use to marked the task completed or not completed by using task's id 
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider