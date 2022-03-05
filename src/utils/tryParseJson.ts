export default function tryParseJson<T>(value: string): T | null {
    try {
      return JSON.parse(value)
    } catch (error) {
      return null
    }
  }
  