import React from 'react'
import {Link} from 'react-router-dom';
import {Container,Row,Form} from 'react-bootstrap';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';
import AdminFooter from '../AdminFooter';
export default function ManageCategory() {
  return (

    <div>
    <AdminHeader />
    <AdminSidebar />
    
    <div className='text-dark  admin-dashboard'>
    <div className='bg-white m-0 p-0'>  
    <h3 className='ms-5 fs-6 p-2'>Dashboard/Manage SubCategory</h3>
    <hr className='border border-1 bg-white w-25 mx-auto' />
    </div>
    <h3 className='ms-5 fs-4 p-2'>Manage All SubCategory</h3>
    <hr className='border border-1 border-dark w-25 ms-5' />
    <table className="table bg-white p-5 w-75 ms-5">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">CategoryName</th>
        <th scope="col">SubCategoryName</th>
        <th scope="col">Addeddate</th>
        <th scope="col">Descriptions</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mens clothes</td>
        <td>Mens shirts</td>
        <td>19/06/2023</td>
        <td>Good products</td>
        <td><Link to=""><i className='bi bi-pencil text-primary'></i></Link> | <Link to=""><i className='bi bi-trash text-danger'></i></Link></td>
      </tr>
      
      </tbody>
  </table>

    </div>
    <AdminFooter />
</div>
  )
}
