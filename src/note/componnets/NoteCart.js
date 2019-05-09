//@flow

import React, { useState } from 'react'
import injectSheet from 'react-jss'
import { Button, Color, Grid, Paper } from 'src/common/elements'
import { pin, pined, palette } from 'src/utils/icons'
import { colors } from 'src/constant'
import { providers } from 'src/note'

type Props = {
  classes: Object,
  Note: Object,
  editNote: Function
}

const Write = ({ classes, note, editNote }: Props) => {
  const [pined, setPin] = useState(note.pined || false)
  const [selectedColor, setColor] = useState(note.color || colors[0])
  const [showColors, setShowColors] = useState(false)
  const onPined = (pined) => {
    editNote({ ...note, pined })
    setPin(pined)
  }
  const onChangeColor = (color) => {
    editNote({ ...note, color })
    setColor(color)
  }
  return (
    <Paper shadow elevation className={classes.paper} color={note.color}>
      <Grid container>
        <div className={classes.title} title="Title">
          {note.title}
        </div>
        <div className={classes.desc} title="Note">
          {note.desc.split(/\n/g).map((desc) => (
            <span>
              {desc}
              <br />
            </span>
          ))}
        </div>
        <Grid container direction="row">
          <Grid container direction="row" grow={1}>
            <Button type="button" link onClick={() => onPined(!pined)}>
              <div className={pined ? classes.pined : classes.pin} />
            </Button>
            <Button link type="button" onClick={() => setShowColors(true)}>
              <div className={classes.palette} />
            </Button>
            {showColors &&
              colors.map((color, i) => (
                <Color key={i} color={color} default={selectedColor === color} onClick={() => onChangeColor(color)} />
              ))}
          </Grid>

          <Button link type="submit">
            Close
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

const styles = (theme) => ({
  paper: {
    position: 'relative',
    maxWidth: 200,
    margin: theme.space.unit
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    flexGrow: 1,
    backgroundColor: 'transparent',
    color: theme.palette.assets.text.grey,
    border: 'none',
    outline: 'none'
  },
  desc: {
    fontSize: 14,
    border: 'none',
    marginTop: theme.space.unit * 2,
    color: theme.palette.assets.text.grey,
    outline: 'none',
    resize: 'none',
    flexGrow: 1,
    backgroundColor: 'transparent',
    '&::placeholder': {
      fontWeight: 'bold'
    }
  },
  pin: {
    backgroundImage: pin,
    backgroundRepeat: 'no-repeat',
    width: 18,
    opacity: 0.9,
    height: 18,
    backgroundSize: 'cover'
  },
  pined: {
    backgroundImage: pined,
    backgroundRepeat: 'no-repeat',
    width: 18,
    opacity: 0.9,
    height: 18,
    backgroundSize: 'cover'
  },
  palette: {
    backgroundImage: palette,
    backgroundRepeat: 'no-repeat',
    width: 18,
    opacity: 0.9,
    height: 18,
    backgroundSize: 'cover'
  }
})
export default providers.note(injectSheet(styles)(Write))
