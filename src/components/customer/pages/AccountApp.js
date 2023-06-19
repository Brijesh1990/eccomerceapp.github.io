import React from "react";
import {Outlet,Link} from 'react-router-dom';
import {Form, Row} from "react-bootstrap";


// model create with destructuring using state component

import account from "../../../images/account.gif";
function AccountApp() {
  return (
    <React.Fragment>
      <div className="modal fade" id="aduser">
        <div
          className="modal-dialog mt-4"
          style={{ maxWidth: "50%", height: "auto", margin: "auto" }}
        >
          <div className="p-5 mt-2 modal-body bg-white">
            <h4 className="text-center">Create Account</h4>
            <hr className="border border-2 border-dark w-50 mx-auto" />
            <Row>
              <div className="col-md-4">
                <img
                  src={account}
                  alt="account"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div className="col-md-8">
                <form method="post">
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

                  <div className="form-input mt-2">
                    <b>
                      &nbsp;&nbsp;Don't have an account ?
                      <Link to="/register" target="_blank">Create account</Link>
                    </b>
                  </div>
                </form>
              </div>
            </Row>
          </div>
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
}
export default AccountApp;
