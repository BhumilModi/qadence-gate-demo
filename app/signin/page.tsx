export default function SignIn() {
  return (
    <form method="post" action="/api/signin">
      <h1>Sign in</h1>
      <label htmlFor="username">Email</label>
      <input id="username" name="username" type="email" autoComplete="username" required />
      <button type="submit">Sign in</button>
    </form>
  );
}
