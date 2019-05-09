//@flow

import React, { useState } from 'react'
import injectSheet from 'react-jss'
import { Button, Color, Grid, Paper } from 'src/common/elements'
import { pin, pined, palette } from 'src/utils/icons'
import { colors } from 'src/constant'
import { providers } from 'src/note'

type Props = {
  classes: Object,
  note: Object,
  editNote: Function,
  goToNote: Function
}

const Write = ({ classes, note, editNote, goToNote }: Props) => {
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
    <Paper
      shadow
      elevation
      className={classes.paper}
      color={note.color}
      onClick={() => {
        goToNote(note.id)
      }}
    >
      <Grid container>
        <div>
          <div className={classes.title} hidden={!note.title} title="Title">
            {note.title}
          </div>

          <div className={classes.desc} title="Note">
            {note.desc.split(/\n/g).map((desc, i) => (
              <span key={i}>
                {desc}
                <br />
              </span>
            ))}
          </div>
        </div>
        <div className={classes.footer}>
          <Grid container direction="row">
            <Button
              type="button"
              link
              onClick={(e) => {
                e.stopPropagation()
                onPined(!pined)
              }}
            >
              <div className={pined ? classes.pined : classes.pin} />
            </Button>
            <Button
              link
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setShowColors(true)
              }}
            >
              <div className={classes.palette} />
            </Button>
            {showColors &&
              colors.map((color, i) => (
                <Color
                  key={i}
                  color={color}
                  default={selectedColor === color}
                  onClick={(e) => {
                    e.stopPropagation()
                    onChangeColor(color)
                  }}
                />
              ))}
          </Grid>
        </div>
      </Grid>
    </Paper>
  )
}

const styles = (theme) => ({
  paper: {
    position: 'relative',
    width: 152,
    margin: theme.space.unit
  },
  title: {
    marginBottom: theme.space.unit * 2,
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
    color: theme.palette.assets.text.grey,
    outline: 'none',
    resize: 'none',
    paddingBottom: 25 + theme.space.unit * 2,
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
  },
  footer: {
    position: 'absolute',
    bottom: theme.space.unit * 2,
    left: theme.space.unit * 2,
    right: theme.space.unit * 2
  }
})
export default providers.note(injectSheet(styles)(Write))
