import styled from 'styled-components';
import TodoItem from '../todo-item';

const TodoListContainer = styled.div`
  // 添加样式
`;

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  
  const handleDelete = (id) => {
    console.log(`Deleting todo with id: ${id}`);
    deleteTodo(id);
  };

  const handleToggle = (id) => {
    toggleTodo(id);
  };

  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} handleToggle={handleToggle} />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;