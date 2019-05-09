//@flow
import React, { useState } from 'react'
import injectSheet from 'react-jss'
import { Grid, Paper } from 'src/common/elements'
import Write from './Write'
type Props = {
  classes?: Object
}

const TakeNote = ({ classes }: Props) => {
  const [writeMode, setWriteMode] = useState('false')
  return (
    <div className={classes.container}>
      {writeMode && <div className={classes.backDrop} onClick={() => setWriteMode(false)} />}
      <Paper shadow elevation className={classes.paper}>
        {!writeMode && (
          <div className={classes.takeNote} onClick={() => setWriteMode(true)}>
            Take a Note.
          </div>
        )}
        {writeMode && <Write />}
      </Paper>
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
  backDrop: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  },
  takeNote: {
    fontWeight: 'bold',
    fontSize: 16,
    cursor: 'text',
    color: theme.palette.assets.text.grey
  }
})
export default injectSheet(styles)(TakeNote)
