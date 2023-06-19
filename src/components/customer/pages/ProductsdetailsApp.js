import React from 'react';
import {Link} from 'react-router-dom';
import HeaderApp from '../HeaderApp';
import NavbarApp from '../NavbarApp';
import FooterApp from '../FooterApp';
import AccountApp from './AccountApp';
import img4 from '../../../images/product1.png';

export default function ProductsdetailsApp() {
  return (
    <div>
  
    <HeaderApp />
    <NavbarApp />
    <AccountApp />

    <section id="content">
        <h2 align="center" class="featured-hr mt-5"><span>Products descriptions</span></h2>
        <div class="container">
            <div class="row">
                <div class="col-md-6 mt-5">

                    <img src={img4} alt='products' class="img-fluid" style={{width: "100%", height: "350px" }} />
                   
                    </div>

             
                    <div class="col-md-5 mt-1  p-5">
                        <h4> Womens kurti</h4>
                        <span class="bi bi-star-fill text-danger"></span>
                        <span class="bi bi-star-fill text-danger"></span>
                        <span class="bi bi-star-fill text-danger"></span>
                        <span class="bi bi-star-fill text-danger"></span>
                        <span class="bi bi-star-half text-danger"></span>

                        <h4>Rs. <del>4500/-</del> &nbsp;3500-/</h4>

                        <h4><input type="number" min="1" mx="10" value="1" placeholder="qty" class="form-control w-75" /></h4>

                        <h4 class="bg-primary text-white w-75 p-3">subtotal of Rs. 3500-/</h4>

                        <h3 class=""><button type="button" class="btn btn-sm btn-outline-dark btn-light rounded-circle p-3"><i class="bi bi-heart"></i></button>
    
                        <button type="button" class="btn btn-sm btn-outline-dark btn-light rounded-circle p-3"><a href={img4} download="images/image(3).png"><i class="bi bi-download"></i></a></button>   
    
                        <button type="button" class="btn btn-sm btn-outline-dark btn-light rounded-circle p-3"><i class="bi bi-share"></i></button> </h3>
                        <Link to="productsdetails.html" class="btn btn-sm btn-primary">Continue Shopping</Link>
                        &nbsp; &nbsp;
                        <Link to="/view-cart" class="btn btn-sm btn-danger">AddToCart</Link>
                     </div>  

                    </div>
                </div>

</section>

<FooterApp />
</div>
  )
}
