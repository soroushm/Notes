import React, { useEffect } from 'react'
import { Grid, Input } from 'src/common/elements'
import '../styles/page.scss'
const Page = (props) => {
  useEffect(() => {
    console.log('props', props)
  })
  return (
    <div className="container">
      <Grid
        container
        alignContent="flex-start"
        justify="center"
        alignItems="center"
        styles={{ root: { height: '100vh' } }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log('submit', e)
          }}
        >
          <Input
            onChange={(val) => {
              console.log('ccc', val)
            }}
          />
          <button type="submit" name="submit">
            submit
          </button>
        </form>
      </Grid>
    </div>
  )
}

export default Page
