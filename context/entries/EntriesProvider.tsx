import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      status: 'pending',
      createAt: Date.now(),
    },

    {
      _id: uuidv4(),
      description:
        'Veniam, quod doloremque quisquam dolorum, quibusdam, quisquam quisquam.',
      status: 'finished',
      createAt: Date.now(),
    },

    {
      _id: uuidv4(),
      description: 'Commodi, quod, quibusdam. Quasi, quisquam, harum!',
      status: 'in-progress',
      createAt: Date.now(),
    },
  ],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
