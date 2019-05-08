// @flow

import React from 'react'
import injectSheet from 'react-jss'

type Props = {
  classes: Object,
  styles?: Object
}

const Input = ({ classes, props }: Props) => {
  return (
    <div className={classes.root}>
      <input {...props} className={classes.input} />
    </div>
  )
}

const styles = (theme) => ({
  root: ({ styles = {} }) => {
    const { root = null } = styles
    return {
      display: 'inline-block',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: theme.palette.assets.border,
      boxSizing: 'border-box',
      ...root
    }
  },
  input: ({ styles = {} }) => {
    const { input = null } = styles
    return {
      border: 'none',
      margin: 0,
      height: 25,
      lineHeight: 23,
      fontFamily: theme.fontFamily,
      borderRadius: 5,
      paddingLeft: theme.space,
      paddingRight: theme.space,
      ...input
    }
  }
})

export default injectSheet(styles)(Input)
