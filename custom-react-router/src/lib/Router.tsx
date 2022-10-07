import React, { useState, createContext, useContext,  FunctionComponent, PropsWithChildren, ReactElement, ReactNode, useEffect} from 'react'
import useRouter from '../hooks/useRouter';

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
  const { pathname } = useRouter();
  // const { newPath } = useContext(RouterContext);
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
