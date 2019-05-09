//@flow

import React, { useEffect } from 'react'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import { Grid } from 'src/common/elements'

type Props = {
  classes?: Object,
  notes: Array
}
const Details = (props: Props) => {
  useEffect(() => {
    console.log('props', props)
  })
  return <div className="masoud">is note: {props.match.params.id}</div>
}

const styles = (theme) => ({})
const mapStateToProps = (state, props) => ({
  note: state.noteReducer.notes.filter((note) => note.id === props.match.params.id)[0]
})

export default connect(mapStateToProps)(injectSheet(styles)(Details))
