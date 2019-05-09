//@flow

import React, { useState } from 'react'
import injectSheet from 'react-jss'
import { Paper } from 'src/common/elements'

import Write from './Write'
type Props = {
  classes?: Object
}

const TakeNote = ({ classes }: Props) => {
  const [writeMode, setWriteMode] = useState(false)
  console.log('www', writeMode)
  return (
    <div className={classes.container}>
      {!writeMode && (
        <Paper shadow elevation className={classes.paper}>
          <div
            className={classes.takeNote}
            onClick={() => {
              console.log('sssss')
              setWriteMode(true)
            }}
          >
            Take a Note.
          </div>
        </Paper>
      )}
      {writeMode && <Write onSubmitCB={() => setWriteMode(false)} backDrop />}
    </div>
  )
}

const styles = (theme) => ({
  container: {
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    position: 'relative'
  },

  takeNote: {
    fontWeight: 'bold',
    fontSize: 16,
    cursor: 'text',
    color: theme.palette.assets.text.grey
  }
})
export default injectSheet(styles)(TakeNote)
