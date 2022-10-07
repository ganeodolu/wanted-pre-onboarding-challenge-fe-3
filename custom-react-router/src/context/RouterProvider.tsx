import React, { createContext, PropsWithChildren, FunctionComponent } from 'react'

interface Props {
  
}

const RouterContext = createContext(null);


const RouterProvider: FunctionComponent<PropsWithChildren> = ({children}) => {

  return (
    <div>
      
    </div>
  )
}

export default RouterProvider
