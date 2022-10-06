import React, { useState, createContext, FunctionComponent, PropsWithChildren, ReactElement, ReactNode, useEffect} from 'react'

// declare function Router(
//   props: RouterProps
// ): React.ReactElement | null;

interface RouterProps {
  // basename?: string;
  children: ReactNode;
  // location: Partial<Location> | string;
  // navigationType?: NavigationType;
  // navigator: Navigator;
  // static?: boolean;
}

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

  // const RouterContext = createContext(contextValue);



  useEffect(() => {
    window.addEventListener('popstate', (e) => {
      console.log("location: " + document.location + ", state: " + JSON.stringify(e.state));
    })
    return () => {
      window.removeEventListener('popstate', () => {

      })
    }
  }, [])

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  )
}

export default Router
