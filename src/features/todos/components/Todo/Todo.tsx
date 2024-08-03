import type { FC } from 'react';

import type { ITodo } from 'features/todos/interfaces';

export interface TodoProps extends ITodo {
  // eslint-disable-next-line no-unused-vars
  onChangeHandler: (id: number, completed: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  onDelete: (id: number) => void;
}

export const Todo: FC<TodoProps> = ({
  id,
  title,
  completed,
  onChangeHandler,
  onDelete,
}) => {
  const onChangeClick = () => {
    onChangeHandler(id, !completed);
  };

  return (
    <div className={'todo-item'}>
      <input
        data-testid='todo-checkbox'
        onChange={onChangeClick}
        type='checkbox'
        checked={completed}
      />
      <span data-testid='todo-title' className={completed ? 'completed' : ''}>
        {title}
      </span>
      <input type={'hidden'} value={id} />
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
