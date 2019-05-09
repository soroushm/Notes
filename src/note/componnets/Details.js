//@flow

import React from 'react'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import { Grid } from 'src/common/elements'
import { Header } from 'src/common/components'
import Edit from 'src/note/componnets/Write'

type Props = {
  classes?: Object,
  note: Object
}
const Details = ({ note, classes }: Props) => {
  const containerStyle = {
    minHeight: '100vh'
  }
  console.log('note', note)
  return (
    <Grid container styles={{ root: containerStyle }}>
      <Header />
      <Grid container justify="center" alignItems="center">
        <div className={classes.container}>
          <Edit defaultNote={note} />
        </div>
      </Grid>
    </Grid>
  )
}

const styles = (theme) => ({
  container: {
    maxWidth: 800,
    width: '100%',
    marginTop: theme.space.unit * 4
  }
})
const mapStateToProps = (state, props) => ({
  note: state.noteReducer.notes.filter((note) => note.id === props.match.params.id)[0]
})

export default connect(mapStateToProps)(injectSheet(styles)(Details))
