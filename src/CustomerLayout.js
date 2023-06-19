import React from 'react';
import HeaderApp from './components/customer/HeaderApp';
import NavbarApp from './components/customer/NavbarApp';
import BannerApp from './components/customer/BannerApp';
import ContentApp from './components/customer/ContentApp';
import FooterApp from './components/customer/FooterApp';
import AccountApp from './components/customer/pages/AccountApp';
import CartApp from './components/customer/pages/CartApp';
export default function CustomerLayout() {
  return (
    <div>

    <HeaderApp />
    <NavbarApp />
    <BannerApp />
    <ContentApp />
    <FooterApp />
    <AccountApp />
    <CartApp />

      
    </div>
  )
}
