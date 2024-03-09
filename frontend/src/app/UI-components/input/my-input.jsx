import React from 'react'
import classes from './my-input.module.scss'

const MyInput = (props) => {
  return (
    <div {...props}>
      <input {...props} className={classes.myInput} type="text" />
    </div>
  )
}

export default MyInput
