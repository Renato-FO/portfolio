



export function login(payload: any){
    return {
        type: 'auth/login',
        payload
    }
}