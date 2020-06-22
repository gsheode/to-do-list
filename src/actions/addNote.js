import { NEW_NOTE } from '../constants/actionTypes'


// this is the function that creates an action object
const addNote = (date, description) => ({
  type: NEW_NOTE,
  payload: {
    id: new Date().getUTCMilliseconds(),
    date,
    description
  }
})

export default addNote
