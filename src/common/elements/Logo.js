// @flow

import React from 'react'
import injectSheet from 'react-jss'
import { choseColor, choseSize } from 'src/utils/theme'
import type { color, size } from 'src/utils/types'
import { Grid } from './index'
type Props = {
  classes: Object
}

/* eslint-disable no-unused-vars */
const Button = ({ classes }: Props) => {
  return (
    <div className={classes.logoWrapper}>
      <i className={`material-icons ${classes.logo}`}>notes</i> Notes
    </div>
  )
}

const styles = (theme) => ({
  logoWrapper: {
    position: 'absolute',
    top: 24,
    left: 24,
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
