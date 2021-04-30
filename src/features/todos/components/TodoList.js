import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, fetchTodo } from '../store/actions';
import { filteredTodoDataSelector } from '../store/selectors';

class TodoList extends Component {
  constructor(props) {
    super(props);
    props.fetchTodo();
  }

  render() {
    const { todos, deleteTodo, toggleTodo } = this.props;
    return (
      <ul className="list-group">
        {todos &&
          todos.map((t) => (
            <TodoItem
              key={t.name}
              todo={t}
              deleteTodo={() => deleteTodo(t.id)}
              toggleTodo={() => toggleTodo(t.id)}
            />
          ))}
      </ul>
    );
  }
}

export default connect(
  (state, ownProps) => {
    const filter = ownProps.match.params.filter;
    return {
      todos: filteredTodoDataSelector(state, filter),
    };
  },
  {
    toggleTodo,
    deleteTodo,
    fetchTodo,
  }
)(TodoList);
