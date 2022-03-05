import { getAuthUser } from '@/utils/getAuthUser'

export default function getAuthorizationToken(): string {
  const user = getAuthUser()

  if (user?.token) {
    return 'Bearer ' + user.token
  } else {
    return ''
  }
}
