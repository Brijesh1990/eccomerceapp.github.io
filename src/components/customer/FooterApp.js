import React from "react";

function FooterApp()
{
    return (
     <>    
<div className="footer p-5">
<div className="row">
    <div className="col-md-9 mt-3">
        <div className="row">
            <div className="col-md-4">
                <ul className="footer-link">
                    <li><a href="" className=""><h4>Shops</h4></a></li>
                    <li className="mt-5"><a href="">New In</a></li>
                    <li><a href="">Women</a></li>
                    <li><a href="">Men</a></li>
                    <li><a href="">Bags & assesories</a></li>
                    <li><a href="">Tops brands</a></li>
                    <li><a href="">Sale & special offers</a></li>
                    <li><a href="">Lookbook</a></li>
                    
                </ul>
            </div>
            
            <div className="col-md-4">
                <ul className="footer-link">
                    <li><a href="" className=""><h4>Informations</h4></a></li>
                    <li className="mt-5"><a href="">New In</a></li>
                    <li><a href="">Women</a></li>
                    <li><a href="">Men</a></li>
                    <li><a href="">Bags & assesories</a></li>
                    <li><a href="">Tops brands</a></li>
                    <li><a href="">Sale & special offers</a></li>
                    <li><a href="">Lookbook</a></li>
                    
                </ul>
            </div>
            
            <div className="col-md-4">
                <ul className="footer-link">
                    <li><a href="" className=""><h4>Customer service</h4></a></li>
                    <li className="mt-5"><a href="">New In</a></li>
                    <li><a href="">Women</a></li>
                    <li><a href="">Men</a></li>
                    <li><a href="">Bags & assesories</a></li>
                    <li><a href="">Tops brands</a></li>
                    <li><a href="">Sale & special offers</a></li>
                    <li><a href="">Lookbook</a></li>
                    
                </ul>
            </div>
        </div>
    </div>
    <div className="col-md-3 mt-3">
        <h4 className="text-white">Newsletter</h4>
        <p className="text-white">Signup up for free newsletter</p>
        <input type="text" name="email" placeholder="Type your email" className="border border-1 border-white form-control bg-dark" />
        <input type="submit" name="subscribe" value="Subscribe" className="btn btn-sm w-100 subscribe-btn mt-2" />
        <p><i className="bi bi-facebook"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-twitter"></i>
        </p>
    

</div>
        
</div>
</div>

<div className="bg-dark p-5 text-white text-center">copyright@2023 All right reserved company

  <div className="scroll-top page-scroll visible-md visible-sm visible-lg visible-xs float-end subscribe-btn rounded-circle p-2">
    <a className="btn  text-white fs-4" href="#page-top" style={{opacity:"0.4"}}>
      <i className="bi bi-arrow-up-circle fs-5"></i>
    </a>
  </div>
  

</div> 
 

<div className="modal fade" id="login" role="dialog">
<div className="modal-dialog"  style={{minWidth:"50%"}}>
<div className="modal-content">

 <div className="row">
    <div className="col-md-5 p-5 bg-dark text-white">
        <h6>Create Account here</h6>
        <hr className="border border-1 w-50 border-white" />
        <img src="https://media.tenor.com/D68fgAJz0tcAAAAM/ekrut-start-up.gif" />
    </div>
    <div className="col-md-7 p-5">
        <h6>Login Form <button type="button" className="btn btn-sm btn-dark text-white float-end" data-bs-dismiss="modal">&times;</button></h6>
        <hr className="border border-1 w-50 border-dark" />
        <form method="post">
            <div className="input-group mt-2">
                <input type="text" name="email" placeholder="Email *" required className="form-control" />
            </div>
            
            <div className="input-group mt-2">
                <input type="password" name="password" placeholder="Password *" required className="form-control" />
            </div>

            <div className="input-group mt-2">
            <a href="#">forget Password</a>
            </div>

            <div className="input-group mt-2">
                <input type="submit" name="login" value="SignIn" placeholder="Email *" className="btn btn-dark text-white w-100" />
            </div>
            <div className="input-group mt-2">
                Don't have an account ? <a href="register.html">create account</a>
                </div>
        </form>
    </div>

 </div>   

</div>
</div>
</div>
</>

   )
}

export default FooterApp;