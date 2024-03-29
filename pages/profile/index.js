import { useState } from "react";
import { ironOptions } from "@/lib/config/iron-config";
import { getIronSession } from "iron-session";
import { Button, Form } from "react-bootstrap";
import { useRouter } from 'next/router';

export default function Profile ({session}) {

    const router = useRouter();

    // handling default values (if logged in)

    let defaults = {
        userId: "",
        first: "",
        last: "",
        em: "",
        adr: "",
        zip: "",
    }

    if (session.user) {
        defaults.userId = session.user._id
        defaults.first = session.user.firstName
        defaults.last = session.user.lastName
        defaults.em = session.user.emailId
        defaults.adr = session.user.address
        defaults.zip = session.user.zipcode
    
    }

    const [form, setForm] = useState({
        id: defaults.userId,
        firstName: defaults.first,
        lastName: defaults.last,
        emailId: defaults.em,
        address: defaults.adr,
        zipcode: defaults.zip
    });

    function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch(`/api/auth/updateProfile`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });
        if (response.ok) {
            const result = await response.json();
            console.log(result);
            window.alert("Changes saved!");
        } else {
            const errorMsg = await response.json();
            window.alert(`Update failed: ${errorMsg.error}!`);
        }
    }

    if (session.isLoggedIn) {

        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <Form className="form-container mb-4" onSubmit={handleSubmit}>
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
                            <div className="form-group mb-3">
                                <label htmlFor="zipcode">Zipcode</label>
                                <input id="zipcode" name="zipcode" className="form-control" value={form.zipcode} onChange={(e) => updateForm({ zipcode: e.target.value })} />
                            </div>
                            <Button type="submit">Save changes</Button>
                            <hr/>
                            <Button variant="outline-primary" href="/api/auth/logout">Log out</Button>
                        </Form>             
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <h1>Not logged in</h1>
                </div>
            </div>
        );
    }
}

export async function getServerSideProps(context) {
    const session = await getIronSession(context.req, context.res, ironOptions);
    if (!session.isLoggedIn) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
              },
        }
    }

    return {
      props: {
        session,
      },
    };
  }