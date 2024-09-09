import axios from 'config/axiosConfig';
import type { ITodo } from 'features/todos/interfaces';

//TODO: Implement httpService for avoiding code duplication
async function getTodos(token: string): Promise<ITodo[]> {
  const route = `todo`;
  const response = await axios.get(route, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

async function createTodo(
  newTodoTitle: string,
  token: string,
): Promise<ITodo[]> {
  const route = `todo`;
  const response = await axios.post(
    route,
    { title: newTodoTitle },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
}

async function deleteTodo(id: number, token: string): Promise<ITodo[]> {
  const route = `todo/${id}`;
  const response = await axios.delete(route, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

async function updateTodo(
  id: number,
  completed: boolean,
  token: string,
): Promise<ITodo[]> {
  const route = `todo/${id}`;
  const response = await axios.patch(
    route,
    { completed },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
}

export const TodoDaoService = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
