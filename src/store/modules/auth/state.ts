import { getAuthUser } from '@/utils/getAuthUser'

    const user = getAuthUser()

    export interface AuthUser {
        id: string
        name: string
        company: string
        email: string
        token: string
    }

    export interface AuthState {
        user: AuthUser
    }

    export default (): AuthState => ({
        user: user ?? {}
    })
    