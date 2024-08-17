import { describe, expect, it, vi } from 'vitest';

import { TodosContainer } from 'features/todos/components';
import type { ITodo } from 'features/todos/interfaces';
import { defaultTodos } from 'features/todos/mocks';
import { TodoDaoService } from 'features/todos/services';
import { act, authProviderHelper, render, screen } from 'tests/helpers';

vi.mock('features/todos/components/Todo/Todo');
vi.mock('features/todos/components/TodoCreate/TodoCreate');
vi.mock('features/todos/services/TodoDaoService');

describe('TodosContainer', () => {
  authProviderHelper();

  it('should works correctly with wrong response', async () => {
    vi.spyOn(TodoDaoService, 'getTodos').mockResolvedValue({} as ITodo[]);

    await act(async () => {
      renderComponent();
    });

    expect(screen.getByTestId('todo-create')).toBeInTheDocument();
  });

  it('should show all todos from response', async () => {
    const getTodosSpy = vi
      .spyOn(TodoDaoService, 'getTodos')
      .mockResolvedValue(defaultTodos);

    await act(async () => {
      renderComponent();
    });

    expect(getTodosSpy).toHaveBeenCalled();
    expect(screen.getAllByTestId('todo')).toHaveLength(2);
  });
});

function renderComponent() {
  return render(<TodosContainer />);
}
