export default function SignIn() {
  return (
    <form method="post" action="/api/signin">
      <h1>Sign in</h1>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />
      <button type="submit">Sign in</button>
    </form>
  );
}
