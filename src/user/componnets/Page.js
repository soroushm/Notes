import React, { useEffect } from 'react'
import '../styles/page.scss'

const Page = (props) => {
  useEffect(() => {
    console.log('props', props)
  })
  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log('submit')
        }}
      >
        <input
          onChange={(val) => {
            console.log('ccc', val)
          }}
        />
        <button type="submit" name="submit">
          submit
        </button>
      </form>
    </div>
  )
}

export default Page
