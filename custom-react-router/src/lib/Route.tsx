import React, { ReactNode, useContext } from 'react';
import { RouterContext } from './Router';

interface Props {
  path: string,
  element: ReactNode,
}

const Route = (props: Props) => {
  const { path: contextPath } = useContext(RouterContext);
  const { path, element } = props;

  return (
    <div>
      {path === contextPath && element}
    </div>
  )
}

export default Route
