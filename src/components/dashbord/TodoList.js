require('../../styles/App.css');
import React, {Component} from 'react';
import {Input, Button} from 'antd';
let i=0;
export default class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    insertClick() {
    	const input=document.getElementById('inputVal')
        const inputVal = input.value;
        this.props.actions.insertTodo({
            todoItem: inputVal,
            id: i,
            deleteButton:true
        });
        input.value='';
        i=i+1;
    }
    removeClick(e) {
        const li_data_id=e.target.parentNode.parentNode.attributes['data-id'].value;
        this.props.actions.deleteTodo({id:li_data_id})
    }
    render() {
        const todoItems = this.props.items.map(item => (
            <li key={item.id} data-id={item.id} style={{height: 30}}>
                {item.todoItem}
                <Button
                    style={{margin: '0 0 0 10px'}}
                    type="danger"
                    size="small"
                    onClick={(e)=>this.removeClick(e)}
                >
                    Delete
                </Button>
            </li>
        ));

        return (
            <div className="TodoList">

                <Input
                    id="inputVal"
                    style={{width: 300, margin: 30}}
                    className="TodoInput"
                    placeholder="Todo Item"
                />
                <Button type="primary" onClick={() => this.insertClick()}>
                    Add TodoList
                </Button>
                <ul className="list" style={{margin: '0 0 0 30px', width: 200}}>
                    {todoItems}
                </ul>
            </div>
        );
    }
}
