import React from 'react'
import './index.css'

const Months = (props) => {
  return (
    <div className='fullWidth floatLeft monthContainerController' >
      <div className='floatLeft fullHeight oneThirdWidth'>
        <span onClick={props.previousMonth}>Previous</span>
      </div>
      <div className='floatLeft fullHeight oneThirdWidth monthName'>{props.month} {props.year}</div>
      <div className='floatLeft fullHeight oneThirdWidth'>
        <span onClick={props.nextMonth}>Next</span>
      </div>
    </div>
  )
}

export default Months
