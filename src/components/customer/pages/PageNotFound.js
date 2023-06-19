import React from 'react';
import {Container,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import HeaderApp from '../HeaderApp';
import NavbarApp from '../NavbarApp';
import FooterApp from '../FooterApp';
import err from '../../../images/404.gif';
export default function PageNotFound() {
  return (
    <div>
    <HeaderApp />
    <NavbarApp />
<Container className='mt-2 p-5 ms- col-md-9 mx-auto'>

<img src={err} alt='page not found' style={{width:"80%",height:"300px"}} />
<br />
<br />
<Link to="/"><Button type='button' className='btn btn-block ms-5 mx-auto btn-dark text-white' style={{width:"68%"}}>Go to Home </Button></Link>
</Container>
    <FooterApp />
    </div>
  )
}
