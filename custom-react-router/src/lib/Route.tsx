import React, { useEffect, ReactNode, useContext } from 'react'
import useRouter from '../hooks/useRouter';
import { RouterContext } from './Router';

interface Props {
  path: string,
  element: ReactNode,
}

const Route = (props: Props) => {
  const { path: contextPath, newPath } = useContext(RouterContext);
  const { pathname } = useRouter();
  const { path, element } = props;

  return (
    <div>
      {path === contextPath && element}
    </div>
  )
}

export default Route
