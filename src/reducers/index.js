import {combineReducers} from 'redux';
import cloneObj from '../utils/utils';
// Updates an entity cache in response to any action with response.entities.
const getDataReducer = (state = {btnVal: 'CLICK ME'}, action) => {
    const actionType = action.type;
    switch (actionType) {
        case 'GET_DATA_START':
            return {
                ...state,
                ...{inputVal: action.btnVal, btnVal: action.btnVal}
            };
        case 'GET_DATA_SUCCESS':
            return {
                ...state,
                ...{inputVal: action.btnVal, btnVal: action.btnVal}
            };
        case 'GET_DATA_FAILED':
            return {
                ...state,
                ...{inputVal: action.btnVal, btnVal: action.btnVal}
            };
        case 'REQUEST_POST':
            return {
                ...state,
                ...{
                    inputVal: action.btnVal,
                    btnVal: action.btnVal,
                    loading: action.loading
                }
            };
        case 'RECEIVED_POST':
            return {
                ...state,
                ...{
                    inputVal: action.btnVal,
                    btnVal: action.btnVal,
                    name: action.name,
                    age: action.age,
                    loading: action.loading
                }
            };
        default:
            return state;
    }
};
const todoListReducer = (state = {items: []}, action) => {
    const actionType = action.type;
    switch (actionType) {
        case 'INSERT_TODO_ITEM':
            const actionObj = {
                todoItem: action.todoItem,
                id: action.id,
                deleteButton: action.deleteButton
            };
            const newState = {
                ...state,
                ...{
                    items: [...state.items, actionObj]
                }
            };
            return newState;
        case 'DELETE_TODO_ITEM':
            //redux不允许直接操作state，否则不会触发render。使用深拷贝，避免这个问题
            const arrItem = cloneObj(state.items);
            for (let i = 0; i < arrItem.length; i++) {
                if (arrItem[i].id == action.id) {
                    arrItem.splice(i, 1);
                }
            }

            return {...state, ...{items: arrItem}};
        default:
            return state;
    }
};
const rootReducer = combineReducers({
    getDataReducer,
    todoListReducer
});

export default rootReducer;
