import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut }: any = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/api/auth/signin",
  },
  callbacks: {
    jwt({ token, user, account, profile, trigger }) {      
        return token
    }
},
})