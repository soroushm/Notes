// @fllow
import React, { useEffect, useRef, useState } from 'react'
import { Grid, Input, Button, Logo } from 'src/common/elements'
import injectSheet from 'react-jss'
// Just I want To say i Can use scss! but I prefer to use jss and use theme
import '../styles/page.scss'
import { providers } from 'src/user'
type Props = {
  classes: Object,
  setName: Function,
  user: Object
}

const Page = ({ classes, user, setUser }): Props => {
  const nameInput = useRef('')
  const [disabled, setDisabled] = useState(true)
  useEffect(() => {
    console.log(`form is ${disabled ? 'disabled' : 'unlocked'} `)
  }, [disabled])
  const containerStyle = {
    height: '100vh',
    backgroundImage: 'url(/images/notes.jpg)',
    backgroundColor: '#eee',
    backgroundSize: 'cover',
    position: 'relative'
  }
  return (
    <Grid container alignContent="flex-start" justify="center" alignItems="center" styles={{ root: containerStyle }}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setUser({
            name: nameInput.current.value
          })
        }}
      >
        <div className={classes.headLine}>Welcome,</div>
        <div className={classes.subHeadLine}>Enter Your Name</div>
        <Input
          size="md"
          inputRef={nameInput}
          defaultValue={user.name}
          onChange={(e) => {
            setDisabled(e.target.value === '')
          }}
        />
        <Button
          color="primary"
          type="submit"
          name="submit"
          size="md"
          disabled={disabled}
          styles={{ button: { marginLeft: 5, marginRight: 5 } }}
        >
          Enter
        </Button>
      </form>
      <Logo className={classes.logo} />
      <div className="photo-by">
        Photo by Marten Bjork on <a href="https://unsplash.com/">Unsplash</a>
      </div>
    </Grid>
  )
}

const styles = (theme) => ({
  logo: {
    position: 'absolute',
    top: 24,
    left: 24
  },
  headLine: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subHeadLine: {
    fontSize: 24,
    marginBottom: theme.space.unit
  }
})
export default providers.user(injectSheet(styles)(Page))
