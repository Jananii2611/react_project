import React, { useState } from "react";
import { signupUser } from "../api/authApi";
import "../styles/Auth.css";

function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    // Validation: blank fields
    if (!form.username || !form.email || !form.password) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }
    // Call API
    const res = await signupUser(form);
    setLoading(false);
    if (res.error) setError(res.error);
    else setSuccess(res.message);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">{success}</p>}
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required/>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required/>
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required/>
        <button type="submit" disabled={loading}>{loading ? "Processing..." : "Signup"}</button>
      </form>
    </div>
  );
}

export default Signup;
