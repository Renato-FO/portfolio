import { useRouter } from "vue-router"

const router = useRouter()

const actions = {
    init: async({state, dispatch}) => {
        const isLogged = state.auth.user

        if(isLogged) {
           router.push('/home')
        }
    }
}

export default actions