import React, { createContext, FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';

interface Context {
    path: string,
    newPath: (path: string) => void
}

export const RouterContext = createContext<Context>({path: '/', newPath: () => {}});

const Router: FunctionComponent<PropsWithChildren> = ({children}) => {
  const [ path, setPath ] = useState(window.location.pathname);
  const contextValue = {
    path,
    newPath: (text: string) => setPath(text)
  }

  const handlePopState = (e: PopStateEvent) => {
    contextValue.newPath(e.state.path ?? '/')
  }
  
  useEffect(() => {
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  )
}

export default Router
