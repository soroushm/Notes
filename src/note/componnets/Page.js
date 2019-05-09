//@flow
import React from 'react'
import injectSheet from 'react-jss'
import { Grid } from 'src/common/elements'
import { Header } from 'src/common/components'
import PinedNotes from 'src/note/componnets/PinedNotes'
import OtherNotes from 'src/note/componnets/OtherNotes'
import TakeNote from './TakeNote'

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
      <section className={classes.bg}>
        <Grid container justify="center" alignItems="center">
          <div className={classes.container}>
            <TakeNote />
            <PinedNotes />
            <OtherNotes />
          </div>
        </Grid>
      </section>
    </Grid>
  )
}

const styles = (theme) => ({
  bg: {
    backgroundColor: theme.palette.assets.backgroundGrey,
    flexGrow: 1
  },
  container: {
    maxWidth: 800,
    width: '100%',
    marginTop: theme.space.unit * 4
  }
})
export default injectSheet(styles)(Page)
