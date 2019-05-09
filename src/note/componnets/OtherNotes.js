//@flow

import React from 'react'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import { Grid } from 'src/common/elements'
import NoteCart from 'src/note/componnets/NoteCart'

type Props = {
  classes?: Object,
  notes: Array
}

const OtherNotes = ({ classes, notes = [] }: Props) => {
  if (notes.length === 0) {
    return null
  }
  return (
    <section>
      <h3>Other</h3>
      <Grid container direction="row" alignContent="space-around" justify="center">
        {notes.map((note) => (
          <NoteCart note={note} />
        ))}
      </Grid>
    </section>
  )
}

const styles = (theme) => ({})
const mapStateToProps = (state) => ({ notes: state.noteReducer.notes.filter((note) => !note.pined) })

export default connect(mapStateToProps)(injectSheet(styles)(OtherNotes))
