import React from "react";
import { Container, Row, Form } from "react-bootstrap";
import img1 from '../../images/image.png';
import img2 from '../../images/product20.png';
import img3 from '../../images/man.png';
import img4 from '../../images/product1.png';
import img5 from '../../images/product2.png';
import img6 from '../../images/product4.png';
import img7 from '../../images/product5.png';
import img8 from '../../images/product6.png';
import img9 from '../../images/product7.png';
import img10 from '../../images/product8.png';
import img11 from '../../images/product9.png';
import img12 from '../../images/product10.png';
import img13 from '../../images/product11.png';
import img14 from '../../images/product12.png';
import img15 from '../../images/product13.png';
import img16 from '../../images/product14.png';
import img17 from '../../images/layer1.png';
function ContentApp() {
  return (
    <React.Fragment>

  <section id="content">

        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5">

                    <div className="card ms-5 border-0">
                            <img src={img1} style={{width:"100%"}} />

                            <div className="card-body shadow border-bottom-0">
                            <h6 className="text-danger mt-3">Hot Collection</h6>
                            <h2>New Trend For Women</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis neque eu erat aliquet posuere. Curabitur quis placerat nulla, 
                                nec vulputate arcu</p>

                            <button type="button" className="btn btn-dark text-white btn-sm p-2">Shop Now</button>    
                        </div>
                    </div>
                    </div>

                    <div className="col-md-5 mt-1  p-5">
                     <div className="content-man">
                        <a href="#" className="btn btn-sm   p-3 btn-outline-white position-absolute collection">View Collections</a>
                        <img src={img2} />
                       
                     </div>  

                     <div className="content-man mt-5">
                        <a href="#" className="btn btn-sm   p-3 btn-outline-white position-absolute collection">View Collections</a>
                        <img src={img3} />
                       
                     </div>   
                    </div>
                </div>



                <div className="container">
                 
               <h2 align="center" className="featured-hr"><span>Featured Items</span></h2>
                        
                <div className="featured w-25 mx-auto">
                <ul className="featured-link">
                    <li><a href="#">All</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Kids</a></li>
                    
                </ul>
                </div>
               

               <div className="row">
              
                <div className="col-md-3">
                    <img src={img4} className="img-fluid" style={{width:"100%",height: "350px" }} />
                    <h4> Womens kurti</h4>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-half text-danger"></span>
                    <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><a href="images/image(3).png" download="images/image(3).png"><i className="bi bi-download"></i></a></button>   

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button> </h3>

                </div>

                <div className="col-md-3">
                    <img src={img5} className="img-fluid" style={{width:"100%",height: "350px" }} />
                    <h4> Womens kurti</h4>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-half text-danger"></span>
                    <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><a href="images/image(3).png" download="images/image(3).png"><i className="bi bi-download"></i></a></button>   

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button> </h3>

                </div>


                <div className="col-md-3">
                    <img src={img6} className="img-fluid" style={{width:"100%",height: "350px" }} />
                    <h4> Womens kurti</h4>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-half text-danger"></span>
                    <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><a href="images/image(3).png" download="images/image(3).png"><i className="bi bi-download"></i></a></button>   

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button> </h3>

                </div>

                <div className="col-md-3">
                    <img src={img7} className="img-fluid" style={{width:"100%",height: "350px" }} />
                    <h4> Womens kurti</h4>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-half text-danger"></span>
                    <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><a href="images/image(3).png" download="images/image(3).png"><i className="bi bi-download"></i></a></button>   

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button> </h3>

                </div>



                <div className="col-md-3">
                    <img src={img8} className="img-fluid" style={{width:"100%",height: "350px" }} />
                    <h4> Womens kurti</h4>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-half text-danger"></span>
                    <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><a href="images/image(3).png" download="images/image(3).png"><i className="bi bi-download"></i></a></button>   

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button> </h3>

                </div>

                <div className="col-md-3">
                    <img src={img9} className="img-fluid" style={{width:"100%",height: "350px" }} />
                    <h4> Womens kurti</h4>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-half text-danger"></span>
                    <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><a href="images/image(3).png" download="images/image(3).png"><i className="bi bi-download"></i></a></button>   

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button> </h3>

                </div>


                <div className="col-md-3">
                    <img src={img10} className="img-fluid" style={{width:"100%",height: "350px" }} />
                    <h4> Womens kurti</h4>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-half text-danger"></span>
                    <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><a href="images/image(3).png" download="images/image(3).png"><i className="bi bi-download"></i></a></button>   

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button> </h3>

                </div>

                <div className="col-md-3">
                    <img src={img11} className="img-fluid" style={{width:"100%",height: "350px" }} />
                    <h4> Womens kurti</h4>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-fill text-danger"></span>
                    <span className="bi bi-star-half text-danger"></span>
                    <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><a href="images/image(3).png" download="images/image(3).png"><i className="bi bi-download"></i></a></button>   

                    <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button> </h3>

                </div>
            </div>
            </div>
          </div>
     
  
        <div className="off-grid mt-5  position-relative">

        <img src={img1} />
        <div className="carousel-caption1  d-none position-absolute d-md-block">
            <h5 className="text-dark">70% OFF</h5>
            <p className="text-dark">70% off on selected products</p>
          </div>
          
        <img src={img10} />
        
        <div className="carousel-caption2  d-none position-absolute d-md-block">
            <h5 className="text-white">AMR CHEHARA KHARAP NA</h5>
            <p className="text-white">Chehara Dia ki hoy</p>
          </div>
        
          </div>
          

          {/* trending items */}

          {/* featured items section start here */}

           <div className="container mt-0">
            <h2 align="center" className="featured-hr"><span>Trending Items</span></h2>
                     
            
            <div className="row">
           
           
             <div className="col-md-3">
                 <img src={img6} className="img-fluid" style={{width: "100%",height:"350px" }} />
                 <h4> Womens kurti</h4>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-half text-danger"></span>
                 <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-download"></i></button>   

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button> </h3>

             </div>

             <div className="col-md-3">
                 <img src={img7} className="img-fluid" style={{width: "100%",height:"350px" }} />
                 <h4> Womens kurti</h4>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-half text-danger"></span>
                 <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"></button>   

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button> </h3>

             </div>


             <div className="col-md-3">
                 <img src={img8} className="img-fluid" style={{width: "100%",height:"350px" }} />
                 <h4> Womens kurti</h4>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-half text-danger"></span>
                 <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"></button>   

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button> </h3>

             </div>

             <div className="col-md-3">
                 <img src={img9} className="img-fluid" style={{width: "100%",height:"350px" }} />
                 <h4> Womens kurti</h4>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-half text-danger"></span>
                 <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"></button>   

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button> </h3>

             </div>



             <div className="col-md-3">
                 <img src={img10} className="img-fluid" style={{width: "100%",height:"350px" }} />
                 <h4> Womens kurti</h4>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-half text-danger"></span>
                 <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"></button>   

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button> </h3>

             </div>

             <div className="col-md-3">
                 <img src={img11} className="img-fluid" style={{width: "100%",height:"350px" }} />
                 <h4> Womens kurti</h4>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-half text-danger"></span>
                 <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"></button>   

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button>
                 
                 </h3>

             </div>


             <div className="col-md-3">
                 <img src={img12} className="img-fluid" style={{width: "100%",height:"350px" }} />
                 <h4> Womens kurti</h4>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-half text-danger"></span>
                 <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><a href="images/image(3).png" download="images/image(3).png"><i className="bi bi-download"></i></a></button>   

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button> </h3>

             </div>

             <div className="col-md-3">
                 <img src={img13} className="img-fluid" style={{width: "100%",height:"350px" }} />
                 <h4> Womens kurti</h4>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-fill text-danger"></span>
                 <span className="bi bi-star-half text-danger"></span>
                 <h3><button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-heart"></i></button>

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><a href="images/image(3).png" download="images/image(3).png"><i className="bi bi-download"></i></a></button>   

                 <button type="button" className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"><i className="bi bi-share"></i></button> </h3>

             </div>
            </div>
         </div>
    

          <hr className="border border-1 w-25 mx-auto border-dark" />
          <h5 className="text-center">Load more </h5>
          <hr  className="border border-1 w-25 mx-auto border-dark" />
          <br /><br /><br />
  {/* client block section */}
    
  <div className="our-client mt-5">
        <div id="carouselExampleIndicators1" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner our-client-txt">
              <div className="carousel-item  active">
                <img src="#" className="d-block w-100" alt="..." />
                <div className="carousel-caption our-client-section d-none d-md-block  w-75 mx-auto">
                    <blockquote>
                        <p className="text-center"><q>Nunc vulputate odio vitae sapien euismod rhoncus. Vestibulum ante orci, elemet molestie sed, efficitur a augue. Quisque placerat laoreet lorem”</q> </p>

                        <p className="text-center"><img src={img17} className="rounded-circle" style={{width:"85px",height:"85px" }}/></p>
                        </blockquote>
                   
                  </div>
              </div>
              <div className="carousel-item">
                <img src="#" className="d-block w-100" alt="..." />
                <div className="carousel-caption our-client-section d-none d-md-block  w-75 mx-auto">
                    <blockquote>
                        <p className="text-center"><q>Nunc vulputate odio vitae sapien euismod rhoncus. Vestibulum ante orci, elemet molestie sed, efficitur a augue. Quisque placerat laoreet lorem” </q></p>
                        <p className="text-center"><img src={img16} className="img-fluid  rounded-circle" style={{width:"85px",height:"85px"}} /></p>
                        </blockquote>
                   
                  </div>
              </div>
              <div className="carousel-item">
                <img src="#" className="d-block w-100" alt="..." />
                <div className="carousel-caption our-client-section d-none d-md-block  w-75 mx-auto">
                    
                    <blockquote>
                    <p className="text-center"><q>Nunc vulputate odio vitae sapien euismod rhoncus. Vestibulum ante orci, elemet molestie sed, efficitur a augue. Quisque placerat laoreet lorem” </q> </p>
                    <p className="text-center"><img src={img15} className="img-fluid  rounded-circle" style={{width: "85px", height:"85px" }} /></p>
                    </blockquote>
                    
                  </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </div>

     <div className="container our-blogs mt-5">
        <h4 className="text-center">Our Blogs</h4>
        <hr  className="border border-1  mx-auto border-dark" style={{width: "8%" }} />
        
        <div className="row">
        
        <div className="col-md-4">
        <div className="card">
            <img src={img1} className="img-fluid" style={{width: "100%", height: "250px;" }} />
            <div className="card-body p-3">
            <h4>Some heading here</h4>
            <p>Vivamus ultrices ut erat ut ullamcorper. Sed sem est, pellentesque auctor malesuada in, sollicitupulvinar metus. Aliquam scelerisque aliquet faucibus</p>
            <p><button type="button" className="btn btn-sm btn-outline-dark">Read More</button></p>
            </div>
        </div>
        </div>

            
        <div className="col-md-4">
            <div className="card">
                <img src={img2} className="img-fluid" style={{width: "100%", height:"250px" }} />
                <div className="card-body p-3">
                <h4>Some heading here</h4>
                <p>Vivamus ultrices ut erat ut ullamcorper. Sed sem est, pellentesque auctor malesuada in, sollicitupulvinar metus. Aliquam scelerisque aliquet faucibus</p>
                <p><button type="button" className="btn btn-sm btn-outline-dark">Read More</button></p>
                </div>

            </div>
            </div>


                
        <div className="col-md-4">
            <div className="card">
                <img src={img5} className="img-fluid" style={{width: "100%", height: "250px" }} />
                <div className="card-body p-3">
                <h4>Some heading here</h4>
                <p>Vivamus ultrices ut erat ut ullamcorper. Sed sem est, pellentesque auctor malesuada in, sollicitupulvinar metus. Aliquam scelerisque aliquet faucibus</p>
                <p><button type="button" className="btn btn-sm btn-outline-dark">Read More</button></p>
                </div>
            </div>
            </div>

        
    </div>
  


<div className="container mt-5">
    <h2 align="center" className="featured-hr"><span>Shop by brands</span></h2>

    <section className="center slider">
        <div>
          <img src={img5} style={{width: "100%", height: "150px" }} />
        </div>
        <div>
          <img src={img6} style={{width: "100%", height: "150px" }} />
        </div>
        <div>
          <img src={img7} style={{width: "100%", height: "150px" }} />
        </div>
        <div>
          <img src={img8} style={{width: "100%", height: "150px" }} />
        </div>
        <div>
          <img src={img14} style={{width: "100%", height: "150px" }} />
        </div>
        <div>
          <img src={img15} style={{width: "100%", height: "150px" }} />
        </div>
        <div>
          <img src={img16} style={{width: "100%", height: "150px" }} />
        </div>
         </section>

</div>

</div>
  
</section>

</React.Fragment>


);
}
export default ContentApp;