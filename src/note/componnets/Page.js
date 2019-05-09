//@flow
import React from 'react'
import injectSheet from 'react-jss'
import { Grid } from 'src/common/elements'
import { Header } from 'src/common/components'

type Props = {
  classes?: Object
}

const Page = ({ classes }: Props) => {
  const containerStyle = {
    minHeight: '100vh'
  }
  return (
    <Grid container styles={{ root: containerStyle }}>
      <Header />
    </Grid>
  )
}

const styles = () => ({})
export default injectSheet(styles)(Page)
