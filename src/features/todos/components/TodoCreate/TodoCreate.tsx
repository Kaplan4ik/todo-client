import type { FC } from 'react';
import { useState } from 'react';

interface TodoCreateProps {
  // eslint-disable-next-line no-unused-vars
  createTodo: (title: string) => void;
}

export const TodoCreate: FC<TodoCreateProps> = ({ createTodo }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const addTodo = () => {
    if (newTodoTitle.trim() !== '') {
      createTodo(newTodoTitle);
      setNewTodoTitle('');
      setIsAdding(false);
    }
  };

  return (
    <>
      {isAdding ? (
        <div className='add-todo'>
          <input
            type='text'
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder='Enter new todo'
          />
          <button onClick={addTodo}>Save</button>
          <button onClick={() => setIsAdding(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setIsAdding(true)}>Add Todo</button>
      )}
    </>
  );
};
