import { default as userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { TodoCreate } from 'features/todos/components';
import { render, screen } from 'tests/helpers';

describe('TodoCreate', () => {
  const createTodoSpy = vi.fn();

  it('should show "Add todo" button by default', () => {
    render(<TodoCreate createTodo={createTodoSpy} />);

    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  it('should show input field when "Add todo" button is clicked', async () => {
    render(<TodoCreate createTodo={createTodoSpy} />);

    await userEvent.click(screen.getByText('Add Todo'));

    expect(screen.getByPlaceholderText('Enter new todo')).toBeInTheDocument();
  });

  it('should call createTodo when "Save" button is clicked', async () => {
    render(<TodoCreate createTodo={createTodoSpy} />);

    await userEvent.click(screen.getByText('Add Todo'));
    await userEvent.type(
      screen.getByPlaceholderText('Enter new todo'),
      'New todo',
    );
    await userEvent.click(screen.getByText('Save'));

    expect(createTodoSpy).toHaveBeenCalledWith('New todo');
  });

  it('should not call createTodo when "Save" button is clicked with empty input', async () => {
    render(<TodoCreate createTodo={createTodoSpy} />);

    await userEvent.click(screen.getByText('Add Todo'));
    await userEvent.click(screen.getByText('Save'));

    expect(createTodoSpy).not.toHaveBeenCalled();
  });

  it('should hide input when "Cancel" button is clicked', async () => {
    render(<TodoCreate createTodo={createTodoSpy} />);

    await userEvent.click(screen.getByText('Add Todo'));
    await userEvent.click(screen.getByText('Cancel'));

    expect(
      screen.queryByPlaceholderText('Enter new todo'),
    ).not.toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });
});
