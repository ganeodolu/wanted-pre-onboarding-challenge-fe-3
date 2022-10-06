import React from 'react'
import useRouter from '../hooks/useRouter';

interface Props {
  
}

const Root = (props: Props) => {
  console.log(history);
  const router = useRouter();
  console.log(router);

  return (
    <div>
      root
      <button onClick={() => history.pushState({}, '', '/about')}>about</button>
    </div>
  )
}

export default Root
