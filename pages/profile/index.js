import { useState } from "react";
import { ironOptions } from "@/lib/config/iron-config";
import { getIronSession } from "iron-session";
import { Button, Form } from "react-bootstrap";

export default function Profile ({session}) {

    const [form, setForm] = useState({
        firstName: session.user.firstName,
        lastName: session.user.lastName,
        emailId: session.user.emailId,
        address: session.user.address,
        zipcode: session.user.zipcode,
    });
    
    if (session.isLoggedIn) {

        console.log(session);



        function updateForm(value) {
            return setForm((prev) => {
              return { ...prev, ...value };
            });
        }

        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <Form className="form-container">
                            <h1 className="text-center">Profile</h1>
                            <hr/>
                            <div className="form-group mb-2">
                                <label htmlFor="firstName">First name</label>
                                <input id="firstName" name="firstName" className="form-control" value={form.firstName} onChange={(e) => updateForm({ firstName: e.target.value })} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="lastName">Last name</label>
                                <input id="lastName" name="lastName" className="form-control" value={form.lastName} onChange={(e) => updateForm({ lastName: e.target.value })} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="emailId">Email</label>
                                <input id="emailId" name="emailId" className="form-control" value={form.emailId} onChange={(e) => updateForm({ emailId: e.target.value })} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="address">Address</label>
                                <input id="address" name="address" className="form-control" value={form.address} onChange={(e) => updateForm({ address: e.target.value })} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="zipcode">Zipcode</label>
                                <input id="zipcode" name="zipcode" className="form-control" value={form.zipcode} onChange={(e) => updateForm({ zipcode: e.target.value })} />
                            </div>
                            <Button>Save changes</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <h1>Not logged in</h1> // should redirect to login
        );
    }
}

export async function getServerSideProps(context) {
    const session = await getIronSession(context.req, context.res, ironOptions);
    return {
      props: {
        session,
      },
    };
  }