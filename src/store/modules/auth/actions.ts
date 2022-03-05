import useAuth from '@/composables/useAuth'



const actions = {
    async login({commit}, {payload}){
        const {login} = useAuth()

        const response: any = await login(payload)

        if(response instanceof Error){
            return new Error(response.message)
        }

        if (response.user){
            commit('LOGGED_IN', {
                userId: response.user?.id,
                name: response.user?.name,
                company: response.user?.company,
                email: response.user?.email,
                token: response.refreshToken
            })
        }
    }
}

export default actions