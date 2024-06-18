import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { Todo, TodoCreate } from 'features/todos/components';
import type { ITodo } from 'features/todos/interfaces';
import { TodoDaoService } from 'features/todos/services';

export const TodosContainer: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onToggle = async (id: number) => {
    const updatedTodos = await TodoDaoService.updateTodo(id);
    setTodos(updatedTodos);
  };

  const deleteTodo = async (id: number) => {
    const updatedTodos = await TodoDaoService.deleteTodo(id);
    setTodos(updatedTodos);
  };

  const addTodoHandler = async (newTodoTitle: string) => {
    const updatedTodos = await TodoDaoService.createTodo(newTodoTitle);
    setTodos(updatedTodos);
  };

  const fetchTodos = async () => {
    const response = await TodoDaoService.getTodos();
    setTodos(response);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

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
