import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Signup() {

  const router = useRouter();

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password })
    });
    if (response.ok) {
      const user = await response.json();
      console.log(user);
      window.alert(`Account created! Please log in.`);
      router.push("/login");
    } else {
      const errorMsg = await response.json();
      window.alert(`Signup failed: ${errorMsg.error}!`);
    }
  }

  return (
    <div className="container-fluid bg">
        <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-6 col-md-3">
                <form className="form-container" onSubmit={handleSubmit}>
                    <h1 className="text-center">Sign up</h1>
                    <hr/>
                  <div className="form-group mb-2">
                    <label htmlFor="firstname">First name <sup>*</sup></label>
                    <input type="text" className="form-control" name="firstName" id="firstname" placeholder="Jane" onChange={e => setFirstName(e.target.value)} required/>
                    <span className="error_form" id="fname_error_message"></span>
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="lastname">Last name <sup>*</sup></label>
                    <input type="text" className="form-control" name="lastName" id="lastname"  placeholder="Doe" onChange={e => setLastName(e.target.value)} required/>
                    <span className="error_form" id="lname_error_message"></span>
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="email">Email <sup>*</sup></label>
                    <input type="email" className="form-control" name="email" id="email"  placeholder="jdoe@email.com" onChange={e => setEmail(e.target.value)} required/>
                    <span className="error_form" id="email_error_message"></span>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password">Password <sup>*</sup></label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
                    <span className="error_form" id="password_error_message"></span>
                    </div>
                    <Button type="submit" id="btn" className="btn btn-primary form-control mb-3">Submit</Button>
                    <p id="login-link">Already have an account? <Link id="logInLink" href="/login">Log in</Link> here</p>
                  </form>
            </div>
        </div>
    </div>
  );
}