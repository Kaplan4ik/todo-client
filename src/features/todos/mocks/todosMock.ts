import type { ITodo } from 'features/todos/interfaces';

export const defaultTodos: ITodo[] = [
  {
    id: 1,
    title: 'Todo 1',
    completed: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: true,
  },
];
