import React, { ReactNode, useContext } from 'react'
import useRouter from '../hooks/useRouter'
import {RouterContext} from '../lib/Router';

interface Props {

}

const About = (props: Props) => {
  const { newPath } = useContext(RouterContext);
  console.log(newPath);
  const { push } = useRouter();
  const handleButton = () => {
    newPath('/');
    push({}, '', '/')
  }
  return (
    <>
      <div>
        about
      </div>
      <div>
        <button onClick={handleButton}>go main</button>
      </div>
    </>
  )
}

export default About
