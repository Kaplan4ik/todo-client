import { useAuth0 } from '@auth0/auth0-react';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { Todo, TodoCreate } from 'features/todos/components';
import type { ITodo } from 'features/todos/interfaces';
import { TodoDaoService } from 'features/todos/services';

export const TodosContainer: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const { getAccessTokenSilently } = useAuth0();

  const onToggle = async (id: number, completed: boolean) => {
    try {
      const updatedTodos = await TodoDaoService.updateTodo(id, completed);
      setTodos(updatedTodos);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      const updatedTodos = await TodoDaoService.deleteTodo(id);
      setTodos(updatedTodos);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const addTodoHandler = async (newTodoTitle: string) => {
    try {
      const updatedTodos = await TodoDaoService.createTodo(newTodoTitle);
      setTodos(updatedTodos);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const fetchTodos = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await TodoDaoService.getTodos(token);
      setTodos(response);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {Array.isArray(todos) &&
        todos.map((todo) => (
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
