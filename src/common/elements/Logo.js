// @flow

import React from 'react'
import injectSheet from 'react-jss'

type Props = {
  classes: Object,
  className?: string
}

/* eslint-disable no-unused-vars */
const Button = ({ classes, className = '' }: Props) => {
  return (
    <div className={`${classes.logoWrapper} ${className}`}>
      <i className={`material-icons ${classes.logo}`}>notes</i> Notes
    </div>
  )
}

const styles = (theme) => ({
  logoWrapper: {
    lineHeight: '48px',
    fontSize: 36,
    color: theme.palette.primary.main
  },
  logo: {
    fontSize: 48,
    marginRight: theme.space.unit * 2,
    float: 'left'
  }
})

export default injectSheet(styles)(Button)
