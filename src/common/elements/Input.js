// @flow

import React from 'react'
import injectSheet from 'react-jss'
import type { size } from 'src/utils/types'
import { choseSize } from 'src/utils/theme'

type Props = {
  classes: Object,
  styles?: Object,
  size?: size
}

/* eslint-disable no-unused-vars */
const Input = ({ classes, styles, size, theme, inputRef, ...props }: Props) => {
  return (
    <div className={classes.root}>
      <input {...props} ref={inputRef} className={classes.input} />
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
      backgroundColor: theme.palette.assets.background,
      borderColor: theme.palette.assets.grey,
      boxSizing: 'border-box',
      ...root
    }
  },
  input: ({ styles = {}, size }) => {
    const { input = null } = styles
    return {
      border: 'none',
      margin: 0,
      height: choseSize(size, theme),
      backgroundColor: 'transparent',
      fontSize: choseSize(size, theme) / 2.2,
      lineHeight: choseSize(size, theme) - 2,
      fontFamily: theme.fontFamily,
      borderRadius: 5,
      paddingLeft: theme.space.unit,
      paddingRight: theme.space.unit,
      boxSizing: 'border-box',
      ...input
    }
  }
})

export default injectSheet(styles)(Input)
