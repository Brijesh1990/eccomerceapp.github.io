import React from 'react';
import HeaderApp from '../HeaderApp';
import NavbarApp from '../NavbarApp';
import FooterApp from '../FooterApp';

export default function RegisterApp() {
  return (
    <div>
      
     <HeaderApp />
     <NavbarApp /> 
          
    <section id="content">
        <div className="container mt-5">
        <h2 align="center" className="featured-hr"><span>SignUp Here</span></h2>        
        
        <div className="row">
            <div className="col-md-5 p-5 bg-dark text-white">
                <h6>Create Account here</h6>
                <hr className="border border-1 w-50 border-white" />
                <img src="https://media.tenor.com/D68fgAJz0tcAAAAM/ekrut-start-up.gif" />
            </div>
            <div className="col-md-7 p-5">
                <h6>Register Form </h6>
                <hr className="border border-1 w-50 border-dark" />
                <form method="post">
                    <div className="input-group mt-2">
                        <input type="text" name="email" placeholder="Email *" required className="form-control" />
                    </div>
                    
                    <div className="input-group mt-2">
                        <input type="password" name="password" placeholder="Password *" required className="form-control" />
                    </div>
        
                    <div className="input-group mt-2">
                        <input type="password" name="cpassword" placeholder="Confirm Password *" required className="form-control" />
                    </div>
        
                    <div className="input-group mt-2">
                        <input type="text" name="phone" placeholder="Phone *" required className="form-control" />
                    </div>

                    <div className="input-group mt-2">
                        <input type="file" name="img" placeholder="Confirm Password *" required className="form-control" />
                    </div>
                    <div className="input-group mt-2">
                        <input type="submit" name="register" value="SignUp" placeholder="Email *" className="btn btn-dark text-white w-100" />
                    </div>
                    <div className="input-group mt-2">
                        Already have an account ? &nbsp;<a href="#" data-bs-toggle="modal" data-bs-target="#login">Login here</a>
                        </div>
                </form>
            </div>
        
         </div>   
</div>
</section>
        
<FooterApp />

            
    </div>
  )
}
