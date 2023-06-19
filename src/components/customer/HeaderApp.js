import React from "react";
import { Container, Row, Form } from "react-bootstrap";
function HeaderApp() {
  return (
    <React.Fragment>
      <Container fluid className="p-4 mt-0   shadow-lg">
        <Row>
          <div className="col-md-3 p-3">
            <i className="bi bi-phone"></i> (+91)-9998003879
          </div>
          <div className="col-md-6 p-3">
            <Form>
              <input
                type="text"
                name="search"
                placeholder="Search anything here!"
                className="form-control"
              />
            </Form>
          </div>
          <div className="col-md-3 p-3">
            <b>Like Us on :</b>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-instagram"></i>
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default HeaderApp;
