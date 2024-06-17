import type { FC } from 'react';
import { useState } from 'react';

import { Todo, TodoCreate } from 'features/todos/components';
import type { ITodo } from 'features/todos/interfaces';

export const TodosContainer: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodoHandler = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onChangeHandler={onToggle}
          onDelete={deleteTodo}
        />
      ))}
      <TodoCreate createTodo={addTodoHandler} />
    </>
  );
};
