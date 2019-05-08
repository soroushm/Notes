// @flow

import React from 'react'
import injectSheet from 'react-jss'
import { choseColor, choseSize } from 'src/utils/theme'
import type { color, size } from 'src/utils/types'
type Props = {
  classes: Object,
  styles?: Object,
  color?: color,
  size?: size
}

/* eslint-disable no-unused-vars */
const Button = ({ classes, styles, size, theme, ...props }: Props) => {
  return <button {...props} className={classes.button} />
}

const styles = (theme) => ({
  button: ({ styles = {}, color, size }) => {
    const { button = null } = styles
    console.log('theme', theme)
    return {
      display: 'inline-block',
      border: 'none',
      borderRadius: 5,
      backgroundColor: choseColor(color, theme),
      boxSizing: 'border-box',
      fontSize: choseSize(size, theme) / 2.2,
      height: choseSize(size, theme),
      paddingLeft: theme.space.unit * 2,
      paddingRight: theme.space.unit * 2,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
      ...button
    }
  }
})

export default injectSheet(styles)(Button)
