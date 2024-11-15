'use server'

import { signIn, signOut } from "../auth"

export async function SignIn() {
  return await signIn('google', { callbackUrl: "/api/auth/dashboard" })
}

export async function SignOut() {
  return await signOut()
}