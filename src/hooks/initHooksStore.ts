import { useState, useEffect } from "react"

type Actions<T> = {
  [key: string]: (state: T, payload: any) => T
}

type Dispatch<T> = (actionIdentifier: keyof Actions<T>, payload: any) => void

export const initHookStore = <T>(userActions: Actions<T>, initialState: T) => {
  let globalState = { ...initialState }
  let listeners: React.Dispatch<T>[] = []
  let actions = { ...userActions }

  return {
    useStore(): [T, Dispatch<T>] {
      const [, setState] = useState(globalState)

      const dispatch: Dispatch<T> = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload)
        globalState = { ...globalState, ...newState }

        for (const listener of listeners) {
          listener(globalState)
        }
      }

      useEffect(() => {
        listeners.push(setState)

        return () => {
          listeners = listeners.filter((li) => li !== setState)
        }
      }, [])

      return [globalState, dispatch]
    },
  }
}
