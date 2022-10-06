import React from 'react'

interface Props {
  
}

const About = (props: Props) => {
  return (
    <div>
      about
      <button onClick={() => history.pushState({}, '', '/')}>go main</button>
    </div>
  )
}

export default About
