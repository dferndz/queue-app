import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID;
const GOOGLE_SECRET = process.env.REACT_APP_GOOGLE_SECRET;

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
  ],
});
