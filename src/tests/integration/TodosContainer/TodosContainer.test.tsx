import { default as userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { TodosContainer } from 'features/todos/components';
import { defaultTodos } from 'features/todos/mocks';
import { TodoDaoService } from 'features/todos/services';
import { act, authProviderHelper, render, screen } from 'tests/helpers';

vi.mock('features/todos/services/TodoDaoService');

//TODO: Fix this test
describe.skip('TodosContainer', () => {
  authProviderHelper();

  it('should triggered createTodo', async () => {
    const createTodoSpy = vi
      .spyOn(TodoDaoService, 'createTodo')
      .mockResolvedValue(defaultTodos);

    renderComponent();

    await userEvent.click(screen.getByText('Add Todo'));
    await userEvent.type(
      screen.getByPlaceholderText('Enter new todo'),
      'New todo',
    );
    await userEvent.click(screen.getByText('Save'));

    expect(createTodoSpy).toHaveBeenCalledWith('New todo', 'test-token');
  });

  it('should triggered updateTodo', async () => {
    vi.spyOn(TodoDaoService, 'getTodos').mockResolvedValue(defaultTodos);
    const updateTodoSpy = vi.spyOn(TodoDaoService, 'updateTodo');

    await act(async () => {
      renderComponent();
    });

    await userEvent.click(screen.getAllByTestId('todo-checkbox')[0]);
    expect(updateTodoSpy).toHaveBeenCalledWith(1, true, 'test-token');
  });

  it('should triggered deleteTodo', async () => {
    vi.spyOn(TodoDaoService, 'getTodos').mockResolvedValue(defaultTodos);
    const deleteTodoSpy = vi.spyOn(TodoDaoService, 'deleteTodo');

    await act(async () => {
      renderComponent();
    });

    await userEvent.click(screen.getAllByText('Delete')[0]);
    expect(deleteTodoSpy).toHaveBeenCalledWith(1, 'test-token');
  });
});

function renderComponent() {
  return render(<TodosContainer />);
}
