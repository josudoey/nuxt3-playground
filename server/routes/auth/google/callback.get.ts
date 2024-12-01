export default defineOAuthGoogleEventHandler({
  config: {},
  async onSuccess(event, { user, tokens }) {
    await setUserSession(event, {
      user: {
        name: user.name,
        email: user.email,
        picture: user.picture,
      },
    });
    return sendRedirect(event, "/");
  },
  onError(event, error) {
    return sendRedirect(event, "/");
  },
});
