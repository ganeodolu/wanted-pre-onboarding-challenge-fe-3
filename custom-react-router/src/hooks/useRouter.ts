import { useMemo } from 'react'

const useRouter = () => {
  return useMemo(() => {
    return {
      push: history.pushState,
      pathname: location.pathname,
    }
  }, [history, location])
}

export default useRouter
