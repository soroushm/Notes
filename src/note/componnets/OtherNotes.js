//@flow

import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'src/common/elements'
import NoteCart from 'src/note/componnets/NoteCart'

type Props = {
  notes: Array<Object>
}

const OtherNotes = ({ notes = [] }: Props) => {
  if (notes.length === 0) {
    return null
  }
  return (
    <section>
      <h3>Other</h3>
      <Grid container direction="row" alignContent="space-around" justify="center">
        {notes.map((note, i) => (
          <NoteCart key={i} note={note} />
        ))}
      </Grid>
    </section>
  )
}

const mapStateToProps = (state) => ({ notes: state.noteReducer.notes.filter((note) => !note.pined) })

export default connect(mapStateToProps)(OtherNotes)
