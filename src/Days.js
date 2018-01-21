import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class DaysOfWeek extends Component {
  constructor () {
    super()
    this.returnDays = this.returnDays.bind(this)
  }

  returnDays () {
    let days

    if (this.props.daysOfWeek.length > 0) {
      days = this.props.daysOfWeek.map((day) => {
        return <div className='floatLeft fullHeight weekDayContainer center' key={day.toString()}>{day}</div>
      })
    }

    return days
  }

  render () {
    return (
      <div className='fullWidth floatLeft weekContainer'>
        { this.returnDays() }
      </div>
    )
  }
}

DaysOfWeek.propTypes = {
  daysOfWeek: PropTypes.array
}

export default DaysOfWeek
