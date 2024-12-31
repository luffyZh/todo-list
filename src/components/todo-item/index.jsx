// src/components/TodoItem.jsx
import styled from 'styled-components';

const TodoItemContainer = styled.div`
  // 添加样式
`;

const TodoTitle = styled.span`
  text-decoration: ${props => props.isCompleted ? 'line-through' : 'none'};
`;

const TodoItem = ({ todo, handleDelete, handleToggle }) => {
  return (
    <TodoItemContainer>
      <TodoTitle isCompleted={todo.isCompleted}>{todo.title}</TodoTitle>
      {/* 添加完成和删除功能 */}
      <button onClick={() => handleDelete(todo.id)}>删除</button>
      <button onClick={() => handleToggle(todo.id)}>完成</button>
    </TodoItemContainer>
  );
};

export default TodoItem;