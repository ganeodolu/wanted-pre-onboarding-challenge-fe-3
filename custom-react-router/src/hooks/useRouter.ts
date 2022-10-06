import React, { useMemo } from 'react'

interface Props {
  
}

const useRouter = (props: Props) => {
  return useMemo(() => {
    return {
      push: history.pushState,
      pathname: location.pathname,
    }
  }, [history, location])
}

export default useRouter
