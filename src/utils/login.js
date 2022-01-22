import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

export const loginWithEmail = async (payload) => {
  const { user } = await signInWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  )
  return JSON.parse(JSON.stringify(user))
}
