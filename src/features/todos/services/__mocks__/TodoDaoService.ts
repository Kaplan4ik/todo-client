import { vi } from 'vitest';

export const TodoDaoService = {
  getTodos: vi.fn(),
  createTodo: vi.fn(),
  deleteTodo: vi.fn(),
  updateTodo: vi.fn(),
};
