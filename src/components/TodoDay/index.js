import React from 'react'
import { func, string, array } from 'prop-types'
import './index.scss'
import {InputGroup,FormControl} from 'react-bootstrap'

import months from '../../data/months'
import { TodoNote } from '../'

const TodoDay = ({todoDate, handleNoteKeyPress,handleButtonClick, notes, handleCompleted}) => {


  let infoToday = todoDate.split('/')
  let noteDate = `${infoToday[0]},  ${months[infoToday[1] - 1]} ${infoToday[2]}`
  let searchNote = notes.map(note => note.date === todoDate ? note : ' ')
  searchNote = searchNote.filter(note => /\S/.test(note))

  return (
    <div className='todoDay'>
      
      <label htmlFor='note'>
          TO DO LIST Calender 
        </label>
        <h5>{noteDate}</h5>

        <InputGroup size="sm" className='input-field' >
    
    <FormControl  onKeyPress={handleNoteKeyPress}   id='note' />
    
  </InputGroup>

      {searchNote.length > 0 && searchNote.map(note => (
        <TodoNote key={note.id} note={note} handleCompleted={handleCompleted} />
      ))}
    </div>
  )
}

TodoDay.propTypes = {
  todoDate: string,
  handleNoteKeyPress: func.isRequired,
  notes: array.isRequired,
  handleCompleted: func.isRequired
}

export default TodoDay
