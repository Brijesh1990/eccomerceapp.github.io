import React from 'react';
import HeaderApp from '../HeaderApp';
import NavbarApp from '../NavbarApp';
import FooterApp from '../FooterApp';

export default function ContactApp() {
  return (
    <div>
     <HeaderApp />
     <NavbarApp />  
    <section id="content">
        <div className="container mt-5">
        <h2 align="center" className="featured-hr"><span>Contact with Us</span></h2>        
        <div className="row">
            <div className="col-md-5 p-5 text-white">
                <h6>Office Address</h6>
                <hr className="border border-1 w-50 border-white" />

                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124435.19569203237!2d77.63003742405122!3d12.933419491772458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae13a416174f49%3A0x6eea803364bb0189!2sFlipkart%20Internet%20Private%20Limited%2C%20Devarabeesanahalli%2C%20Bellandur%20Buildings%20Alyssa%2C%20Begonia%20%26%20Clove%20Embassy%20Tech%20Village%2C%20Outer%20Ring%20Rd%2C%20Bengaluru%2C%20Karnataka%20560103!3m2!1d12.9268013!2d77.69169819999999!5e0!3m2!1sen!2sin!4v1686551619226!5m2!1sen!2sin" width="100%" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
            <div className="col-md-7 p-5">
                <h6>Contact Form </h6>
                <hr className="border border-1 w-50 border-dark" />
                <form method="post">
                <div className="input-group mt-2">
                <input type="text" name="name" placeholder="Name *" required className="form-control" />
            </div>

                    <div className="input-group mt-2">
                        <input type="text" name="email" placeholder="Email *" required className="form-control" />
                    </div>
                    

                    <div className="input-group mt-2">
                        <input type="text" name="phone" placeholder="Phone *" required className="form-control" />
                    </div>

                    <div className="input-group mt-2">
                    <input type="text" name="subject" placeholder="Subject *" required className="form-control" />
                </div>

                <div className="input-group mt-2">
                <textarea type="text" name="message" placeholder="Message *" required className="form-control"></textarea>
            </div>


                    <div className="input-group mt-2">
                        <input type="submit" name="sub" value="Send" placeholder="Email *" className="btn btn-dark text-white w-100" />
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
