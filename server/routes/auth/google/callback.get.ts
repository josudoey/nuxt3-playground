export default defineOAuthGoogleEventHandler({
  config: {},
  async onSuccess(event, { user, tokens }) {
    await setUserSession(event, {
      user: {
        name: user.name,
        email: user.email,
        picture: user.picture
      }
    })
    await sendRedirect(event, '/')
  },
  async onError(event, error) {
    await sendRedirect(event, '/')
  }
})
