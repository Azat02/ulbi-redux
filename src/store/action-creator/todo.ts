import { TodoActionTypes } from './../../types/todo';
import { Dispatch } from "redux"
import axios from 'axios';
import { TodoAction } from '../../types/todo';

export const fetchTodos = (page: number, limit: number) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type:TodoActionTypes.FETCH_TODOS })
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _page: page,
                    _limit: limit
                }
            })
            setTimeout( () => {
                dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data })
            }, 500)
        } catch (error) {
            dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Something went wrong' })
        }
    }
}


export const setTodoPage = (page: number) : TodoAction => {
    return{type: TodoActionTypes.SET_TODO_PAGE, payload: page }
}