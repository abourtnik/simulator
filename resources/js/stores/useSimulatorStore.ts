import {persist, combine} from "zustand/middleware";
import { create } from 'zustand'

export const useSimulatorStore = create(
    persist(
        combine(
            {
                initial: undefined as number | undefined,
                rate: undefined as number | undefined,
            },
            (set) => ({
                setInitial: (value: number) => set({ initial: value }),
                setRate: (value: number) => set({ rate: value }),
            })
        )
        ,
        {
            name: 'simulator-storage',
        }
    )
)
