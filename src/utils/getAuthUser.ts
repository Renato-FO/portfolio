
import tryParseJson from '@/utils/tryParseJson'

export function getAuthUser(): any {
  return tryParseJson(localStorage.getItem('user') ?? '')
}
