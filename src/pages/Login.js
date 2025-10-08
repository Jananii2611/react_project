import React, { useState } from "react";
import { loginUser } from "../api/authApi";
import "../styles/Auth.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await loginUser(form);
    if (res.error) setError(res.error);
    else alert(`Welcome, ${res.username}! Login successful.`);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-msg">{error}</p>}
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required/>
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
