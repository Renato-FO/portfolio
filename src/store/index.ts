import { InjectionKey } from 'vue'
import { createStore, Store as VuexStore, useStore as baseUseStore } from 'vuex'

import { auth, AuthState } from '@/store/modules'

export interface RootState {
  auth: AuthState
}

const store = createStore<RootState>({
  modules: {
    auth,
  }
})
/* 
export const key: InjectionKey<VuexStore<RootState>> = Symbol()



export function useStore(): VuexStore<RootState> {
  return baseUseStore(key)
} */

export default store
