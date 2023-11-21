import Button from 'react-bootstrap/Button';
import Link from "next/link";

export default function Signup() {

  return (
    <div className="container-fluid bg">
        <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-6 col-md-3">
                <form className="form-container" action="/signup" method="POST">
                    <h1 className="text-center">Sign up</h1>
                    <hr/>
                  <div className="form-group mb-2">
                    <label htmlFor="firstname">First name <sup>*</sup></label>
                    <input type="text" className="form-control" name="firstname" id="firstname"  placeholder="Jane" required/>
                    <span className="error_form" id="fname_error_message"></span>
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="lastname">Last name <sup>*</sup></label>
                    <input type="text" className="form-control" name="lastname" id="lastname"  placeholder="Doe" required/>
                    <span className="error_form" id="lname_error_message"></span>
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="email">Email <sup>*</sup></label>
                    <input type="email" className="form-control" name="email" id="email"  placeholder="jdoe@email.com" required/>
                    <span className="error_form" id="email_error_message"></span>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password">Password <sup>*</sup></label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" required/>
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