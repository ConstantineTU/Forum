import React from 'react'
import classes from './loader.module.scss'

const Loader = () => {
  return (
    <div className={classes.loader__container}>
      <div className={classes.loader}></div>
    </div>
  )
}

export default Loader
