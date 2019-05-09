//@flow
import React from 'react'
import injectSheet from 'react-jss'

type Props = {
  classes: Object,
  color: string,
  isDefault: boolean
}
const Color = ({ classes, isDefault, ...props }: Props) => {
  return (
    <div className={classes.cycle} {...props}>
      {isDefault && <i>/</i>}
    </div>
  )
}

const styles = (theme) => ({
  cycle: ({ color }) => ({
    backgroundColor: color,
    width: 24,
    borderWidth: 1,
    borderColor: theme.palette.assets.grey,
    borderStyle: 'solid',
    height: 24,
    marginLeft: theme.space.unit / 2,
    marginRight: theme.space.unit / 2,
    borderRadius: 50,
    cursor: 'pointer'
  })
})
export default injectSheet(styles)(Color)
