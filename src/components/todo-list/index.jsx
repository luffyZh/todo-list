import styled from 'styled-components';
import TodoItem from '../todo-item';

const TodoListContainer = styled.div`
  // 添加样式
`;

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleDelete={deleteTodo} handleToggle={toggleTodo} />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;