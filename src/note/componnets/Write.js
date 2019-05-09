//@flow

import React, { useState, useRef, Fragment } from 'react'
import injectSheet from 'react-jss'
import { Button, Color, Grid, Paper } from 'src/common/elements'
import { pin, pined, palette } from 'src/utils/icons'
import { colors } from 'src/constant'
import { providers } from 'src/note'

type Props = {
  classes: Object,
  defaultNote?: Object,
  backDrop?: boolean,
  onSubmitCB?: Function,
  addNote: Function,
  editNote: Function
}

const Write = ({ classes, onSubmitCB, backDrop, addNote, editNote, defaultNote = {} }: Props) => {
  const [selectedColor, setColor] = useState(defaultNote.color || colors[0])
  const titleInput = useRef()
  const descInput = useRef()
  const [pined, setPin] = useState(defaultNote.pined || false)
  const [showColors, setShowColors] = useState(false)
  const onSubmit = () => {
    const note = {
      color: selectedColor,
      title: titleInput.current.value,
      desc: descInput.current.value,
      pined
    }

    if (defaultNote.id) {
      editNote({ ...defaultNote, ...note })
    } else {
      if (note.title !== '' && note.desc !== '') {
        addNote(note)
      }
    }
    onSubmitCB && onSubmitCB()
  }
  return (
    <Fragment>
      {backDrop && <div className={classes.backDrop} onClick={() => onSubmit()} />}
      <Paper shadow elevation className={classes.paper} color={selectedColor}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit()
          }}
        >
          <Grid container>
            <Grid container direction="row">
              <input
                name="title"
                className={classes.title}
                placeholder="Title"
                title="Title"
                defaultValue={defaultNote.title}
                ref={titleInput}
                autoComplete="off"
                autoFocus
                tabIndex="1"
              />
              <Button type="button" link onClick={() => setPin(!pined)}>
                <div className={pined ? classes.pined : classes.pin} />
              </Button>
            </Grid>
            <textarea
              name="description"
              className={classes.desc}
              placeholder="Take a note ..."
              title="Note"
              defaultValue={defaultNote.desc}
              autoComplete="off"
              rows={5}
              ref={descInput}
              tabIndex="2"
            />
            <Grid container direction="row">
              <Grid container direction="row" grow={1}>
                <Button link type="button" onClick={() => setShowColors(true)}>
                  <div className={classes.palette} />
                </Button>
                {showColors &&
                  colors.map((color, i) => (
                    <Color key={i} color={color} default={selectedColor === color} onClick={() => setColor(color)} />
                  ))}
              </Grid>

              <Button tabindex={3} link type="submit">
                {defaultNote.id ? 'save' : 'close'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Fragment>
  )
}

const styles = (theme) => ({
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
    backgroundColor: 'transparent',
    '&::placeholder': {
      fontWeight: 'bold'
    }
  },
  icon: {
    backgroundRepeat: 'no-repeat',
    width: 24,
    opacity: 0.54,
    height: 24,
    color: theme.palette.assets.text.grey
  },

  pin: {
    backgroundImage: pin,
    backgroundRepeat: 'no-repeat',
    width: 24,
    opacity: 0.54,
    height: 24
  },
  pined: {
    backgroundImage: pined,
    backgroundRepeat: 'no-repeat',
    width: 24,
    opacity: 0.54,
    height: 24
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
