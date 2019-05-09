//@flow

import React from 'react'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import { Grid } from 'src/common/elements'

type Props = {
  classes?: Object,
  notes: Array
}

const OtherNotes = ({ classes, notes = [] }: Props) => {
  console.log('OtherNotes', notes)
  return <Grid container>{notes.map((note) => console.log(note))}</Grid>
}

const styles = (theme) => ({})
const mapStateToProps = (state) => ({ notes: state.noteReducer.notes.filter((note) => !note.pined) })

export default connect(mapStateToProps)(injectSheet(styles)(OtherNotes))
