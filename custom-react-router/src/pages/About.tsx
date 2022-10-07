import React, { useContext } from 'react';
import useRouter from '../hooks/useRouter';
import { RouterContext } from '../lib/Router';

const About = () => {
  const { newPath } = useContext(RouterContext);
  const { push } = useRouter();
  const handleButton = (path: string) => {
    newPath(path);
    push({path}, '', path)
  }

  return (
    <>
      <div>
        about
      </div>
      <div>
        <button onClick={() => handleButton('/')}>go main</button>
      </div>
    </>
  )
}

export default About
