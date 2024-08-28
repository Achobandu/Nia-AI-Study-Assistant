// app/login/page.js
const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link href="/signup">Sign Up</Link>
      </p>
      <p>
        <Link href="/password-recovery">Forgot Password?</Link>
      </p>
    </div>
  );
};

export default LoginPage;
