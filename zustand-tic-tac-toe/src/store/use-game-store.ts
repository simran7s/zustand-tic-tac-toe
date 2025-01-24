import {create} from 'zustand'
import { combine } from 'zustand/middleware'

export const useGameStore = create(
    combine({ 
        history: [Array(9).fill(null)], 
        xIsNext: true,
        currentMove: 0,
    }, 
    (set) => {
      return {
        setHistory: (nextHistory: any) => {
            set((state) => ({
              history:
                typeof nextHistory === 'function'
                  ? nextHistory(state.history)
                  : nextHistory,
            }))
          },
        setXIsNext: (nextXIsNext: any) => {
          set((state) => ({
            xIsNext:
              typeof nextXIsNext === 'function'
                ? nextXIsNext(state.xIsNext)
                : nextXIsNext,
          }))
        },
        setCurrentMove: (nextCurrentMove: any) => {
          set((state) => ({
            currentMove:
              typeof nextCurrentMove === 'function'
                ? nextCurrentMove(state.currentMove)
                : nextCurrentMove,
          }))
        },
      }
    }),
  );

  export default useGameStore;