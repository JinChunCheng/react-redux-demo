import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as allActions from '../actions/todoList';
import TodoList from '../components/dashbord/TodoList';
const mapStateToProps = state => ({
    items: state.todoListReducer.items
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(allActions, dispatch)
});
const TodoListConnect = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoListConnect;
