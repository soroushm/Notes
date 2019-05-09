//@flow
import React, { useState, useRef } from 'react'
import injectSheet from 'react-jss'
import { Grid, Button } from 'src/common/elements'
import { pin, pined, palette } from 'src/utils/icons'
type Props = {
  classes?: Object
}

const Write = ({ classes }: Props) => {
  const titleInput = useRef('')
  const descInput = useRef('')
  const [pined, setPin] = useState(false)
  return (
    <Grid container>
      <Grid container direction="row">
        <input
          name="title"
          className={classes.title}
          placeholder="Title"
          title="Title"
          ref={titleInput}
          autoComplete="off"
        />
        <Button link onClick={() => setPin(!pined)}>
          <div className={pined ? classes.pined : classes.pin} />
        </Button>
      </Grid>
      <textarea
        name="description"
        className={classes.desc}
        placeholder="Take a note ..."
        title="Note"
        autoComplete="off"
        rows={5}
        ref={descInput}
      />
      <Grid container direction="row">
        <Grid grow={1}>
          <Button
            link
            onClick={() => {
              console.log('sss')
            }}
          >
            <div className={classes.palette} />
          </Button>
        </Grid>
        <Button
          link
          onClick={() => {
            console.log('sss')
          }}
        >
          Close
        </Button>
      </Grid>
    </Grid>
  )
}

const styles = (theme) => ({
  container: {},
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    flexGrow: 1,
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
    height: 24,
    color: theme.palette.assets.text.grey
  },
  pined: {
    backgroundImage: pined,
    backgroundRepeat: 'no-repeat',
    width: 24,
    opacity: 0.54,
    height: 24,
    color: theme.palette.assets.text.grey
  },
  palette: {
    backgroundImage: palette,
    backgroundRepeat: 'no-repeat',
    width: 24,
    opacity: 0.54,
    height: 24,
    color: theme.palette.assets.text.grey
  }
})
export default injectSheet(styles)(Write)
