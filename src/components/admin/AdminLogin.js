import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Form} from 'react-bootstrap';
import account from '../../images/account.gif';
export default function AdminLogin() {
  return (
    <div>

    <Container className="p-5 mt-5 w-50 bg-white">
    <h2 className="text-center">Login with Admin</h2>
    <hr className="border border-2 border-dark w-25 mx-auto" />
    <Row>
      <div className="col-md-3">
        <img
          src={account}
          alt="account"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="col-md-6">
        <Form method="post">
          <div className="form-input mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email *"
              required
            />
          </div>

          <div className="form-input mt-2">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password *"
              required
            />
          </div>

          <div className="form-input mt-2">
            <input
              type="submit"
              className="btn btn-lg btn-dark text-white"
              value="Login"
            />

            <b>
              &nbsp;&nbsp;<Link to="#">Forget password ?</Link>
            </b>
          </div>

      
        </Form>
      </div>
    </Row>
  </Container>

      
    </div>
  )
}
