import React from 'react'

import { func } from 'prop-types'

import { addGroceries } from '../../actions'

import { connect } from 'react-redux'

import './index.scss'
import { InputGroup, FormControl } from 'react-bootstrap'



const Groceries = (props) => {
  const handleNoteKeyPress = ({ target, key }) => {

    if (key === 'Enter' && target.value !== '') {
      console.log("value", props.todoDate);
      props.addGroceries(target.value)
     // target.value = ''
    }
  }


  return (
    <div>

      <div className='groceriesContainer'>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Item</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Item"
            aria-describedby="basic-addon1"
            onKeyPress={handleNoteKeyPress}
            notes={props.notes}
          />
         {/* <NoteGroceries note={target.value}></NoteGroceries> */}
        </InputGroup>
      </div>
    </div>
  )
}

const mapStateToProps = ({ notes, date, todoDate }) => ({
  notes
})
Groceries.propTypes = {

  addGroceries: func.isRequired

}
const mapDispatchToProps = (dispatch) => ({
  addGroceries: (date, description) => dispatch(addGroceries(date, description))
})
export default connect(mapStateToProps,mapDispatchToProps)(Groceries)
