import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut }: any = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/api/auth/signin",
  },
  callbacks: {
    jwt: async ({ user, token }: any) => {      
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    session: ({ session, token, user }: any) => {
      if (session.user) {
        session.user.id = token.uid
      }
      return session
    }
  },
})