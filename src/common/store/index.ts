import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { TAuthType } from '../types'


interface AuthState {
    authState: boolean
    login: () => void
    logout: () => void
    setData: (data: any) => void
    userData: any
    typeAuth: TAuthType,
    setTypeAuth: (type: TAuthType) => void
}

export const useAuthState = create<AuthState>()(
    devtools(
        persist(
            (set) => ({
                authState: false,
                setData: (data) => set({ userData: data }),
                userData: {},
                login: () => set({ authState: true }),
                logout: () => set({ authState: false }),
                typeAuth: "Login",
                setTypeAuth: (type) => set({ typeAuth: type })
            }),
            {
                name: 'auth-storage',
            },
        ),
    ),
)