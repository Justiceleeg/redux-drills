const ADD_GUEST = 'ADD_GUEST';
const REMOVE_GUEST = 'REMOVE_GUEST';
const UPDATE_GUEST = 'UPDATE_GUEST';

const initialState = ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff'];

export function addGuest(guest) {
  return {
    type: ADD_GUEST,
    payload: guest
  }
}

export function removeGuest(i) {
  return {
    type: REMOVE_GUEST,
    payload: i
  }
}

export function updateGuest(i, newName) {
  return {
    type: UPDATE_GUEST,
    payload: { i, newName}
  }
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GUEST:
      return [...state, action.payload];
    case REMOVE_GUEST:
      return state.filter( (guest, i) => i !== action.payload );
    case UPDATE_GUEST:
      state.splice(action.payload.i,1, action.payload.newName)
      return [...state]
    default:
      return state;
    }
}
