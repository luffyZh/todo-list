# React Todo List

React Todo List.

## 实现思路步骤

### 1. 初始化项目

使用 vite 脚手架创建一个 react 项目，并安装 `styled-components` 库，编写样式。

- 初始化脚手架

```bash
# npm 7+，需要添加额外的 --：
npm create vite@latest todo-list -- --template react
```

- 安装依赖

```bash
npm install --save styled-components
```

### 2. 设计功能

一个 TODOList 软件必要的功能。

- 一个输入框，用来输入要做的事
- 一个列表，用来展示 List
- 每一项都可以删除和改变状态（完成未完成）
- [加分]：支持分类，比如查看所有未完成的，查看所有已完成的，查看全部的
- [加分]：支持缓存，支持刷新页面以后依然可以正常显示
- [加分]：页面美化好看，参考网址：https://ricocc.com/todo/

### 3. 开始开发

设计页面结构。

- 主页面：撑满页面，然后标题，输入框和列表

```jsx
<Container>
  <Main>
    <h1>TODO List</h1>
    <StyledInput
      type="text"
      value={newTodo}
      onChange={handleNewTodoChange}
      onKeyDown={handleKeyDown}
      placeholder="Add a new todo"
    />
    <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
  </Main>
</Container>
```

所有核心逻辑都在主页面实现，然后依次向下传递。

```js
const [newTodo, setNewTodo] = useState("");
const [todos, setTodos] = useState([]);

const handleNewTodoChange = (e) => {
  setNewTodo(e.target.value);
};

const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    handleAddTodo();
  }
};

const handleAddTodo = () => {
  if (newTodo.trim() !== "") {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: newTodo.trim(),
        isEditing: false,
        isCompleted: false,
      },
    ]);
    setNewTodo("");
  }
};

const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};

const toggleTodo = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
  );
};
```

- 列表

```js
const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={deleteTodo}
          handleToggle={toggleTodo}
        />
      ))}
    </TodoListContainer>
  );
};
```

所有逻辑都在

- 元素

```js
// src/components/TodoItem.jsx
import styled from "styled-components";

const TodoItemContainer = styled.div`
  // 添加样式
`;

const TodoTitle = styled.span`
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
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
```

至此，一个简易版的 TODOList 就完成了。接下来，给同学们留作业，作业内容就是完成所有的加分项目，比如缓存相关的 localStorage 我们昨天的课程已经讲解过了。那么唯一的问题就是同学面试的话要掌握哪些内容，我这边会列举一些，然后给对应需要的同学，就不在这里浪费大家的时间了。
