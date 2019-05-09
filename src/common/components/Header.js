//@flow
import React from 'react'
import injectSheet from 'react-jss'
import { Logo } from 'src/common/elements'

type Props = {
  classes: Object,
  children?: any
}
const Header = ({ classes, children }: Props) => {
  return (
    <header className={classes.header}>
      <Logo />
      {children}
    </header>
  )
}

const styles = (theme) => ({
  header: {
    color: 'red',
    display: 'block',
    borderBottomColor: theme.palette.assets.grey,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    padding: theme.space.unit
  }
})
export default injectSheet(styles)(Header)
