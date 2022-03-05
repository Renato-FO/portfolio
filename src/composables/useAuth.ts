import apiWithoutToken from '@/services/apiWithoutToken'

export default function useAuth(){
    async function login(payload: any){
        try {
            const {data} = await apiWithoutToken.post('/login', payload)

            if(!data || Object.keys(data)?.length === 0){
                return new Error('invalid maior or password')
            }
        } catch (error) {
            return new Error(String(error))
        }
    }

    return {login}
}