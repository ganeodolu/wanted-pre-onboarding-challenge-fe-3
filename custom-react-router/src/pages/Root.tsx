import React, { useContext } from 'react'
import useRouter from '../hooks/useRouter';
import {RouterContext} from '../lib/Router';

interface Props {

}

const Root = (props: Props) => {
  const { newPath } = useContext(RouterContext);
  console.log(history);
  const { push } = useRouter();
  const handleButton = () => {
    newPath('/about');
    push({}, '', '/about')
  }

  return (
    <>
      <div>
        root
      </div>
      <div>
        <button onClick={handleButton}>about</button>
      </div>
    </>
  )
}

export default Root
