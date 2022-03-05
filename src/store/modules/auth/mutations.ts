



const mutations = {
    LOGGED_IN(state, data){
        localStorage.setItem('user', JSON.stringify(data))
        state.user = data
    }
}