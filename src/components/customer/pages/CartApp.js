import React from "react";
import { Card,Button } from "react-bootstrap";
import cart from "../../../images/cart.webp";
function CartApp() {
  return (
    <React.Fragment>
      <div className="modal fade" id="adcrt">
        <div
          className="modal-dialog mt-4"
          style={{ maxWidth: "50%", height: "auto", margin: "auto" }}
        >
          <div className="p-5 mt-2 modal-body bg-white">
            <h4 className="text-left">View Cart</h4>
            <hr className="border border-2 border-dark w-25" />

            <Card className="p-3">
                <center>
                    <img src={cart} alt="cart"  style={{width:"80%", height:"150px"}}/>
                    <h3>Missing Cart items? </h3>
                    <p>Login to see the items you added previously</p>

                    <Button type="button">Login</Button>
                </center>
            </Card>
            



          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default CartApp;
