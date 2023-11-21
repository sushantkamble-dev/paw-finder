import Button from 'react-bootstrap/Button';
import Link from "next/link";

export default function Login() {

  return (
    <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-6 col-md-3">
                <form className="form-container" action="/login" method="POST">
                    <h1 className="text-center ">Login</h1>
                    <hr/>
                    <div className="form-group mb-2">
                      <label htmlFor="email">Email <sup>*</sup></label>
                      <input type="email" className="form-control" id="email" name="email" placeholder="Email" required/>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="password">Password <sup>*</sup></label>
                      <input type="password" className="form-control" id="password" name="password" placeholder="Password" required/>
                    </div>
                    <Button type="submit" id="btn" className="btn btn-primary form-control mb-3">Log In</Button>
                      <p id="signup-link">Don't have an account? <Link href="/signup">Sign Up</Link> here</p>
                </form>
            </div>
        </div>
    </div>
  );
}