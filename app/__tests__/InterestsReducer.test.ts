
import { interestsReducer } from '../context/LikesReducer';
import { Interest } from '../context/LikesContext';

interface State {
  interests: Interest[];
  nextId: number;
}

describe('interestsReducer', () => {
  const initialState: State = {
    interests: [
      { id: 1, name: 'Programar' },
      { id: 2, name: 'Jugar al futbol' },
      { id: 3, name: 'Hacer teatro' }
    ],
    nextId: 4,
  };
/**
 * @jest-environment jsdom
 */
  test('should add a new interest', () => {
    const action = { type: 'addInterest', interest: { name: 'Leer libros' } };
    const newState = interestsReducer(initialState, action);

    expect(newState.interests).toHaveLength(4);
    expect(newState.interests[3]).toEqual({ id: 4, name: 'Leer libros' });
    expect(newState.nextId).toBe(5);
  });

  test('should modify an existing interest', () => {
    const action = { type: 'modifyInterest', interest: { id: 2, name: 'Jugar al fútbol profesional' } };
    const newState = interestsReducer(initialState, action);

    expect(newState.interests).toHaveLength(3);
    expect(newState.interests[1]).toEqual({ id: 2, name: 'Jugar al fútbol profesional' });
  });

  test('should delete an interest', () => {
    const action = { type: 'deleteInterest', id: 2 };
    const newState = interestsReducer(initialState, action);

    expect(newState.interests).toHaveLength(2);
    expect(newState.interests.find((interest) => interest.id === 2)).toBeUndefined();
  });
});
