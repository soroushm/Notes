// @fllow
import React, { useEffect, useRef } from 'react'
import { Grid, Input, Button, Logo } from 'src/common/elements'
import injectSheet from 'react-jss'
// Just I want To say i Can use scss but i would like to use jss and use theme
import '../styles/page.scss'
import { providers } from 'src/user'
type Props = {
  classes: Object,
  setName: Function,
  user: Object
}

const Page = ({ classes, setUser }): Props => {
  const nameInput = useRef('')
  // useState is an other way to get data from input
  // BUT for each key down this component and hole child will be reRender
  //const [name, setName] = useState('')
  useEffect(() => {
    console.log('props', classes)
  }, [classes])
  const containerStyle = {
    height: '100vh',
    backgroundImage: 'url(/images/notes.jpg)',
    backgroundSize: 'cover',
    position: 'relative'
  }
  return (
    <div className="container">
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
            // onChange={(e) => {setName(e.target.value)}}
          />
          <Button
            color="primary"
            type="submit"
            name="submit"
            size="md"
            styles={{ button: { marginLeft: 5, marginRight: 5 } }}
          >
            Enter
          </Button>
        </form>
        <Logo />
        <div className="photo-by">
          Photo by Marten Bjork on <a href="https://unsplash.com/">Unsplash</a>
        </div>
      </Grid>
    </div>
  )
}

const styles = (theme) => ({
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
