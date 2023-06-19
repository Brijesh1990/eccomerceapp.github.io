import React from 'react'
import {Link} from 'react-router-dom';
import {Container,Row,Form} from 'react-bootstrap';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';
import AdminFooter from '../AdminFooter';
export default function ManageCustomer() {
  return (

    <div>
    <AdminHeader />
    <AdminSidebar />
    
    <div className='text-dark  admin-dashboard'>
    <div className='bg-white m-0 p-0'>  
    <h3 className='ms-5 fs-6 p-2'>Dashboard/Add Category</h3>
    <hr className='border border-1 bg-white w-25 mx-auto' />
    </div>
    <h3 className='ms-5 fs-4 p-2'>Add Category</h3>
    <hr className='border border-1 border-dark w-25 ms-5' />
   
<Container className="p-3 col-md-6 ms-5">
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Category Name *</label>
<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Category Name *" />
</div>

<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Added Date *</label>
<input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Added date *" />
</div>

<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label">Descriptions</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<div class="mb-3">
<input type="submit" class="btn btn-dark text-white" value="AddCategory" />
<input type="reset" class="btn btn-danger text-white ms-3" value="Cancel" />
</div>
</Container>
</div>

<AdminFooter />
</div>
  )
}
