import state from '@/store/modules/auth/actions'
import actions from '@/store/modules/auth/actions'
import mutations from '@/store/modules/auth/actions'

    const auth = {
    namespaced: true,
    state,
    actions,
    mutations
}

export default auth