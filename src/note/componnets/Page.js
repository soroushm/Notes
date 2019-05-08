import React, { useEffect } from 'react'
import '../styles/page.scss'

const Page = (props) => {
  useEffect(() => {
    console.log('props', props)
  })
  return <div className="masoud">is note: {props.match.params.id}</div>
}

export default Page
