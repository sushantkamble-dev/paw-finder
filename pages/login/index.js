import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Login() {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (response.ok) {
      const user = await response.json();
      window.alert(`Welcome back, ${user.user.firstName}!`);
      router.push("/");
    } else {
      const errorMsg = await response.json();
      window.alert(`Login failed: ${errorMsg.error}!`);
    }
  }

  return (
    <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-6 col-md-3">
                <form onSubmit={handleSubmit} className="form-container">
                    <h1 className="text-center ">Login</h1>
                    <hr/>
                    <div className="form-group mb-2">
                      <label htmlFor="email">Email <sup>*</sup></label>
                      <input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required/>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="password">Password <sup>*</sup></label>
                      <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
                    </div>
                    <Button type="submit" id="btn" className="btn btn-primary form-control mb-3">Log In</Button>
                      <p id="signup-link">Don't have an account? <Link href="/signup">Sign Up</Link> here</p>
                </form>
            </div>
        </div>
    </div>
  );
}