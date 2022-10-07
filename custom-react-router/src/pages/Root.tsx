import React, { useContext } from 'react';
import useRouter from '../hooks/useRouter';
import { RouterContext } from '../lib/Router';

const Root = () => {
  const { newPath } = useContext(RouterContext);
  const { push } = useRouter();
  const handleButton = (path: string) => {
    newPath(path);
    push({path}, '', path)
  }

  return (
    <>
      <div>
        root
      </div>
      <div>
        <button onClick={() => handleButton('/about')}>about</button>
      </div>
    </>
  )
}

export default Root
