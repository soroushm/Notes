// @flow

import React from 'react'
import injectSheet from 'react-jss'
import { choseColor, choseSize, choseTextColor } from 'src/utils/theme'
import type { color, size } from 'src/utils/types'
type Props = {
  classes: Object,
  styles?: Object,
  color?: color,
  size?: size,
  link?: boolean
}

/* eslint-disable no-unused-vars */
const Button = ({ classes, styles, size, theme, ...props }: Props) => {
  return <button {...props} className={classes.button} />
}

const styles = (theme) => ({
  button: ({ styles = {}, color, size, link }) => {
    const { button = null } = styles
    return {
      display: 'inline-block',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      outline: 'none',
      backgroundColor: link ? 'transparent' : choseColor(color, theme),
      color: link && choseTextColor(color, theme),
      boxSizing: 'border-box',
      fontSize: choseSize(size, theme) / 2.2,
      height: choseSize(size, theme),
      paddingLeft: link ? theme.space.unit : theme.space.unit * 2,
      paddingRight: link ? theme.space.unit : theme.space.unit * 2,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
      '&::hover': {
        opacity: 0.6
      },
      ...button
    }
  }
})

export default injectSheet(styles)(Button)
