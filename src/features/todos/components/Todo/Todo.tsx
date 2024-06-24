import type { FC } from 'react';

import type { ITodo } from 'features/todos/interfaces';

interface TodoProps extends ITodo {
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
  const test = () => {
    onChangeHandler(id, !completed);
  };

  return (
    <div className={'todo-item'}>
      <input onChange={test} type='checkbox' checked={completed} />
      <span className={completed ? 'completed' : ''}>{title}</span>
      <input type={'hidden'} value={id} />
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
