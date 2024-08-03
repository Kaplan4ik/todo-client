import { default as userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import type { TodoProps } from 'features/todos/components';
import { Todo } from 'features/todos/components';
import { render, screen } from 'tests/helpers';

describe('Todo', () => {
  const onChangeHandlerSpy = vi.fn();
  const onDeleteSpy = vi.fn();
  const defaultProps: TodoProps = {
    completed: false,
    id: 1,
    onChangeHandler: onChangeHandlerSpy,
    onDelete: onDeleteSpy,
    title: 'Todo title',
  };

  it('should have correct title', () => {
    renderComponent(defaultProps);

    expect(screen.getByTestId('todo-title')).toHaveTextContent('Todo title');
  });

  it('should have correct checkbox state', () => {
    renderComponent(defaultProps);

    expect(screen.getByTestId('todo-checkbox')).not.toBeChecked();
  });

  it('should have checked checkbox state', () => {
    const completedProps = { ...defaultProps, completed: true };

    renderComponent(completedProps);

    expect(screen.getByTestId('todo-checkbox')).toBeChecked();
  });

  it('should call onChangeHandler when checkbox is clicked', async () => {
    renderComponent(defaultProps);

    await userEvent.click(screen.getByTestId('todo-checkbox'));

    expect(onChangeHandlerSpy).toHaveBeenCalledWith(1, true);
  });

  it('should call onDelete when delete button is clicked', async () => {
    renderComponent(defaultProps);

    await userEvent.click(screen.getByText('Delete'));

    expect(onDeleteSpy).toHaveBeenCalledWith(1);
  });
});

function renderComponent(props: TodoProps) {
  render(<Todo {...props} />);
}
