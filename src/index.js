import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './style.css';
import CustomerLayout from './CustomerLayout';
import ProductApp from './components/customer/pages/ProductApp';
import RegisterApp from './components/customer/pages/RegisterApp';
import PageNotFound from './components/customer/pages/PageNotFound';
import ContactApp from './components/customer/pages/ContactApp';
import ProductsdetailsApp from './components/customer/pages/ProductsdetailsApp';
import ViewCartApp from './components/customer/pages/ViewCartApp';

// admin sections 
import AdminLogin from './components/admin/AdminLogin';
import AdminLayout from './AdminLayout';
import ManageCustomer from './components/admin/pages/ManageCustomer';
import AddCategory from './components/admin/pages/AddCategory';
import AddSubCategory from './components/admin/pages/AddSubCategory';
import AddProducts from './components/admin/pages/AddProducts';
import ManageCategory from './components/admin/pages/ManageCategory';
import ManageSubCategory from './components/admin/pages/ManageSubCategory';
import ManageProducts from './components/admin/pages/ManageProducts';
import 'animate.css';
import ManageOrder from './components/admin/pages/ManageOrder'; 
import ManageFeedback from './components/admin/pages/ManageFeedback';
import ManageContact from './components/admin/pages/ManageContact';
import 'animate.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<CustomerLayout />}></Route>
      <Route path="/furniture-products" element={<ProductApp />}  />
      <Route path="/kids-products" element={<ProductApp />} />
      <Route path="/mens-products" element={<ProductApp />} />
      <Route path="/electronics-products" element={<ProductApp />} />
      <Route path="/books-products" element={<ProductApp />} />
      <Route path="/mobile-products" element={<ProductApp />} />
      <Route path="/offers-zone" element={<ProductApp />} />
      <Route path="/products-details" element={<ProductsdetailsApp />} />
      <Route path="/view-cart" element={<ViewCartApp />} />
      <Route path="/register" element={<RegisterApp />} />
      <Route path="/contact-us" element={<ContactApp />} />
      <Route path="*" element={<PageNotFound />} />
      {/* admin login here*/}
      <Route path="/admin-login" element={<AdminLogin />}></Route>
      <Route path="/admin-login/admin-dashboard" element={<AdminLayout />}></Route>
      <Route path="/admin-login/manage-customer" element={<ManageCustomer />}></Route>
      <Route path="/admin-login/addcategory" element={<AddCategory />}></Route>
      <Route path="/admin-login/addsubcategory" element={<AddSubCategory />}></Route>

      <Route path="/admin-login/addproducts" element={<AddProducts />}></Route>
      <Route path="/admin-login/managecategory" element={<ManageCategory />}></Route>
      <Route path="/admin-login/managesubcategory" element={<ManageSubCategory />}></Route>
      <Route path="/admin-login/manageproducts" element={<ManageProducts />}></Route>
      <Route path="/admin-login/manageorder" element={<ManageOrder />}></Route>
      <Route path="/admin-login/managefeedback" element={<ManageFeedback />}></Route>
      <Route path="/admin-login/managecontact" element={<ManageContact />}></Route>

  </Routes>
  </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
