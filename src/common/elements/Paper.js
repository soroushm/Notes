//@flow
import React from 'react'
import injectSheet from 'react-jss'

type Props = {
  classes: Object,
  children: any,
  border?: boolean,
  shadow?: boolean,
  elevation?: number,
  className?: string,
  color?: string
}

const Write = ({ classes, children, className = '', ...props }: Props) => (
  <section className={`${classes.paper} ${className}`} {...props}>
    {children}
  </section>
)

const styles = (theme) => ({
  paper: ({ border, shadow, color, elevation = 1 }) => ({
    boxShadow:
      shadow && '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    borderRadius: theme.space.unit * elevation,
    borderColor: border && theme.palette.assets.grey,
    borderWidth: border && 1,
    padding: theme.space.unit * 2,
    backgroundColor: color ? color : theme.palette.assets.background
  })
})
export default injectSheet(styles)(Write)
