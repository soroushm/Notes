//@flow

import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'src/common/elements'
import NoteCart from 'src/note/componnets/NoteCart'

type Props = {
  notes: Array<Object>
}

const PinedNotes = ({ notes = [] }: Props) => {
  if (notes.length === 0) {
    return null
  }
  return (
    <section>
      <h3>Pinned</h3>
      <Grid container direction="row" alignContent="space-around" justify="center">
        {notes.map((note, i) => (
          <NoteCart note={note} key={i} />
        ))}
      </Grid>
    </section>
  )
}

const mapStateToProps = (state) => ({ notes: state.noteReducer.notes.filter((note) => note.pined) })

export default connect(mapStateToProps)(PinedNotes)
