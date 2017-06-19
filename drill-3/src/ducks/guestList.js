const initialState = ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff'];

const ADD_GUEST = 'ADD_GUEST';
const REMOVE_GUEST = 'REMOVE_GUEST';

export function addGuest(guestName){
  return {
    type: ADD_GUEST,
    payload: guestName
  }
}

export function removeGuest(id){
  return {
    type: REMOVE_GUEST,
    payload: id
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type){
    case ADD_GUEST:
      return [...state, action.payload]
    case REMOVE_GUEST:
      state.splice(action.payload,1)
      return [...state]
    default:
      return state
  }
}
