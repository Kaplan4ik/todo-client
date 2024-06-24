import axios from 'config/axiosConfig';
import type { ITodo } from 'features/todos/interfaces';

async function getTodos(): Promise<ITodo[]> {
  const route = 'todo';
  const response = await axios.get(route);

  return response.data;
}

async function createTodo(newTodoTitle: string): Promise<ITodo[]> {
  const route = 'todo';
  const response = await axios.post(route, { title: newTodoTitle });

  return response.data;
}

async function deleteTodo(id: number): Promise<ITodo[]> {
  const route = `todo/${id}`;
  const response = await axios.delete(route);

  return response.data;
}

async function updateTodo(id: number, completed: boolean): Promise<ITodo[]> {
  const route = `todo/${id}`;
  const response = await axios.patch(route, { completed });

  return response.data;
}

export const TodoDaoService = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
